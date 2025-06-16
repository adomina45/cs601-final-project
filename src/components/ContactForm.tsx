import { useCallback, useMemo, useState } from 'react';
import '../styles/main.css';

function ContactForm () {
    //States for email and api variables
    const [name, setName] = useState<string>('');
    const [returnEmail, setReturnEmail] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [validResponse, setValidResponse] = useState<boolean>();
    const [otherError, setOtherError] = useState<string>('');

    //memo to create the body for the email
    const emailBody = useMemo(
      () => ({
        service_id: "service_vk0amrv",
        template_id: "template_bo8d5wi",
        user_id: "aDIXDLtLye8LagXrF",
        template_params: {
            from_name: name,
            subject: subject,
            message: message,
            reply_to: returnEmail
        }}),
      [message, name, returnEmail, subject],
    );

    const handleSubmit = useCallback(
        //aync function to handle submit
        async (e: React.FormEvent<HTMLFormElement>) => {
            //prevent default browser behavior (doesn't allow refreshing the browser)
            e.preventDefault();
            //If variables are missing, don't send the emial
            if (!name) return;
            if (!message) return;
            if (!subject) return;
            if (!returnEmail) return;
            //reset response variables
            setValidResponse(undefined);
            setOtherError('');
            //Send email api request
            try {
                const resp = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(emailBody)
                });
            //set response
            setValidResponse(resp.ok);
            } catch (err) {
            //set error
            setOtherError(err instanceof Error ? err.message : String(err));
            }
        },
        [emailBody, message, name, returnEmail, subject],
    );

    return (
        <div id='contant-form-div'>
            <form onSubmit={handleSubmit} className='form' id='contant-form'>
                {(validResponse ? 
                <h3 style={{ textAlign: "center" }} id='success'>Email sent successfully</h3> : 
                ((otherError || validResponse === false) && <h3 style={{ textAlign: "center", color: "red" }} id='error'>{otherError ? otherError : 'Email failed to send'}</h3>))}
                <div id='name-div'>
                    <label id='name-label' htmlFor='name-input'><b>Name:</b> </label>
                    <input
                        id='name-input'
                        type="text"
                        value={name}
                        onChange={({ currentTarget: { value } }) => setName(value)}
                        required
                    />
                </div>
                <div id='email-div'>
                    <label id='email-label' htmlFor='email-input'><b>Email:</b> </label>
                    <input
                        id='email-input'
                        type="email"
                        value={returnEmail}
                        onChange={({ currentTarget: { value } }) => setReturnEmail(value)}
                        required
                    />
                </div>
                <div id='subject-div'>
                    <label id='subject-label' htmlFor='subject-input'><b>Subject:</b> </label>
                    <input
                        id='subject-input'
                        type="text"
                        value={subject}
                        onChange={({ currentTarget: { value } }) => setSubject(value)}
                        required
                    />
                </div>
                <div id='message-div'>
                    <label id='message-label' htmlFor='message-input'><b>Message:</b> </label>
                    <div id='message-input-div'>
                        <textarea id='message-input' rows={15} value={message} onChange={({ currentTarget: { value } }) => setMessage(value)} required/>
                    </div>
                </div>
                <span className="button" id='button-span'>
                    <button type="submit" aria-label="Send Email Button" id='send-email-button'>
                        Send Email
                    </button>
                </span>
            </form>
        </div>
    );
    
}

export default ContactForm;