FROM node:lts

WORKDIR /app

# Installiere nur die benötigten Abhängigkeiten
COPY package*.json ./
RUN npm install

# Kopiere den restlichen Code
COPY . .

# Prisma-Client generieren und TypeScript kompilieren
RUN npx prisma generate
RUN npm run build

# Der Port, auf dem die App läuft
EXPOSE 4000

# Führe Migrationen aus und starte die Anwendung
CMD ["sh", "-c", "npx prisma migrate deploy && npm run start"]
