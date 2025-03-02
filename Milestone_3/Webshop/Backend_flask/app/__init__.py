from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail
from app.config import Config
from app.models import db
from app.routes import api_bp

mail = Mail()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Initialisierung von Extensions mit der App
    db.init_app(app)
    mail.init_app(app)

    # Registriere den API-Blueprint
    app.register_blueprint(api_bp)

    with app.app_context():
        db.create_all()  # Erstelle alle Tabellen, falls nicht vorhanden

    return app
