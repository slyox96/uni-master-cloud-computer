#!/bin/sh

# Run migrations
echo "Running migrations..."
python manage.py makemigrations
python manage.py migrate

python manage.py shell <<EOF
from django.contrib.auth.models import User
user = User.objects.filter(username="admin").first()
if not user:
    User.objects.create_superuser('admin', 'admin@webshop.com', 'webshop')

EOF