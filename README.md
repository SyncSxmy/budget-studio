# Budget Studio 0.9.9 – KI-Helfer (Web-Beta)

**Wichtig:** Die Web-Oberfläche und die geschützte Supabase-Edge-Function sind vorbereitet. Damit das KI-Modell wirklich antwortet, muss der Projektinhaber einmalig einen gültigen, separat abgerechneten API-Schlüssel beim KI-Anbieter einrichten und als Supabase-Secret speichern. Es wurde **kein** Schlüssel in diese ZIP oder in GitHub-Dateien geschrieben. Die finale API-Funktion konnte noch nicht mit einem bezahlten, echten Modellaufruf geprüft werden. Bitte weiterhin nur Testdaten verwenden.

## Neu in der App

- Immer erreichbarer Button **✦ KI-Helfer** auf der Startseite und den anderen Bereichen; funktioniert am Handy und am Computer.
- Chat mit zwei Modi: **App-Hilfe** für Budget Studio und **Fachhilfe** für Maurer/Hochbau, Tiefbau, Elektro, Maler, Fliesen, Trockenbau, Beton, SHK, Dach, Gartenbau, Gastro und Kfz-Gutachter.
- Fachbereich wird aus den für den aktuellen Betrieb gewählten Gewerken abgeleitet. Du kannst ihn im Chat umstellen, die Auswahl wird nur im lokalen Haushalt gespeichert.
- Drei passende Beispielfragen, Gesprächsverlauf für die aktuelle Sitzung, Button zum Leeren des Chats.
- Die Daten werden erst nach Anmelden mit dem bestehenden Supabase-Testkonto und **aktiver Zustimmung zur Übermittlung der Chatfrage** an die serverseitige KI gesendet.
- **Nur** die aktuelle Frage, bis zu sechs letzte Chateinträge, gewählter Modus und Gewerk und aktuelle App-Ansicht werden übertragen. **Keine** gespeicherten Kontobewegungen, Kundenakten, Fotos, Passwörter oder gesamte Haushalte werden automatisch an das Modell übertragen.
- Die Serverfunktion kontrolliert den Benutzer über Supabase Auth und setzt serverseitig ein Limit von **15 Anfragen/Stunde und 45 Anfragen/Tag pro Konto**. App-Schlüssel sind öffentlich (Publishable Key), der spätere KI-Anbieter-Schlüssel bleibt im Supabase-Secret.

## Web-App aktualisieren

1. In der bisherigen Web-App unter **Mehr → Daten & Einstellungen** zuerst eine **verschlüsselte Sicherung mit Fotos** als `.bsafe` herunterladen und die Sicherung samt Passwort gut aufbewahren.
2. ZIP entpacken und **alle Dateien aus dem Stammordner** des Pakets in das GitHub-Repository `SyncSxmy/budget-studio` hochladen; bestehende Dateien überschreiben. **Nicht nur** `index.html` ersetzen; die neuen Dateien `ai-helper.js` und `ai-helper.css` gehören dazu.
3. Deployment abwarten. Die Web-App unter `https://syncsxmy.github.io/budget-studio/?v=099a` mit Internet neu laden. Im Fuß sollte **Web-Testversion 0.9.9** stehen.
4. Betrieb oder Haushalt auswählen. Im unteren Bereich erscheint **✦ KI-Helfer**. Darauf tippen, **App-Hilfe** oder **Fachhilfe** wählen und das Thema prüfen.
5. Mit bestehendem Cloud-Konto unter **Mehr → Cloud-Konto (Beta)** anmelden, im KI-Fenster der Übermittlung zustimmen und eine harmlose Frage testen.

## Einmaliges Aktivieren der echten KI (durch den Projektinhaber)

