FROM node:lts

WORKDIR /app

# Installiere Abhängigkeiten
COPY package*.json ./
RUN npm install

# Kopiere den restlichen Code
COPY . .

# TypeScript-Build
RUN npm run build

# Port für den Service
EXPOSE 3000

# Startbefehl
CMD ["npm", "start"]
