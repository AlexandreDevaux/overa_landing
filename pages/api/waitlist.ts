import validator from "email-validator"
import { google } from 'googleapis';





export default async function handler(req: { method: string; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; }) {
    // We only want to handle POST requests, everything else gets a 404
    if (req.method === 'POST') {
        await postHandler(req, res);
    } else {
        res.status(404).send("");
    }
}

async function postHandler(req: { method?: string; body?: any; }, res: { status: any; }) {
    const body = JSON.parse(req.body);
    const email = parseAndValidateEmail(body, res);
    await saveEmail(email);
    res.status(200).send("")
}

async function saveEmail(email: string) {
    // TODO: what to do here?
    console.log("Got email: " + email)

    console.log(process.env.GOOGLE_PRIVATE_KEY)
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const response = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GSHEET_ID,
        range: 'Sheet1!A:A',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
            values: [
                [email],
            ]
        }
    });
}

// Make sure we receive a valid email
function parseAndValidateEmail(body: { [x: string]: any; }, res: { status: any; }) {
    if (!body) {
        res.status(400).send("Malformed request");
    }

    const email = body["email"]
    if (!email) {
        res.status(400).send("Missing email");
    } else if (email.length > 300) {
        res.status(400).send("Email is too long");
    } else if (!validator.validate(email)) {
        res.status(400).send("Invalid email");
    }

    return email
}