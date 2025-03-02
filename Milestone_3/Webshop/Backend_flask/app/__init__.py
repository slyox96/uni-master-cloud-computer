from flask import Flask
from app.models import db
from app.routes import api_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object("app.config.Config")

    db.init_app(app)

    with app.app_context():
        db.create_all()

    app.register_blueprint(api_bp)

    return app
