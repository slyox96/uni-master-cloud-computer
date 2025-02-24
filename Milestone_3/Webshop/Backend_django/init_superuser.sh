#!/bin/sh
# Wait until the database is available
/usr/local/bin/wait-for-it database_django:5432 --timeout=30 --strict -- echo "PostgreSQL is up - creating superuser"

# Create the superuser (Username: admin, Email: admin@webshop.com, Password: webshop)
python manage.py shell <<EOF
from django.contrib.auth.models import User
user = User.objects.filter(username="admin").first()
if not user:
    User.objects.create_superuser('admin', 'admin@webshop.com', 'webshop')
EOF
