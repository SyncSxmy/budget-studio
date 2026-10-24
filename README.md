# Budget Studio 0.6 – Haushalte, Fixkosten und Finanzkalender

Neue Funktionen:
- Beim **App-Start** wird eine Haushaltsauswahl angezeigt; persönliche und gemeinsame Haushalte sind getrennt.
- Haushalt anlegen/umbenennen/löschen und jederzeit wechseln.
- Wiederkehrende Zahlungen (monatlich oder jährlich) werden beim Öffnen des Haushalts gebucht, sobald sie fällig sind (offline ebenfalls). Bereits gebuchte Termine werden anhand ihrer Kennung nicht doppelt angelegt. Bei weit zurückliegenden Startdaten maximal 240 Nachbuchungen pro Regel und Öffnung.
- Kalender mit gebuchten Einträgen und anstehenden Zahlungsterminen.
- Import alter 0.5-Sicherungen als zusätzlicher Haushalt; neue Komplettsicherung aller Haushalte.

## WICHTIG: Aktualisierung von 0.5

1. **Zuerst in Version 0.5 unter „Daten“ eine JSON-Datensicherung exportieren!** Bewahre sie separat auf.
2. Auf GitHub alle sieben Dateien des entpackten Ordners ins Stammverzeichnis des bestehenden Repositories hochladen und vorhandene ersetzen (kein zusätzlicher Unterordner).
3. GitHub Pages-Veröffentlichung abwarten. Bei Verbindung mit dem Internet Safari-Seite neu laden; installierte App vollständig schließen und neu starten. Eventuell Pages-URL mit `?v=6` in Safari öffnen.
4. Beim ersten Start erscheint ein Standardhaushalt mit der **Kopie** der bisherigen Daten. Die ursprünglichen Browserdaten im Schlüssel `budget-studio-v1` werden **nicht gelöscht**.
5. Prüfe Kontostände und Buchungen, ehe du neue Buchungen eingibst. Teste Export und Import deiner Sicherung.

## Technische Hinweise

- Speicherung nur lokal (`localStorage`, `budget-studio-v2`). Keine Synchronisierung, Anmeldung oder Bankverbindung.
- Die Haushaltsauswahl zeigt andere Profile nicht verschlüsselt an, sie ist keine Passwortsperre. Gemeinsam und privat bedeutet nur getrennte Datensätze auf demselben Gerät.
- Automatische Buchungen laufen **nur beim Öffnen/Wechseln des Haushalts**, nicht im Hintergrund oder wenn das Gerät ausgeschaltet ist.
- Noch keine automatische Kostenaufteilung nach Personen, App-Sperre oder Cloud-Synchronisierung.
- Testversion. Nicht als geprüfte Finanzsoftware verwenden. Website-Daten nicht löschen, App nicht deinstallieren, regelmäßig JSON exportieren.
