# Budget Studio 0.8.2 – PDF-Import prüfen & Buchungen korrigieren

## Wichtig: vor Installation und vor Löschen alter Imports

Erstelle zuerst unter **Mehr → Daten & Einstellungen** ein **JSON-Backup aller Haushalte**. Lösche auf dem iPhone keine Website-Daten. Persönliche Kontoauszüge und JSON-Backups niemals ins öffentliche GitHub-Repository laden.

### Fehlerhafte PDF-Importe

Ein importierter PDF-Auszug kann Gutschriften übersehen, wenn das PDF seine Beträge in getrennten Spalten ohne eindeutiges Vorzeichen enthält. Das Ergebnis kann fälschlich ins Minus rutschen. **Der berechnete Saldo ist nicht automatisch dein echter Bankkontostand** – insbesondere, wenn das Konto mit 0 € startet. Version 0.8.2 ändert keine vorhandenen Buchungen von selbst.

- **Buchungen → Bearbeiten / Kategorie**: jede importierte Buchung korrigieren, Kategorie zuordnen, Einnahme/Ausgabe, Betrag, Datum und Konto berichtigen.
- **Konten → Kontoauszug importieren → Bisherige Importe**: PDF- oder CSV-Importgruppen komplett rückgängig machen, mit doppelter Bestätigung. Bei älteren Versionen ohne Gruppennummer werden mehrere alte Importe desselben Typs und Kontos zusammengefasst. ACHTUNG: Dies entfernt die betroffenen Buchungen.
- **Konten → Kontostand abgleichen**: erst alle Buchungen prüfen; danach kann ein nachweislich richtiger Banksaldo als rechnerischer Korrekturwert des Anfangsbestands verwendet werden. Das ersetzt keine fehlenden Einnahmen.
- **Import-Vorschau** zeigt alle erkannten Zeilen und Gesamtbeträge der erkannten Einnahmen/Ausgaben. Wenn eine PDF über mindestens fünf Buchungen keinerlei Einnahmen aufweist, blockiert die App die Übernahme bis zur ausdrücklichen Bestätigung.
- Nach Import wird der Monat der neuesten importierten Buchung ausgewählt. Im Dashboard ist der gewählte Monat sichtbar.
- Neu importierte Buchungen erhalten eine Importgruppenkennung, sodass man nur diese Gruppe rückgängig machen kann.

### Grenzen

Ohne ein echtes Beispiel des konkreten Sparkassen-PDFs kann die App nicht garantieren, dass sie Buchungsspalten, Gutschriften und Saldowerte korrekt ausliest. Sie errät keine Vorzeichen allein aus Wörtern wie „Gutschrift“. Fehlende Einträge bleiben bis zur Korrektur oder einem verbesserten Parser aus.

Version 0.8.2 ist eine lokale Testversion und keine bankgeprüfte Finanzsoftware. Externe PDF.js-/Tesseract-Bibliotheken werden bei Bedarf nach Einwilligung nachgeladen. Keine direkte Bankverbindung, keine Übertragung von Dokumenten durch unseren Anwendungscode an einen OCR-Server.

### Update

Alle sieben Dateien in deinem bestehenden GitHub-Repository ersetzen. App anschließend online aktualisieren. Falls alte Assets angezeigt werden, die GitHub-Pages-Seite mit `?v=082` in Safari aufrufen. Browserdaten nicht löschen.


Zusatz: Diese Variante startet standardmäßig im pastell-pinken Design. Über die Design-Schaltfläche kann weiterhin zwischen den anderen Farbwelten gewechselt werden.
