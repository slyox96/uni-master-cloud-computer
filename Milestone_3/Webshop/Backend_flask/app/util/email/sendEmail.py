import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

def send_email(to_email, subject, message):
    try:
        msg = Mail(
            from_email=os.getenv("MAIL_DEFAULT_SENDER", "MAIL_DEFAULT_SENDER"),
            to_emails=to_email,
            subject=subject,
            plain_text_content=message
        )

        sg = SendGridAPIClient(os.getenv("SENDGRID_API_KEY"))
        response = sg.send(msg)

        return response.status_code, response.body, response.headers
    except Exception as e:
        return 500, str(e), None 
