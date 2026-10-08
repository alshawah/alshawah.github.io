# Hesham Alshawabka — Portfolio

## Publish a fresh GitHub Pages website

1. Create a public repository called alshawah.github.io in your alshawah GitHub account.
2. Upload the files inside this folder to the repository root. Do not upload the ZIP or the enclosing folder.
3. Commit the files to main.
4. Go to Settings > Pages. Select Deploy from a branch, main, and / (root), then Save.
5. Open https://alshawah.github.io after deployment finishes.

## Basketball demo

The portfolio can be published now. The video analysis requires a Python server; GitHub Pages does not execute the Flask app.

Deploy the app from Basketball_Tracker_Web.zip to a Python/Docker host. Set PORTFOLIO_ORIGIN to https://alshawah.github.io on that server. Put its HTTPS URL in SHOT_TRACKER_URL in demo-config.js and commit the change to this repository. The demo stays visibly offline until the server is available.

Both index.html and projects.html can be edited directly. styles.css controls the shared layout. theme.js and main.js handle the light/dark toggle.
