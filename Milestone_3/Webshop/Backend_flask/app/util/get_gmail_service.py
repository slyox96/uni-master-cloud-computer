import os
from flask import current_app
from google.oauth2 import service_account
from googleapiclient.discovery import build
from pathlib import Path

SCOPES = ["https://www.googleapis.com/auth/gmail.send"]

def get_gmail_service():
    """Authentifiziert sich mit der Gmail API und gibt den Dienst zurück."""
    
    # Hole den Pfad zur Credentials-Datei aus der Flask-Config oder nutze einen Fallback
    credentials_path = current_app.config.get("GOOGLE_APPLICATION_CREDENTIALS_PATH", "Backend_flask/credentials.json")

    # Konvertiere den String-Pfad in ein Path-Objekt für bessere Handhabung
    CREDENTIALS_FILE = Path(credentials_path)

    # Überprüfe, ob die Datei existiert
    if not CREDENTIALS_FILE.exists():
        raise FileNotFoundError(f"Fehler: Die Datei {CREDENTIALS_FILE} existiert nicht!")

    print(f"Die Datei {CREDENTIALS_FILE} wurde gefunden.")

    # Lade die Anmeldeinformationen und erstelle den Gmail-Service
    creds = service_account.Credentials.from_service_account_file(
        credentials_path, scopes=SCOPES  # str() konvertiert Path zu String für Kompatibilität
    )
    service = build("gmail", "v1", credentials=creds)
    
    return service
