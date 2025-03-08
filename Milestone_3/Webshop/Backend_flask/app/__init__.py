from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow
from app.config import Config

# Initialisiere die Erweiterungen
db = SQLAlchemy()
ma = Marshmallow()
mail = Mail()
migrate = Migrate()

def create_app():
    # Erstelle die Flask-App-Instanz
    app = Flask(__name__)
    # App-Konfiguration laden
    app.config.from_object(Config)
    
    app.url_map.strict_slashes = False
    # CORS(app)
    
    CORS(app, resources={r"/api/*": {"origins": "*"}})
    # CORS konfigurieren
    # cors_origins = Config.CORS_ORIGINS.split(",")  # Ursprünge aus der Konfiguration
    # cors_methods = Config.CORS_METHODS
    
    # # CORS konfigurieren
    # CORS(app, resources={r"/api/*": {
    #     "origins": cors_origins, 
    #     "methods": cors_methods}})


    # Erweiterungen initialisieren
    db.init_app(app)
    ma.init_app(app)
    mail.init_app(app)
    migrate.init_app(app, db)

    # Routen (Blueprints) registrieren
    from app.routes import api_bp
    app.register_blueprint(api_bp)

    return app
