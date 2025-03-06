from flask import Flask, Blueprint, request, jsonify
import os
from app.util.email import sendEmail


sendGrid_bp = Blueprint('email', __name__)

@sendGrid_bp.route('/send-email', methods=['POST'])
def send_email_route():
    data = request.get_json()
    to_email = data.get("to")
    subject = data.get("subject")
    content = data.get("content")
    
    if not all([to_email, subject, content]):
        return jsonify({"error": "Fehlende Parameter"}), 400

    status, body, headers = sendEmail.send_email(to_email, subject, content)
    
    return jsonify({"status": status, "message": "E-Mail gesendet"})