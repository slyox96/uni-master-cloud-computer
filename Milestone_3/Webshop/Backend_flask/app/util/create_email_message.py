import base64
from email.mime.text import MIMEText

def create_email_message(sender, to, subject, message_text):
    """Erstellt eine MIME-Text-E-Mail."""
    message = MIMEText(message_text)
    message["to"] = to
    message["from"] = sender
    message["subject"] = subject
    return {"raw": base64.urlsafe_b64encode(message.as_bytes()).decode()}