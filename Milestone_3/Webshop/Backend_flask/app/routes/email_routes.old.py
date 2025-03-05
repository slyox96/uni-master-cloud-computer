from flask import Blueprint, request, jsonify, current_app
from flask_mail import Message
from app.auth.gmail_auth import get_credentials


email_bp = Blueprint('email', __name__)

@email_bp.route('/send_email', methods=['POST'])
def send_email():
    data = request.get_json()
    recipient = data.get("recipient")
    subject = data.get("subject")
    body = data.get("body")

    if not recipient or not subject or not body:
        return jsonify({"error": "Fehlende Felder"}), 400

    msg = Message(subject=subject, recipients=[recipient])
    msg.body = body
    msg.html = f"<p>{body}</p>"

    try:
        # Mail-Instanz innerhalb des App-Kontexts holen
        mail = current_app.extensions["mail"]
        mail.send(msg)
        return jsonify({"message": "E-Mail erfolgreich gesendet!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
