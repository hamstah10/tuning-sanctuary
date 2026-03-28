#!/bin/bash
set -euo pipefail

# ============================================================
# Deploy-Skript: React SPA → Symfony
# Erstellt den Produktions-Build und kopiert die Assets
# ins Symfony-Projekt.
#
# Verwendung:
#   ./deploy.sh /pfad/zum/symfony-projekt
#   ./deploy.sh                          (nutzt SYMFONY_DIR)
# ============================================================

SYMFONY_DIR="${1:-${SYMFONY_DIR:-}}"

if [ -z "$SYMFONY_DIR" ]; then
  echo "❌ Fehler: Kein Symfony-Projektpfad angegeben."
  echo ""
  echo "Verwendung:"
  echo "  ./deploy.sh /pfad/zum/symfony-projekt"
  echo "  SYMFONY_DIR=/pfad/zum/symfony-projekt ./deploy.sh"
  exit 1
fi

if [ ! -d "$SYMFONY_DIR" ]; then
  echo "❌ Fehler: Verzeichnis '$SYMFONY_DIR' existiert nicht."
  exit 1
fi

TARGET_DIR="$SYMFONY_DIR/public/build/spa"

echo "🔨 Starte Produktions-Build..."
npm run build

echo "📁 Erstelle Zielverzeichnis: $TARGET_DIR"
mkdir -p "$TARGET_DIR"

echo "🗑️  Lösche alte SPA-Assets..."
rm -rf "${TARGET_DIR:?}/"*

echo "📦 Kopiere Build-Artefakte..."
cp -r dist/* "$TARGET_DIR/"

echo "🧹 Leere Symfony-Cache..."
if [ -f "$SYMFONY_DIR/bin/console" ]; then
  php "$SYMFONY_DIR/bin/console" cache:clear --no-warmup 2>/dev/null || true
  php "$SYMFONY_DIR/bin/console" cache:warmup 2>/dev/null || true
fi

echo ""
echo "✅ Deployment abgeschlossen!"
echo "   Assets kopiert nach: $TARGET_DIR"
echo ""
echo "   JS:  $(ls "$TARGET_DIR/assets/" | grep -E '^index-.*\.js$' | head -1)"
echo "   CSS: $(ls "$TARGET_DIR/assets/" | grep -E '^index-.*\.css$' | head -1)"
