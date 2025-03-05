from app import create_app

# Erstelle die Flask-App
app = create_app()

# Starten der App
if __name__ == "__main__":
    app.run(debug=True)
