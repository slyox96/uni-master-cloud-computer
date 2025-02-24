#!/bin/sh

# Run migrations
echo "Running migrations..."
python manage.py makemigrations
python manage.py migrate

# Create the superuser if it doesn't exist
echo "Checking if superuser exists..."
python manage.py shell <<EOF
from django.contrib.auth.models import User
import os

# Retrieve superuser details from environment variables
username = os.getenv('DJANGO_SUPERUSER_USERNAME')
email = os.getenv('DJANGO_SUPERUSER_EMAIL')
password = os.getenv('DJANGO_SUPERUSER_PASSWORD')

# Print out the values to debug
print(f"Username: {username}")
print(f"Email: {email}")
print(f"Password: {password}")

# Check if the superuser exists
if not User.objects.filter(username=username).exists():
    print(f"Creating superuser {username}...")
    # Create the user without a password
    user = User.objects.create_user(username=username, email=email, password=password)
    
    # Set the password for the user
    # user.set_password(password)
    
    # Save the user
    user.save()
    print(f"Superuser {username} created successfully.")
else:
    print(f"Superuser {username} already exists.")
EOF

