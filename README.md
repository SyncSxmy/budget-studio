# Budget Studio 0.6.2 – Kompaktes Menü & Geschäfts-Haushalte

## Was ist neu?

- Intelligenter App-Start: Beim ersten Mal Haushaltsauswahl; später bei einem Haushalt direkt ins Dashboard, bei mehreren Haushalten weiterhin Auswahl.
- Mobile Navigation auf fünf gleich breite Bereiche begrenzt: Übersicht, Buchungen, Konten, Planung, Mehr – ohne horizontales Scrollen.
- Unter **Planung**: Abos & Fixkosten auf einer gemeinsamen Seite, Finanzkalender, Sparziele, Schulden.
- Bei **Haushalt erstellen** steht jetzt auch **Geschäft / Firma** zur Verfügung. Dessen Konten, Buchungen und Auswertungen sind von Privathaushalten getrennt.
- Girokonto, Kreditkarte oder Geschäftskonto lassen sich wie bisher als manuelle Konten verwalten.

## Wichtige Einschränkung

**Keine echte Bankverbindung!** Konten werden aktuell nur manuell geführt. Für Banking-Abrufe sind später ein sicherer Open-Banking-Dienst, ausdrückliche Bankfreigabe, Backend und Datenschutzkonzept nötig. Gib in diese App keine Login-Daten deiner Bank ein. Die Geschäftsansicht ist kein Ersatz für ordnungsgemäße Buchhaltung oder Steuerberatung.

**Abos** dienen als Kostenübersicht. **Fixkosten** werden bei Fälligkeit automatisch gebucht, wenn der entsprechende Haushalt geöffnet wird. Dieselbe Zahlung nicht doppelt als Fixkosten-Regel anlegen.

## Installation

1. In der bisherigen Version zunächst unter Daten eine **JSON-Datensicherung aller Haushalte** erstellen und sicher aufbewahren.
2. Die **sieben Dateien** dieses ZIP-Archivs in dein bestehendes GitHub-Pages-Repository `budget-studio` hochladen (gleiche Dateinamen überschreiben).
3. Auf dem iPhone die App mit Internetverbindung neu öffnen; falls nötig in Safari die GitHub-Pages-Adresse mit `?v=62` laden und erneut öffnen. **Website-Daten nicht löschen**, sonst können lokale Buchungen verloren gehen.
4. Die Daten bleiben unter `budget-studio-v2`; die neue Cache-Version ist `budget-studio-offline-v6-2`.

Lokale Offline-Testversion ohne Server, Synchronisation oder Bankverbindung. Das Repository enthält nur den Quellcode; speichere keine echten Finanzdaten im öffentlichen GitHub-Repository.
