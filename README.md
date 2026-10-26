# Budget Studio 0.9.7 – Lokaler Datentresor & verschlüsselte Sicherungen (BETA)

**Sicherheitsstatus: experimentelle Testversion – kein unabhängiger Sicherheitstest. Bitte weiterhin nur Testdaten verwenden.** Die verschlüsselte Cloud-Synchronisierung, eine echte Bankverbindung und die sichere Native-App-Integration sind **nicht** enthalten. Es wurde kein Benutzer- oder Finanzdatensatz nach Supabase übertragen.

## Neu

- **Verschlüsselte Datensicherung inklusive vorhandener Fotos** (`.bsafe`) unter **Mehr → Daten & Einstellungen**.
- Jeder Export bekommt ein eigenes Passwort. Die Sicherung nutzt **AES-256-GCM** mit zufälligem 12-Byte-Nonce und **PBKDF2-HMAC-SHA256** (600.000 Iterationen, zufälliges 16-Byte-Salt). AES-GCM prüft gleichzeitig die Datenintegrität.
- **Lokaler Datentresor (freiwillig einschaltbar):** Haushalte, Buchungen, Business-Aufträge, Schadenakten und Bildbeschreibungen liegen danach AES-GCM-verschlüsselt in IndexedDB. Fotos aus dem separaten lokalen Bilder-Speicher werden einzeln verschlüsselt in den Tresor übertragen.
- Beim nächsten Start fragt die App nach dem Tresorpasswort. Falsche Passwörter und beschädigte Daten werden abgewiesen.
- Alte JSON-Sicherungen lassen sich weiterhin importieren. Einen Klartext-Export bietet die App nur noch für die **nicht** mit dem Tresor gesicherte Testinstallation nach ausdrücklicher Warnung an.
- Der Tresor bestätigt asynchrone Speichervorgänge und zeigt Fehler sichtbar an. Beim Verlassen einer Seite mit ungespeicherten Änderungen wird gewarnt; Browser können trotzdem abrupt beendet werden.

## Sicheres Update von 0.9.6.1

1. In der bisherigen App **Mehr → Daten & Einstellungen** öffnen und eine vollständige Datensicherung **mit Fotos** erstellen. Prüfen, dass die Datei tatsächlich vorhanden ist, und sicher verwahren.
2. Die ZIP entpacken. **Alle 16 Dateien** einschließlich `crypto-extra.js` ins Repository `SyncSxmy/budget-studio` hochladen, bestehende Dateien ersetzen; nicht ZIP als eine Datei hochladen.
3. GitHub Pages mit bestehender Internetverbindung öffnen: `https://syncsxmy.github.io/budget-studio/?v=097a`. Einmal neu laden. In der Fußzeile sollte **0.9.7** stehen.
4. Zuerst auf **Mehr → Daten & Einstellungen → Verschlüsselte Sicherung inklusive Fotos herunterladen** klicken. Ein **starkes, eigenes Passwort** mit mindestens 12 Zeichen setzen und die `.bsafe` speichern. Ein kurzer Test mit harmlosen Daten auf einer zweiten Testinstallation ist ratsam.
5. Erst danach freiwillig **Lokale Daten verschlüsseln** auswählen. Für den Tresor ein eigenes langes Passwort vergeben und sicher aufbewahren. Die App schreibt und prüft zuerst verschlüsselte Daten, bevor bisherige Klartextdaten aus dem verwendeten Browser-Speicher gelöscht werden.
6. App schließen/neu starten: Tresor entsperren. Ein falsches Passwort darf ihn nicht öffnen. Ein neu angelegter Testeintrag muss nach einem erneuten Start noch da sein.

## Ganz wichtige Grenzen

- **Passwort vergessen = lokaler Tresor nicht mehr entschlüsselbar.** Der Anbieter kann das Passwort nicht zurücksetzen. Nur eine separat verwahrte `.bsafe` mit bekanntem **Backup-Passwort** kann die Daten retten: Die gesperrte Testinstallation zunächst vollständig zurücksetzen (dadurch wird der lokale Tresor endgültig gelöscht), dann in einer frischen App die externe `.bsafe` importieren. **Nie den Browserspeicher löschen, bevor die externe Sicherungsdatei kontrolliert vorhanden ist!**
- **Die Sicherung bleibt notwendig**, auch mit Tresor: Wenn iOS/Android Browserdaten automatisch löscht oder die App deinstalliert wird, kann der lokale Tresor verschwinden.
- Bestehende **bereits heruntergeladene Klartext-JSON-Backups, Betriebssystem-Backups, Kopien auf anderen Geräten** werden durch die Migration **nicht** nachträglich verschlüsselt. Sie müssen separat geschützt/entsorgt werden.
- Der aktuelle Cloud-Testlogin speichert kurzlebige Anmeldedaten im Sitzungsspeicher des Browsers und ist **nicht Teil des Tresors**. Noch keine Cloud-Finanzdaten synchronisieren.
- Verschlüsselung im Browser schützt gegen das einfache Auslesen lokaler Dateien, **nicht** gegen Schadsoftware, kompromittierte Browser, bösartige Skripte oder die Nutzung eines entsperrten Geräts. Das ist **noch kein Nachweis einer DSGVO-konformen Gesamtanwendung**.
- Auf großen iPhone-Datenbeständen kann die Migration wegen **zu wenig vorübergehend freiem Speicher** scheitern. In diesem Fall bleiben die bisherigen Klartextdaten bestehen. Keinesfalls Browserdaten löschen, bevor eine wiederherstellbare `.bsafe` extern gesichert ist.
- Eine Rückkehr zu einer alten App-Version **nach Tresor-Aktivierung** wird nicht unterstützt; ältere App-Versionen können den Tresor nicht lesen.
- Wenn die App „Speichern fehlgeschlagen“ meldet, **nicht schließen**, sondern Fehler beheben und eine Sicherung erstellen.
- Die bisherige Fotoverkleinerung bleibt bestehen: Für echte Gutachterfälle muss eine unveränderte Originalbildarchivierung separat entwickelt werden.

## Teststatus

- Geprüft mit Node.js/WebCrypto-Tests: Verschlüsselung/Entschlüsselung, Falschpasswort, beschädigte Datei, Migration, verschlüsselte Fotos, Änderungs-Speicherung, Sperren/Entsperren.
- Geprüft: App-Oberfläche per isoliertem Chromium-Test (Start und Sicherheitsdialog ohne JavaScript-Fehler).
- **Nicht geprüft:** der vollständige Ablauf auf iOS Safari/iPhone, Android/BlueStacks, mit großen realen Dateibeständen oder eine externe Sicherheitsprüfung.

Die Entwicklung von Budget Studio bleibt übergangsweise auf GitHub Pages. Später erhält die App eine eigene Website und native iOS-/Android-Veröffentlichungen mit entsprechend abgesicherter Anmeldung und Cloud-Synchronisation.
