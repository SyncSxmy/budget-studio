# Budget Studio 0.9.6 – Werkzeugassistent + flexible Finanzmonate (TEST)

**Sicherheitsstatus:** Entwicklungs-/Testversion. Keine echte Bankverbindung, keine vollständige lokale Verschlüsselung und noch keine Cloud-Synchronisation von Konten, Buchungen, Kunden oder Fotos. Bitte keine vertraulichen echten Daten erfassen. Die Cloud-Anmeldung bleibt Beta.

## Neu in 0.9.6

1. **Aufträge → Werkzeugassistent.** Neuer oder vorhandener Auftrag: Tätigkeit, Beschreibung oder Leistungsposition eingeben, z. B. `20 m² Kalksandstein mauern` oder `50 m² Rollrasen verlegen`. Die App erstellt automatisch eine Werkzeug-Checkliste, berücksichtigt erkennbare m²-Angaben und die einstellbare Anzahl von Personen. Du kannst Werkzeuge, Anzahlen und Häkchen ändern. Die Liste wird zum Auftrag gespeichert und in der Druck-/PDF-Ansicht ausgegeben. Unterstützte Muster u. a. Maurer, Rollrasen/Garten, Beton, SHK, Dach, Maler, Fliesen, Trockenbau, Pflaster, Böden, Gartenpflege, Reinigung, Elektro, Catering und Kfz-Schadenaufnahme. **Dies ist derzeit eine lokale, regelbasierte Vorschlagserkennung – KEIN echter KI-Dienst, keine Sicherheits-/Fachplanung und kein Materialbedarf.** Für beliebige neue Tätigkeiten folgt eine datenschutzgerecht angebundene KI später.
2. **Übersicht / Business-Dashboard / Finanzkalender → Abrechnungszeitraum.** Auswählbar `1. bis Monatsende` oder `15. bis 14. des Folgemonats` (z. B. 15.10.–14.11.). Die Wahl wird pro Haushalt/Betrieb gespeichert. Pfeile blättern rückwärts; vorwärts nur bis zum aktuell begonnenen Zeitraum.
3. **Auswertungen.** Dashboard-KPIs, Kategorien und Verlauf der letzten sechs Abrechnungsmonate beruhen auf denselben Datumsgrenzen. Kategorien können aufgeklappt werden; man sieht die Einzelbuchungen. Auch im Business-Dashboard gibt es eine sechmonatige Übersicht und Kategorie-Details. Einmal importierte und manuell korrigierte Buchungen werden aus dem gleichen lokalen Datenbestand berechnet.
4. **Abo-Finder.** Erkennt jetzt Wiederholungen auch aus Buchungstexten, sofern keine Händlerinformation gespeichert wurde. Kleine Preisschwankungen und monatliche/vierteljährliche/jährliche Intervalle werden berücksichtigt. Treffer sind **nur Vorschläge**, keine automatisch angelegten Kontobuchungen. Bestehende Regeln können bei späterem Kontoauszug-Import immer noch Doppelbuchungen verursachen; Warnungen und Abstimmung sind wichtig.

## Für die Web-App

1. Vorher in der vorhandenen App unter **Mehr → Daten & Einstellungen** eine JSON-Datensicherung **einschließlich Fotos** erstellen und sicher aufbewahren. Bei größeren Backups genügend Speicherplatz vorsehen.
2. Diesen ZIP-Ordner entpacken und **alle 14 Dateien** aus dem entpackten Web-Ordner in das Root-Verzeichnis des *Test*-GitHub-Pages-Repositories hochladen (nicht in ein zusätzliches Unterverzeichnis). Wichtig: **`tool-planner.js` und `finance-engine.js` sind NEU und erforderlich**.
3. GitHub Pages nach der Bereitstellung online laden, z. B. `https://syncsxmy.github.io/budget-studio/?v=096b` (wenn Pages dort noch aktiv ist). Browser-Website-Daten NICHT löschen, sonst können lokale Daten und Fotos verloren gehen.
4. Bei Anzeige einer alten Version einmal mit bestehender Internetverbindung neu laden und die Dateien im Repository prüfen.

## Wichtige Testfälle

- Privathaushalt → Dashboard → `1.–Monatsende` ↔ `15.–14.`; September/Oktober durchblättern; prüfen, dass Einnahmen/Ausgaben/Kategorien und Verlauf denselben Zeitraum nutzen.
- In Kategorie **Lebensmittel** aufklappen und Einzelbuchungen ansehen; mit „Buchungen“ vergleichen. Ohne künftigen Zeitraum verschwindet der Pfeil nach rechts.
- Planung → **Abos automatisch erkennen** mit mind. zwei möglichst regelmäßigen importierten Zahlungen und wechselndem Betrag (z. B. zwei Streaming-Abbuchungen). Treffer manuell bestätigen, nicht blind übernehmen.
- Geschäft → **Aufträge & Kunden** → Testkunde erstellen → Auftrag `20 m² Kalksandstein mauern` erfassen → Werkzeuge, Häkchen und Mengen kontrollieren; Auftrag speichern, erneut öffnen und Druckansicht prüfen. `50 m² Rollrasen verlegen` ausprobieren.
- Anderer Haushalt/anderer Betrieb: Die ausgewählte Monatsart und die Auftragslisten müssen getrennt bleiben.

## Grenzen und Datenschutz

- Die Werkzeugliste ist **keine überprüfte KI-Fachauskunft**. Maschinen, persönliche Schutzausrüstung, Mengen und Vorschriften vor Ort fachlich prüfen.
- Die automatische Abo-Erkennung ist heuristisch; manche Zahlungen fehlen, andere können fälschlich wiederkehrend wirken. Bankdaten werden **nicht** live abgerufen.
- Bestehende lokale Daten werden nicht automatisch verschlüsselt oder synchronisiert. JSON-Backups enthalten Inhalte unverschlüsselt.
- Bei früheren Kontoauszug-Importen können Einnahmen fehlen; ursprüngliche Bankbelege weiterhin kontrollieren. Die neue Monatslogik repariert keine fehlenden PDF-Buchungen.
- Das Supabase-Testkonto synchronisiert weiterhin keine Finanzdaten, Kundenakten oder Fotos. Die Anbindung echter Bankkonten und die KI-API erfordern noch separate Backend-Entwicklung.
