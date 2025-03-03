import os
from flask import Blueprint, request, jsonify, current_app
from app.util.create_email_message import create_email_message
from app.util.get_gmail_service import get_gmail_service

email_bp = Blueprint('email', __name__)

@email_bp.route('/send-email', methods=['POST'])
def send_email():
    """Sendet eine E-Mail mit der Gmail API."""
    try:
        data = request.get_json()
        sender = current_app.config.get("EMAIL_SENDER", "webshop@gmail.com")
        recipient = data["to"]
        subject = data["subject"]
        message_text = data["message"]

        service = get_gmail_service()
        email_message = create_email_message(sender, recipient, subject, message_text)
        
        send_message = service.users().messages().send(userId="me", body=email_message).execute()
        
        return jsonify({"message": "E-Mail erfolgreich gesendet!", "id": send_message["id"]})

    except Exception as e:
        return jsonify({"error": str(e)}), 500
