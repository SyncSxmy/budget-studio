# Budget Studio 0.8.1 – PDF- und Foto-Kontoauszüge (Testversion)

## Neuer Kontoauszug-Import

- Unter **Konten → Kontoauszug importieren** können CSV, PDF, JPG und PNG gewählt werden.
- **PDF.js** liest textbasierte PDFs im Browser. PDF-Scans und Fotos werden per **Tesseract.js OCR** ausgelesen, falls die Browser-Libraries geladen werden können. Der erste Abruf benötigt **Internet**.
- Achtung: Die Bibliotheken werden in diesem Prototyp über externe CDNs geladen (nicht selbst gehostet). Es erfolgt eine Zustimmungsmeldung vor dem Abruf. Die Datei wird vom App-Code lokal ausgewertet und nicht an einen OCR-Webdienst hochgeladen. Externen Code und Bankdaten trotzdem nur verwenden, wenn du dem Risiko vertraust. Für eine Veröffentlichungsfassung sollten die geprüften Bibliotheken mit ausgeliefert und eine umfassende Sicherheitsprüfung durchgeführt werden.
- Dokumentprüfung: Kontoauszug-typische Merkmale müssen vorhanden sein, insbesondere Bank-/Kontobezug und Buchungsangaben. Ohne ausreichend Merkmale erfolgt kein Import.
- Buchungen aus PDFs/Fotos müssen **Datum, Betrag und klar erkennbare Zuordnung Soll/Haben** besitzen. Unsichere Zeilen werden verworfen, nicht erraten. Nach dem Lesen erscheint eine Vorschau, die explizit bestätigt werden muss.
- Eingescannte Dokumente, schlechte Fotos und komplexe Sparkassen-Layouts können weiterhin scheitern. Dieser Prototyp ist **kein verlässlicher Universal-PDF-Konverter**. Bitte jede Buchung mit dem Original vergleichen. Ein echtes persönliches PDF wurde nicht getestet.
- Limits: CSV 3 MB, PDF 12 MB / 12 Seiten, Fotos 8 MB.
- Eine echte automatische Bankverbindung ist weiterhin **nicht** enthalten.
- Alle bisherigen Haushalte, Buchungen und Einstellungen werden beibehalten; `budget-studio-v2` wird nicht ersetzt.

## Update

Vorher alle Haushalte als JSON exportieren. Dann die sieben Dateien aus der ZIP in dein bisheriges GitHub-Pages-Repository hochladen und bestehende Dateien ersetzen. Auf dem iPhone zunächst bei Internetverbindung neu laden, gegebenenfalls `?v=081` an die Pages-URL anhängen. **Website-Daten nicht löschen**. Bank-PDFs, Fotos und JSON-Backups niemals ins öffentliche GitHub-Repository laden.

---

# Budget Studio 0.8 – Banking-Vorbereitung und Abo-Erkennung (lokale Testversion)

**Neuer Schwerpunkt:** Jeder Geschäftshaushalt hat ein eigenes Dashboard und individuell ausgewählte Gewerke, ohne die privaten und gemeinsamen Finanzhaushalte zu verändern.

## Neu in 0.7

- Bei **neuer Geschäftshaushalt**: ein oder mehrere Gewerke auswählen. Unterstützt sind Maurer/Hochbau, Tiefbau, Elektro, Maler, Fliesenleger, Trockenbau, Betonbau, SHK/Sanitär, Dachdecker und Garten-/Landschaftsbau.
- **Bestehende Geschäftshaushalte**: Werkzeuge → Gewerke verwalten → auswählen. Bereits angelegte Geschäftskonten bleiben bestehen.
- **Business-Dashboard**: Kontostand, Monatsumsätze, Cashflow, Netto-/USt-Kennzahlen, Gewerke, Projekte, letzte Buchungen.
- **Materialrechner**: Mehr als 20 berechenbare Vorlagen (z. B. Mauersteine/Mörtel, Putz, Beton, Kabel, Rohre, Trockenbauplatten, Fliesen, Dachziegel und Pflastersteine). Maße und Verbrauchswerte können je Berechnung eingegeben werden.
- **Eigene Rechner**: Name, Gewerk, Material, Einheit, Berechnungsbasis Länge/Fläche/Volumen/Stück, eigener Faktor und Reserve. Die Formel ist bewusst *nur* Grundmenge × Faktor × (1 + Reserve); keine freien beliebigen Formelausdrücke.
- **Projektkalkulationen**: Materialmengen, eigene Netto-Einzelpreise, zusätzliche geplante Kosten, Angebotspreis netto sowie 0/7/19%-Brutto-Vorschau. Einzelne Projekte lokal speichern und löschen.
- **Private Haushalte**: behalten das bewährte private Dashboard, Finanzplanung und die 5-Punkte-Navigation. Firmen nutzen „Werkzeuge“ als vierten Reiter, die Finanzplanung bleibt über Werkzeuge/Mehr erreichbar.
- **Bestehende 0.6.3 Funktionen**: Bankkonten als manuelle Konten, Buchungen, Net-/Brutto-Aufteilung, wiederkehrende Fixkosten, Abos, Kalender, Sparziele und JSON-Backup.

