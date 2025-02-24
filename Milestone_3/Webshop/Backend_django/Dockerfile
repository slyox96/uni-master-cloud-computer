# Use an official Python image as the base
FROM python:3.9

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file
COPY Backend_django/requirements.txt .

# Install curl and wait-for-it
RUN apt-get update && apt-get install -y curl
# RUN curl -sSL https://github.com/vishnubob/wait-for-it/releases/download/v2.2.3/wait-for-it-linux-amd64 -o /usr/local/bin/wait-for-it && chmod +x /usr/local/bin/wait-for-it

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the project files
COPY Backend_django /app
RUN chmod +x /app/init_superuser.sh

# Expose the port Django runs on
EXPOSE 8000

# Run migrations and then start the Django server
CMD ["sh", "-c", "/app/init_superuser.sh && python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
