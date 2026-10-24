# Budget Studio 0.9.3 – Web-Testversion (24.10.2026)

**Für die Testphase mit Freunden/Familie und Einsteigern. Kein Produktions- oder Banking-System.**

## Was ist neu?

- Geschäftshaushalte: Aufträge & Kunden anlegen, suchen, bearbeiten und Status ändern.
- Kunde → Auftrag → Arbeits-/Materialpositionen → automatisch Netto, 0/7/19 % Umsatzsteuer und Brutto berechnen.
- Auftragsübersicht drucken oder im Browser über „Drucken → Als PDF speichern“ exportieren. KEINE Rechnung, kein geprüfter Kostenvoranschlag.
- Bessere Lesbarkeit, größere Schaltflächen und ein standardmäßig aktiver einfacher Modus.
- „Mehr → Hilfe & erste Schritte“ mit leicht verständlichen Erklärungen und einer optionalen Beispiel-Datenfunktion (inklusive Entfernen der Beispiele).
- Geschäftshaushalte lassen sich auch ohne Gewerk erstellen; ein Gewerk kann später ausgewählt werden.
- Die übrigen Funktionen aus 0.9.2 bleiben erhalten, einschließlich Gastro/Gutachter, Schulden-Zinsrechner und 12 Designs.

## Update der GitHub-Pages-App

1. **Vorher JSON-Backup** unter „Mehr → Daten & Einstellungen“ erstellen.
2. Diese ZIP entpacken und sämtliche Dateien aus dem Hauptordner in das bestehende GitHub-Pages-Repository hochladen; insbesondere **`orders-extra.js` nicht vergessen**.
3. Bei Änderungen an der ZIP-Datei selbst nicht versuchen, nur die ZIP hochzuladen – GitHub Pages benötigt die entpackten Dateien.
4. Auf das veröffentlichte Update warten; einmal im Safari-Browser die GitHub-Pages-Adresse mit `?v=093a` am Ende laden. Die PWA dann mit Internetverbindung neu öffnen.
5. **Keine Browserdaten löschen**, um den Cache zu leeren. Die bisherigen lokalen Finanzdaten liegen dort.
6. Neue Nutzer können die normale HTTPS-GitHub-Pages-Adresse öffnen. Optional können sie „Zum Home-Bildschirm“ verwenden.

## So funktioniert die Auftragsverwaltung

Geschäftshaushalt wählen → „Übersicht → Aufträge & Kunden“ oder „Werkzeuge → Aufträge & Kunden“.

- „Kunden verwalten“ → „Kunde hinzufügen“. Name genügt.
- „Neuen Auftrag erstellen“ → Kunde, Beschreibung, Termin und Preispositionen eingeben.
- Status anpassen (Anfrage, Angebot erstellt, Beauftragt, In Arbeit, Abgeschlossen, Bezahlt, Storniert).
- „Drucken / als PDF speichern“ → Druckdialog öffnen, Ausgabeziel „Als PDF sichern“ (je nach Browser/System).
- Alle Daten werden je Geschäftshaushalt in der **bestehenden lokalen** Haushalts-Sicherung abgelegt. Auftragsbeträge verändern keine Kontostände.

## Bitte zwingend für den Test beachten

- Nur **erfundene** Namen, Kunden, Schadenfälle, Fotos und Finanzdaten benutzen.
- Kein echtes Online-Banking oder Bezahlsystem; direkte Bankverbindung ist noch nicht vorhanden.
- Keine Cloud-/Gerätesynchronisierung: Jede Person sieht nur ihre eigenen lokalen Daten in ihrem Browser. Der Betreiber sieht ihre Einträge nicht automatisch.
- Browserdaten können gelöscht werden, und lokale Daten sind noch nicht verschlüsselt. Keine echten personenbezogenen Kundeninformationen verarbeiten.
- Die App ersetzt keine Buchhaltungs-, Rechnungs- oder Datenschutzsoftware; Steuerberechnungen sind vereinfachte Überschläge.
- Eine zuvor gemeldete Defender-Warnung zur Android-Test-APK ist **noch nicht abschließend geklärt**. Diese ZIP ist für Web-Tests, nicht für die Android-Test-APK.

## Bekannte Grenzen

- Kundenverwaltung „Aufträge“ und die bisherige Gutachter-Schadenaktenverwaltung sind vorerst getrennte Verzeichnisse.
- Auftragsübersichten sind keine rechtsgültigen Rechnungen. Keine Rechnungsnummernpflicht, Pflichtangaben oder GoBD-Revisionssicherheit implementiert.
- In der Druckansicht kann auf manchen Mobilbrowsern das Öffnen eines Fensters blockiert werden.
- Wiederkehrende Zahlungen und Importanalyse sind weiterhin Testfunktionen; Kontoauszüge können falsch gelesen werden.
