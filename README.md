# ChiptuningFile.de – Frontend (React SPA)

## Voraussetzungen

- Node.js >= 18
- npm oder bun

## Installation

```bash
npm install
```

## Entwicklung

Lokalen Dev-Server starten:

```bash
npm run dev
```

Die App ist dann unter `http://localhost:8080` erreichbar.

### Umgebungsvariablen

Erstelle eine `.env`-Datei im Projektroot:

```env
VITE_API_BASE_URL=https://api.chiptuningfile.de
```

| Variable | Beschreibung | Standard |
|---|---|---|
| `VITE_API_BASE_URL` | URL zum Symfony-Backend | `/api` |

## Produktions-Build

```bash
npm run build
```

Die kompilierten Dateien landen in `dist/`. Der Base-Path ist auf `/build/spa/` gesetzt, passend zur Symfony-Integration.

## Symfony-Integration

### 1. Assets kopieren

Den Inhalt von `dist/` nach `public/build/spa/` im Symfony-Projekt kopieren:

```bash
cp -r dist/* /pfad/zum/symfony-projekt/public/build/spa/
```

### 2. Twig-Template anlegen

Erstelle `templates/spa.html.twig`:

```twig
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ChiptuningFile.de</title>
    <link rel="stylesheet" href="{{ asset('build/spa/assets/' ~ spa_css) }}" />
</head>
<body>
    <div id="root"></div>
    <script type="module" src="{{ asset('build/spa/assets/' ~ spa_js) }}"></script>
</body>
</html>
```

### 3. Controller erstellen

Erstelle `src/Controller/SpaController.php`:

```php
<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class SpaController extends AbstractController
{
    #[Route('/{path}', name: 'spa_catchall', requirements: ['path' => '.*'], priority: -1)]
    public function index(): Response
    {
        $assetsDir = $this->getParameter('kernel.project_dir') . '/public/build/spa/assets/';
        $files = scandir($assetsDir);

        $jsFile = '';
        $cssFile = '';

        foreach ($files as $file) {
            if (str_starts_with($file, 'index-') && str_ends_with($file, '.js')) {
                $jsFile = $file;
            }
            if (str_starts_with($file, 'index-') && str_ends_with($file, '.css')) {
                $cssFile = $file;
            }
        }

        return $this->render('spa.html.twig', [
            'spa_js' => $jsFile,
            'spa_css' => $cssFile,
        ]);
    }
}
```

> **Wichtig:** Die Catch-all-Route hat `priority: -1`, damit Symfony-API-Routen Vorrang haben.

### 4. Cache leeren

```bash
php bin/console cache:clear
```

## Projektstruktur

```
src/
├── components/     # Wiederverwendbare UI-Komponenten
├── hooks/          # Custom React Hooks
├── lib/            # Hilfsfunktionen und API-Client
└── pages/          # Seitenkomponenten (Routing)
```

## Verfügbare Skripte

| Befehl | Beschreibung |
|---|---|
| `npm run dev` | Startet den Entwicklungsserver |
| `npm run build` | Erstellt den Produktions-Build |
| `npm run preview` | Vorschau des Builds |
| `npm run lint` | Prüft den Code mit ESLint |
