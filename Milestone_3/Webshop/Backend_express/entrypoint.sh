#!/bin/bash

# Warten auf die Datenbank, falls sie noch nicht verfügbar ist
echo "Warte auf die Datenbank..."
wait-for-it database:5432 --timeout=30 --strict -- echo "Datenbank ist verfügbar!"

# Prisma Migrations anwenden
echo "Führe Prisma Migrations durch..."
npm run prisma:deploy

# TypeScript build ausführen (optional, falls noch nicht geschehen)
echo "Baue die Anwendung..."
npm run build

# Jetzt den Node.js-Prozess starten
echo "Starte die Anwendung..."
exec npm run start
