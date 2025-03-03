from flask import Blueprint, jsonify, current_app
from pathlib import Path
import json

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/auth", methods=["GET"])
def auth():
    path = Path(current_app.config.get("GOOGLE_APPLICATION_CREDENTIALS_PATH", "Backend_flask/credentials.json"))

    try:
        with path.absolute().open("r") as file:  # Fix: .absolute()
            credentials = json.load(file)

        return jsonify({"credentials": credentials, "file_path": str(path.absolute())})  # Convert path to string

    except FileNotFoundError:
        return jsonify({"error": "File not found", "file_path": str(path.absolute())}), 404
    except json.JSONDecodeError:
        return jsonify({"error": "Invalid JSON format", "file_path": str(path.absolute())}), 400
