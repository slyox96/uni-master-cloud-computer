import base64
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from flask import Flask, Blueprint, request, jsonify
from app.util.email import getGmailService
from app.util.email import sendEmail

gmail_routes = Blueprint('email', __name__)

@gmail_routes.route('/send-email', methods=['POST'])
def send_email_with_gmail_api():    
    # data = request.json
    # recipient = data.get("to")
    # subject = data.get("subject")
    # message_text = data.get("message")

    # # Erstelle die Nachricht im MIME-Format
    # message = MIMEMultipart()
    # message['to'] = recipient
    # message['subject'] = subject
    # msg = MIMEText(message_text)
    # message.attach(msg)

    # # Nachricht in Base64 URL-kodieren
    # raw_message = base64.urlsafe_b64encode(message.as_bytes()).decode()

    # # Gmail-Service
    # service = getGmailService.get_gmail_service()
    
    # # Nachricht senden
    # sent_message = service.users().messages().send(
    #     userId="me", body={"raw": raw_message}).execute()

    # # Rückgabe der Nachricht-ID als Antwort
    # return jsonify({"message_id": sent_message.get("id")})