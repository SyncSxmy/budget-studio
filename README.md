# Budget Studio 0.9.4 – Fotoverwaltung & Schadenkalkulation

**Testversion – 24. Oktober 2026.** Basis: Budget Studio 0.9.3 inklusive der vereinfachten Bedienung, Auftragsverwaltung, Gutachter, Gastronomie, Schulden-Zinsen und 12 Designs.

## Neu

- Gutachter → Kunde → Schadenfall: **maximal 30 Fotos je Schadenfall**, Beschreibung ändern, Foto löschen; die Bilder erscheinen auf eigenen Seiten im PDF-Bericht (2 je Seite).
- Business → Aufträge → Auftrag: **maximal 30 Fotos je Auftrag**, ebenfalls mit Beschriftung; die druckbare Auftragsübersicht enthält Fotoseiten.
- Foto-Verarbeitung: JPG/PNG/WebP bis 16 MB pro Eingabedatei. Die App verkleinert neue Fotos vor dem Speichern auf maximal 1400 Pixel längste Kante, als JPEG bis ungefähr 205 KB. EXIF/Originalauflösung und Originaldateien werden **nicht** archiviert.
- Neue Bilder liegen separat im lokalen **IndexedDB-Fotospeicher** des Browsers statt zusammen mit dem Finanzdaten-JSON im begrenzten `localStorage`. Ältere Bilder aus den Vorversionen bleiben lesbar.
- Unter „Mehr → Daten & Einstellungen → Alle Haushalte inklusive Fotos sichern“ werden Bilder aus dem Fotospeicher **in die JSON-Datensicherung eingebettet**. Import einer solchen Sicherung stellt die Bilder wieder her. Achtung: Backups mit vielen Bildern können groß werden. Speichere sie privat; niemals öffentlich bei GitHub hochladen!
- Gutachter-Schadenfall: neue manuelle Reparaturkostenkalkulation mit Originalteilenummer, Hersteller, optionaler Preisquelle, Datum, Menge, Einzelpreis, Arbeitszeit und Lackierung. Netto, USt (0/7/19 %) und Brutto werden berechnet und als Anlage im Schadenbericht dokumentiert.
- **Keine Live-Daten**: Es gibt noch keine FIN-/OEM-/DAT-/TecDoc-Schnittstelle und keine automatische Teilepreissuche. Preise und Nummern sind Eingaben der Benutzer und müssen geprüft werden.

## Update der Web-App über GitHub Pages

1. **Vorher** deine bisherige Version öffnen: „Mehr → Daten & Einstellungen → Alle Haushalte als JSON sichern“. Nicht die Browserdaten löschen.
2. ZIP entpacken und **alle 11 Dateien** in das bestehende GitHub-Pages-Repository `budget-studio` hochladen. Wichtig sind insbesondere die neue `media-extra.js`, die aktualisierte `business-extra.js`, `orders-extra.js` und `app.js`.
3. Veröffentlichung abwarten; in Safari die GitHub-Pages-Adresse bei Internetverbindung mit `?v=094a` öffnen und danach die installierte Web-App neu starten.
4. Testdaten benutzen: Geschäftshaushalt → „Gutachter/Kfz-Sachverständige“ → Kunden & Schäden → Kunde → Schadenfall → Reparaturkosten / Fotos. Bei einem normalen Betrieb die „Aufträge & Kunden“-Ansicht öffnen.
5. Nach dem Test eine **neue vollständige JSON-Sicherung** mit Fotos erstellen.

## Wichtige Sicherheits- und Qualitätsgrenzen

- Nur mit erfundenen Testkunden, Testfahrzeugen und nicht-vertraulichen Bildern testen. Kunden- und Bilddaten liegen auf dem jeweiligen Testgerät **unverschlüsselt**; kein sicheres Mehrbenutzersystem, keine Cloud-Synchronisierung, keine automatische Bankverbindung.
- Der Foto-Zusatzspeicher ist zwar größer als localStorage, aber **nicht unbegrenzt**. Gerätespeicher, Browserkontingente und einzelne sehr große Backups können den Import bzw. Upload verhindern. Fehlende Fotos lassen die Sicherung bewusst abbrechen, anstatt eine unvollständige Datei unbemerkt auszugeben.
- Verkleinerte Schadenfotos sind **keine unveränderten, beweissicheren Originalfotos**. Für professionelle Gutachten muss eine rechtssichere Originalbildverwaltung später separat entwickelt werden.
- Auftragsausdruck und Schaden-PDF sind lediglich **Dokumentations-/Kalkulationsvorlagen**, keine rechtlich geprüften Gutachten, Angebote, Rechnungen oder versicherungsrechtlich verbindlichen Reparaturwerte.
- Die normalen Finanzdaten werden mit dem bisherigen lokalen Datenschema weiterverwendet; ein Update löscht sie nicht. Bei Problemen keine Browserdaten löschen!
- Die vorherige Windows-Defender-Warnung zur Android-Debug-APK ist noch nicht abschließend geklärt. Keine Schutz-Ausnahmen für die produktive Nutzung einrichten.

## Technischer Teststatus

- JS-Syntax der vier Dateien geprüft.
- Isolierter Browser-Klicktest mit simuliertem Browser-Fotospeicher: 30 Schadenfotos und 30 Auftragsfotos hochgeladen, wiederhergestellt und im Auftrag gedruckt. Kein JavaScript-Laufzeitfehler im Test.
- A4-Schaden-PDF mit 30 Bildern und Reparaturkostenpositionen erzeugt und PDF-Integrität geprüft: 17 Seiten.
- **Nicht getestet:** Realer GitHub-Pages-Cache auf deinem iPhone und Capacitor APK in BlueStacks; diese Tests bitte erst mit Testdaten durchführen.
