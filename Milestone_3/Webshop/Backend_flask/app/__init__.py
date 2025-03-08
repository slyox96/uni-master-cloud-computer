from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow  # Marshmallow importieren
from app.config import Config

# Initialisiere die Erweiterungen direkt hier
db = SQLAlchemy()  # Instanz von SQLAlchemy
ma = Marshmallow()  # Instanz von Marshmallow
mail = Mail()  # Flask-Mail Instanz
migrate = Migrate()  # Flask-Migrate Instanz

def create_app():
    # Erstelle die Flask-App-Instanz
    app = Flask(__name__)
    
    # Konfiguriere die App mit den Einstellungen aus der Config-Datei
    app.config.from_object(Config)

    # Initialisiere die Erweiterungen mit der Flask-App
    db.init_app(app)   # SQLAlchemy initialisieren
    ma.init_app(app)   # Marshmallow initialisieren
    mail.init_app(app)  # Flask-Mail initialisieren
    migrate.init_app(app, db)  # Flask-Migrate initialisieren mit der db-Instanz

    # Importiere und registriere die Blueprints für die Routen
    from app.routes import api_bp
    app.register_blueprint(api_bp)  # Registriere die API-Routen mit der App

    return app  # Gib die initialisierte Flask-App zurück
