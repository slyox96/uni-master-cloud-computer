from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
import base64
from email.message import EmailMessage

def send_email():
    creds = get_credentials()  # Hol die Berechtigungen
    service = build("gmail", "v1", credentials=creds)  # Baue den Gmail API-Client

    # Erstelle die Nachricht
    message = EmailMessage()
    message.set_content("Dies ist eine automatisierte E-Mail!")
    message["To"] = "empfaenger@example.com"
    message["From"] = "deine_email@example.com"
    message["Subject"] = "Automatisierte E-Mail"

    # Nachricht codieren
    encoded_message = base64.urlsafe_b64encode(message.as_bytes()).decode()
    send_message = {"raw": encoded_message}

    try:
        # Sende die Nachricht
        sent_message = service.users().messages().send(userId="me", body=send_message).execute()
        print(f'E-Mail gesendet! Nachricht-ID: {sent_message["id"]}')
        return sent_message
    except HttpError as error:
        print(f"Ein Fehler ist aufgetreten: {error}")
