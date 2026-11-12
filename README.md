# Focus Desktop
Free offline-first Windows study app.

## Build installer using GitHub (no commands on your PC)
1. Create a public repository on github.com (e.g. focus-desktop).
2. In the new repository select **Add file > Upload files**.
3. Upload `app.js`, `index.html`, `main.js`, `package.json`, `styles.css`, and `README.md` from this folder. Commit the files.
4. Create `.github/workflows/build-windows.yml` in GitHub: **Add file > Create new file** and type that full path as the filename. Paste the contents of the `build-windows.yml` file provided in the package. Commit it.
5. Open the **Actions** tab. Choose **Build Focus Desktop for Windows**, then **Run workflow**. (A push to main also triggers a build.)
6. Wait for the green check mark. Open the completed workflow run, and under **Artifacts** download **Focus-Desktop-Windows-Installer**.
7. Unzip that artifact to find the `.exe` installer. Double-click to install.

The resulting installer is unsigned; Windows may display a SmartScreen warning. Only run installers you have built yourself from code you trust.

The app stores data locally in Electron browser storage. Export backups regularly. Do not uninstall or clear app data without backing up.