## Sicherheit / Migration

Die Daten liegen weiterhin **lokal im Browser** unter dem bestehenden Schlüssel `budget-studio-v2`. Die Version enthält keine direkte Bankanbindung, kein Nutzerkonto, kein Tracking und keinen Server. JSON-Sicherungen enthalten alle Haushalte **einschließlich Gewerken, eigenen Rechnern und Projektkalkulationen**. Alte Daten (0.5, 0.6.x) werden übernommen. Ein einzelner Haushalt führt weiterhin direkt ins Dashboard, mehrere Haushalte zur Auswahl.

**Vor der Aktualisierung**: In Version 0.7 bitte über „Mehr“ → „Daten & Einstellungen“ → „Alle Haushalte als JSON sichern“ exportieren. Danach die **sieben Dateien** dieses ZIPs im selben GitHub-Pages-Repository ersetzen, bei bestehender Internetverbindung die installierte App schließen und neu öffnen. Bei hartnäckig veraltetem Stand die Pages-Adresse im Safari-Browser mit `?v=080` aufrufen. **Nicht** die Website-Daten löschen – dadurch gehen lokale Daten verloren. Keine echten Finanzdaten oder Backups ins **öffentliche** GitHub-Repository hochladen.

## Wichtige Grenzen

- Materialmengen sind **grobe geometrische Überschläge**, keine normgerechte Ausführungsplanung, Statik, Elektroauslegung oder geprüfte Mengen- bzw. Leistungsverzeichnisse. Herstellerverbrauch, Fugen/Verbände, Schnittverluste, Packgrößen, örtliche Randbedingungen und Regelwerke selbst überprüfen.
- Die kalkulierte Differenz zwischen Angebot und Kosten ist **kein tatsächlicher Betriebsgewinn**: etwaige Gemeinkosten, Stunden, Maschinenkosten, Abgaben, Nachträge und Risiken müssen separat berücksichtigt werden.
- Die **Materialkosten werden nicht automatisch als Finanzbuchungen erfasst**, dadurch keine unbemerkte doppelte Buchung. Es gibt noch keine Bankverbindung, Cloud-Synchronisation, ordnungsgemäße Buchhaltung oder Steuerberatung.
- Preise werden manuell eingetragen; es gibt keine Live-Preisabfragen.

## Testempfehlung

1. Geschäftshaushalt mit Maurer- und Elektrogewerk erstellen oder im alten Geschäftshaushalt Gewerke hinzufügen.
2. Mauersteine für 5 m × 2,5 m (24 × 24 cm Steine, 10 mm Fuge) berechnen, Testpreise eintragen und Projekt speichern.
3. Einen eigenen Materialrechner mit m²-Basis anlegen, berechnen und das Ergebnis als Projekt speichern.
4. Zum Privathaushalt wechseln und kontrollieren, dass dessen Daten und Dashboard unverändert sind.
5. JSON-Sicherung exportieren und aufbewahren.


## Version 0.8 – Kontoauszug-Import & automatische Abo-Vorschläge

- Privat- und gemeinsame Haushalte: **Konten → Kontoauszug importieren** oder **Planung → Abos erkennen**.
- CSV-Import aus Bankkontoauszügen mit Datum, Betrag und möglichst Empfänger/Verwendungszweck. Unterstützt gängige Spaltennamen, Semikolon-/Komma-/Tab-Trennung, deutsche und ISO-Daten sowie deutsche Betragsformate. CSV-Daten werden nur im Browser verarbeitet.
- Vor dem Einlesen muss das richtige Budget-Studio-Konto ausgewählt werden. Eine Vorschau ermöglicht die Prüfung vor Übernahme. Wiederholte Imports derselben identischen Zeilen werden erkannt; manuelle Einträge oder anders formatierte Bankexporte können weiterhin zu Doppelbuchungen führen.
- Abo-Erkennung: gleicht ähnliche Zahlungspartner, Beträge und monatliche/jährliche Abstände ab. Zeigt ausschließlich **Vorschläge**, die ausdrücklich bestätigt werden müssen. Das bestätigte Abo ist nur ein Kosten-Tracker; keine erneute Buchung.
- Eine automatische Bankverbindung ist **nicht** integriert. Dazu sind ein sicherer eigener Server, eine Vereinbarung mit einem regulierten Bankdatenanbieter (z.B. finAPI, Tink), eine Freigabe beim Geldinstitut und ein Datenschutz-/Sicherheitskonzept nötig.
- Vor echten Kontoumsätzen unbedingt JSON-Sicherung erstellen und lokale Speicherung/Datenschutz bedenken. Nicht unterstützte CSV-Formate müssen an die jeweilige Bank angepasst werden. Für Geschäftsimporte keine automatische USt-Zuordnung.
