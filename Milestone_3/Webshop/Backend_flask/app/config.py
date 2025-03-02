import os

class Config:
    SQLALCHEMY_DATABASE_URI = "sqlite:///webshop.db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
     # E-Mail Konfiguration
    MAIL_SERVER = 'smtp.gmail.com'
    MAIL_PORT = 587
    MAIL_USE_TLS = True
    MAIL_USERNAME = os.getenv('MAIL_USERNAME')
    MAIL_PASSWORD = os.getenv('MAIL_PASSWORD')
    MAIL_DEFAULT_SENDER = MAIL_USERNAME
