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

#!/bin/sh

# Run migrations
# echo "Running migrations..."
# python manage.py makemigrations
# python manage.py migrate

# python manage.py shell <<EOF
# import os
# from django.contrib.auth.models import User

# # Retrieve superuser details from environment variables
# username = os.getenv('DJANGO_SUPERUSER_USERNAME')
# email = os.getenv('DJANGO_SUPERUSER_EMAIL')
# password = os.getenv('DJANGO_SUPERUSER_PASSWORD')


# user = User.objects.filter(username=username).first()
# if not user:
#     User.objects.create_superuser(username, email, password)
# EOF