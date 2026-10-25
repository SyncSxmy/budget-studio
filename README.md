# Budget Studio 0.9.5 – erster Supabase-Login (Beta)

**SICHERHEIT:** Diese Testversion ist KEIN fertig gesichertes Finanzprodukt.

## Neu
- Unter **Mehr → Cloud-Konto (Beta)**: Registrierung, Login, Logout, Cloud-Arbeitsflächen anlegen.
- Nutzung des Supabase-Projekts in EU-Region, mit ausschließlich öffentlichem Publishable Key.
- Authentifizierung erfolgt online, nur bei aktiver Internetverbindung.
- Zugangstokens liegen in **sessionStorage** und werden beim Schließen der Browsersitzung gelöscht. Auf geteilten Geräten immer abmelden.
- **Keinerlei Übertragung oder Synchronisation bisheriger Finanzdaten, Fotos, Kundenakten oder Sicherungen.**
- Alte Daten und Haushalte bleiben unangetastet.

## Vor dem ersten Test
1. Supabase Dashboard > Authentication > URL Configuration: **Site URL** und bei Bedarf **Redirect URLs** auf die GitHub Pages-Testadresse setzen (falls E-Mail-Bestätigungen im Test genutzt werden).
2. Supabase Dashboard > Authentication > Providers > Email: E-Mail-Bestätigung und Mailzustellung prüfen. Für öffentliches Testen eigenen SMTP einrichten; Supabase Standard-Mail-Versand ist beschränkt.
3. In der App unter Mehr „Cloud-Konto (Beta)“ öffnen, zuerst ein TESTKONTO nutzen.
4. Zwei getrennte Testaccounts anlegen und verifizieren, dass jeder nur eigene Workspaces sieht.

## Sicherheit & Grenzen
- RLS und geschützter Storage sind auf Supabase eingerichtet. Die Datenbank enthält keine kopierten App-Daten.
- Es fehlen weitere Tests und Produktionsfunktionen: verschlüsselte lokale DB, sicherer geräteübergreifender Sync, Passwort-Reset, Account-Löschung, serverseitige Trial- und Kaufprüfung sowie echte Open-Banking-Anbindung.
- Bestehende lokale JSON-Sicherungen bleiben unverschlüsselt und benötigen verantwortungsvollen Umgang.
- Noch keine echten Bank-, Privat- oder Kundendaten eingeben.
- NUR DEV/QA. Ein Account in der Cloud bedeutet **nicht**, dass diese App bereits sichere cloudbasierte Buchungen anbietet.
- Private Beta lieber nicht in der öffentlich beworbenen Live-Demo aktivieren, solange Registrierung und Mailversand nicht geprüft wurden.

## Update
Erst bestehende JSON-Sicherung erstellen, dann die **12 Dateien** im Test-Repository ersetzen. Den Ordnerinhalt am Stamm des Repositories hochladen. Danach URL mit ?v=095 öffnen. Bei gemischten Cache-Versionen zuerst Neuladen mit Internet prüfen; keine Website-Daten löschen.
