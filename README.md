# Budget Studio – Prototyp 0.1

Ein lokaler, offlinefähiger Web-App-Prototyp für iPhone und PC, **noch keine native iOS-App**.

## Enthalten
- Dashboard mit monatlichen Einnahmen, Ausgaben und Kontoständen
- Buchungen und mehrere Konten
- Sparziele, Schulden, Abos (teilweise manuell)
- Drei Designs
- JSON-Backup und Wiederherstellung
- Lokale Speicherung im Browser (localStorage)

## Auf Windows testen
1. ZIP entpacken und im Ordner ein Terminal öffnen.
2. `python -m http.server 8000` starten.
3. `http://localhost:8000` im Browser öffnen.

## Auf iPhone testen
Für die Installation auf dem Home-Bildschirm muss die App auf einer **HTTPS-Webadresse** bereitgestellt werden. Danach in Safari öffnen, Teilen > Zum Home-Bildschirm. Die Anwendung wird nach dem ersten vollständigen Laden offline aus dem Cache geladen. Die Daten bleiben lokal auf dem jeweiligen Gerät. Ein direkter Aufruf der Dateien aus der Dateien-App reicht für die installierbare PWA nicht aus.

## Einschränkungen
- **Nicht produktionsreif.** Keine Bankanbindung, Verschlüsselung, Synchronisierung, Benutzerkonten oder automatische Schuldentilgung.
- localStorage kann bei gelöschten Browserdaten verloren gehen; regelmäßig JSON-Backup anlegen.
- Die Eingaben wurden nicht umfassend gegen fehlerhafte/absichtlich manipulierte Sicherungsdateien gehärtet.
- Jahreswechsel funktioniert für Buchungen über das Datum, die Übersicht zeigt zunächst den aktuellen Monat.
- Keine echte iOS-IPA; dafür später iOS-Build, Signierung und geeigneter Test-/Verteilungsweg notwendig.
- Vor Verkauf sind ausführliche Funktions-, Datenschutz- und Gerätetests nötig.

## Version 0.2: Offline-Test über HTTPS
Der Service Worker speichert die HTML-, CSS-, JavaScript- und Icon-Dateien beim ersten vollständigen Laden. Der erste Aufruf muss online stattfinden. Nach dem Laden der Seite einige Sekunden warten, dann über Safari zum Home-Bildschirm hinzufügen und erst anschließend offline testen.

**Bereitstellung:** Den Inhalt dieses Ordners als statische Website auf einem HTTPS-Host bereitstellen (z. B. GitHub Pages oder Netlify). Keine Finanzdaten in das Hosting-Verzeichnis hochladen. Nur die App-Dateien gehören dorthin. Die App verwendet weiterhin localStorage auf dem jeweiligen Gerät.

**Achtung:** Eine neue HTTPS-Adresse hat einen anderen Speicherbereich als die bisherige lokale HTTP-Adresse. Bereits eingetragene Daten erscheinen dort nicht automatisch. Vor dem Wechsel in der alten App ein JSON-Backup exportieren und bei Bedarf in der neuen Version importieren. Daten aus der Home-Bildschirm-App können ebenfalls getrennt von Safari gespeichert sein.

**Offline-Test:** HTTPS-Adresse in Safari öffnen, kurz warten, über Teilen > Zum Home-Bildschirm installieren, App öffnen, Testbuchung anlegen, App schließen, Flugmodus aktivieren, App neu öffnen. Funktioniert der Start nicht, wieder online gehen und neu laden. Eine Installation als echte native iPhone-App ist dies nicht.

**Hinweis zur Privatsphäre:** Hosting-Betreiber können technische Zugriffsprotokolle sehen; Finanzbuchungen werden durch diese Version nicht an den Host übertragen. Für echte Finanzdaten regelmäßig Sicherungen anlegen.
