# Verwende das offizielle Node.js LTS Image
FROM node:lts

# Setze das Arbeitsverzeichnis im Container
WORKDIR /app

# Kopiere nur die package.json und package-lock.json, um die Abhängigkeiten zu installieren
COPY package*.json ./

# Installiere die Produktionsabhängigkeiten
RUN npm install

# Kopiere den gesamten Rest des Projekts
COPY . .

# Installiere TypeScript, Prisma und baue die Anwendung
RUN npm install typescript
RUN npm run prisma:generate
RUN npm run prisma:deploy
RUN npm run build

# Exponiere den Port, auf dem die App läuft
EXPOSE 3000

# Starte die Anwendung
CMD ["npm", "start"]
