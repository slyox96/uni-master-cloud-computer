# Dockerfile.prod für die Produktionsumgebung

FROM node:lts

WORKDIR /app

# Kopiere nur die package-Dateien und installiere Abhängigkeiten
COPY package*.json ./
RUN npm install
# RUN npm install --production

# Kopiere den restlichen Code
COPY . .

# Prisma-Client generieren
RUN npm install typescript
RUN npm run prisma:generate
RUN npx prisma migrate deploy
RUN npm run build

# Der Port, auf dem die App läuft
EXPOSE 3000

# Startet die Anwendung in der Produktionsumgebung
CMD [ "npm" "start"]

