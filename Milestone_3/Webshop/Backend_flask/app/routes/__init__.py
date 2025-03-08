# app/routes/__init__.py
from flask import Blueprint

api_bp = Blueprint("api", __name__, url_prefix="/api")

from app.routes.category_routes import category_bp
from app.routes.product_routes import product_bp
from app.routes.order_routes import order_bp

from app.routes.sendGrid_routes import sendGrid_bp

api_bp.register_blueprint(category_bp)
api_bp.register_blueprint(product_bp)
api_bp.register_blueprint(order_bp)

api_bp.register_blueprint(sendGrid_bp)
