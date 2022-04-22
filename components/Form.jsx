import React from 'react'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

function Form() {
    const [email, setEmail] = useState("");
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [error, setError] = useState(null);
    const [pending, setPending] = useState(null);

    const submit = async (e) => {
        // We will submit the form ourselves
        e.preventDefault()
        setPending(true)
        let response = await fetch("/api/waitlist", {
            method: "POST",
            body: JSON.stringify({email: email})
        })
        setPending(false)
        if (response.ok) {
            setHasSubmitted(true);
        } else {
            setError(await response.text())
        }
        // TODO: make a POST request to our backend
    }

    // If the user successfully submitted their email,
    //   display a thank you message
    if (hasSubmitted) {
        return <div className={styles.formWrapper}>
            <span className={styles.formCompletedText}>
                Thanks for signing up to our Waitlist! We will be in touch soon.
            </span>
        </div>
    }
    if (pending) {
        return <div className={styles.formWrapper}>
            <span className={styles.formPendingText}>
                Pending...
            </span>
        </div>
    }

    // Otherwise, display the form
    return <form className={styles.formWrapper} onSubmit={submit}>
        
        <input type="email" required placeholder="Email"
               className={[styles.formInput, styles.formTextInput].join(" ")}
               value={email} onChange={e => setEmail(e.target.value)}/>
        
        <button type="submit" className={[styles.joinButton].join(" ")}>
            Nous Rejoindre
        </button>
        
        {error ? <div className={styles.error}>{error}</div> : null}
    </form>
}

export default Form