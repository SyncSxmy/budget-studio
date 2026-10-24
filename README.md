# Budget Studio 0.3 – Testversion

Offlinefähige PWA für iPhone und Desktop. **Kein natives iOS-Paket.**

## Update über GitHub Pages
Lade den Inhalt dieses Ordners (nicht den Ordner selbst) in das Stammverzeichnis des bestehenden `budget-studio`-Repositorys und überschreibe die alten Dateien. Committe die Änderungen. GitHub Pages aktualisiert die HTTPS-Seite. Öffne die installierte App online, lade sie gegebenenfalls neu und prüfe anschließend den Offlinebetrieb.

## Vor dem Update
Öffne in der bisherigen App „Daten“ und exportiere eine JSON-Sicherung. Hebe sie außerhalb der App auf. Die Version 0.3 nutzt denselben lokalen Speicherschlüssel wie 0.2; bei unveränderter Herkunft sollten Daten erhalten bleiben, aber das ist keine Garantie.

## Neu in 0.3
- Dashboard mit auswählbarem Monat und sechsmonatiger Einnahmen-/Ausgabenübersicht
- Ringdiagramm für Ausgabenkategorien (maximal sechs wiederkehrende Farben)
- Strengere Validierung beim Wiederherstellen von Sicherungen (bis 5 MB)
- Aktualisierter Offline-Cache

## Grenzen
Die App speichert Daten in localStorage, nicht verschlüsselt. Keine Bankanbindung, keine Synchronisation, keine automatische Verbuchung von Abos oder Schuldenraten. Nicht für sensible echte Finanzdaten verwenden. Safari kann lokale Daten unter bestimmten Umständen löschen. Regelmäßige JSON-Backups sind nötig. Die App benötigt HTTPS für Offline-Service-Worker.
