# Budget Studio 0.7 – Business Edition (lokale Testversion)

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

Die Daten liegen weiterhin **lokal im Browser** unter dem bestehenden Schlüssel `budget-studio-v2`. Die Version enthält keine Bankanbindung, kein Nutzerkonto, kein Tracking und keinen Server. JSON-Sicherungen enthalten alle Haushalte **einschließlich Gewerken, eigenen Rechnern und Projektkalkulationen**. Alte Daten (0.5, 0.6.x) werden übernommen. Ein einzelner Haushalt führt weiterhin direkt ins Dashboard, mehrere Haushalte zur Auswahl.

**Vor der Aktualisierung**: In Version 0.6.3 bitte über „Mehr“ → „Daten & Einstellungen“ → „Alle Haushalte als JSON sichern“ exportieren. Danach die **sieben Dateien** dieses ZIPs im selben GitHub-Pages-Repository ersetzen, bei bestehender Internetverbindung die installierte App schließen und neu öffnen. Bei hartnäckig veraltetem Stand die Pages-Adresse im Safari-Browser mit `?v=070` aufrufen. **Nicht** die Website-Daten löschen – dadurch gehen lokale Daten verloren. Keine echten Finanzdaten oder Backups ins **öffentliche** GitHub-Repository hochladen.

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
