import { useCallback, useMemo, useState } from 'react';
import '../styles/main.css';

function ContactForm () {
    const [name, setName] = useState<string>('');
    const [returnEmail, setReturnEmail] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [validResponse, setValidResponse] = useState<boolean>();
    const [otherError, setOtherError] = useState<string>('');

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
      async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!message) return;
        if (!subject) return;
        if (!returnEmail) return;
        try {
            const resp = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(emailBody)
            });
          setValidResponse(resp.ok);
        } catch (err) {
          setOtherError(err instanceof Error ? err.message : String(err));
        }
      },
      [emailBody, message, returnEmail, subject],
    );

    return (
        <div>
            {(validResponse === undefined && !otherError) ?
                <form onSubmit={handleSubmit}>
                    <div>
                        <label><b>Name:</b> </label>
                        <input
                            type="text"
                            value={name}
                            onChange={({ currentTarget: { value } }) => setName(value)}
                            required
                        />
                    </div>
                    <div>
                        <label><b>Email:</b> </label>
                        <input
                            type="email"
                            value={returnEmail}
                            onChange={({ currentTarget: { value } }) => setReturnEmail(value)}
                            required
                        />
                    </div>
                    <div>
                        <label><b>Subject:</b> </label>
                        <input
                            type="text"
                            value={subject}
                            onChange={({ currentTarget: { value } }) => setSubject(value)}
                            required
                        />
                    </div>
                    <div>
                        <label><b>Message:</b> </label>
                        <div>
                            <textarea rows={30} value={message} onChange={({ currentTarget: { value } }) => setMessage(value)} required/>
                        </div>
                    </div>
                    <span className="button">
                        <button type="submit">
                            Send Email
                        </button>
                    </span>
                </form>
            : (validResponse ? 
                <h3>Email sent successfully</h3> : 
                <h3>{otherError ? otherError : 'Email failed to send'}</h3>)}
        </div>
    );
    
}

export default ContactForm;