1. Ein OpenAI-API-Konto auf `https://platform.openai.com/` einrichten, API-Abrechnung und ein kleines Budgetlimit hinterlegen. Ein **ChatGPT-Plus-Abonnement deckt die API-Gebühren nicht ab**.
2. Einen API-Schlüssel unter `https://platform.openai.com/api-keys` erzeugen. **Niemals** den Schlüssel hier im Chat oder in GitHub veröffentlichen.
3. In `https://supabase.com/dashboard` das Budget-Studio-Projekt wählen und **Edge Functions → Secrets** (oder „Edge Function Secrets“) öffnen. Dort einen neuen Eintrag mit dem Namen **`OPENAI_API_KEY`** und als Wert den eigenen Schlüssel erstellen und speichern.
4. Die Funktion `budget-studio-ai` ist bereits im Supabase-Projekt **`octimjkrwiueowppivph`** bereitgestellt und liest den Schlüssel direkt serverseitig. Du musst keine geheime Datei in die Web-App laden und die Funktion normalerweise nicht neu deployen. Standardmodell: **`gpt-5-mini`**; bei Bedarf kann der Serverbesitzer später über das Secret `OPENAI_MODEL` ein unterstütztes Modell wählen.
5. Eine Testfrage stellen. Ohne Schlüssel zeigt der Chat eine klare Meldung „echte KI noch nicht aktiviert“ statt erfundene Antworten.

## Datenschutz und Sicherheit (Beta!)

- Die Fragen werden nach Einwilligung zur externen OpenAI-API gesendet; die Supabase-Verschlüsselung des lokalen Tresors gilt **nicht** als Ende-zu-Ende-Verschlüsselung für absichtlich freigegebene Chatfragen. Die App speichert den Chatverlauf nur im Arbeitsspeicher der geöffneten Seite, nicht als gesonderte Chatdatenbank. Der API-Anbieter und Infrastruktur können entsprechend ihren Nutzungsbedingungen Daten verarbeiten.
- Bevor echte personenbezogene Daten über den KI-Chat verarbeitet werden, sind die rechtlichen Grundlagen, Informationspflichten, Dienstleisterverträge und ggf. internationale Datenübermittlung zu klären. Der Assistent ist **keine** geprüfte Lösung für vertrauliche Mandanten-, Bank- oder Kundendaten.
- Keine verbindlichen Angaben zu Statik, DIN-Normen, Brandschutz, elektrischen Anlagen oder Kfz-Gutachten. Fachliche Antworten stets anhand aktueller Normen, Pläne und Herstellerangaben prüfen.
- Die Funktion sieht **nicht** die Inhalte deiner Konten, Kunden, Aufträge oder Bilder und kann **keine** Änderungen an App-Daten ausführen. Sie gibt derzeit ausschließlich Textantworten.
- Nur `https://syncsxmy.github.io` ist als aktuelle öffentliche Browserdomain in der Edge Function freigegeben; bei Umstieg auf eine eigene Domain ist die Liste der erlaubten Ursprünge in der Serverfunktion zu ergänzen.
- Sicherheitsmodell: Der Endpunkt ist technisch öffentlich erreichbar, lässt aber erst nach **serverseitiger Prüfung eines gültigen Benutzertokens** Modellanfragen zu. Die Supabase-Option `verify_jwt=false` ist hier notwendig, weil die Edge Function moderne Auth-Tokens eigenständig via `/auth/v1/user` prüft. **Nicht die Authentifizierungsprüfung entfernen.**
- Die Supabase-Sicherheitsprüfung meldet aktuell eine weiterhin deaktivierte „Leaked Password Protection“-Option; die geschlossene Beta darf deshalb noch nicht als vollständig sicher betrachtet werden.

## Teststatus

- Statische Prüfung: `node --check` über alle JavaScript-Dateien bestanden.
- Mobiler UI-Test mit Chromium in einer isolierten Testseite: Öffnen des KI-Fensters, Umschalten auf Fachhilfe, automatisch ausgewähltes Maurer-Gewerk und Darstellung einer simulierten Chatantwort bestanden.
- Supabase: Authentifizierungsschnittstelle und serverseitige Quoten-Tabelle eingerichtet; Edge Function `budget-studio-ai` Status ACTIVE.
- **Nicht getestet:** echter API-Aufruf mit aktivierter OpenAI-Abrechnung, vollständiger Browserbetrieb der integrierten App auf iOS und Android, Sicherheits- und Lasttest. Keine Freigabe für echte Finanz-/Gutachterdaten.
