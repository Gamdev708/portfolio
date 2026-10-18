# Pasindu Siriwardana — Gameplay Programmer

A responsive Unreal Engine / C++ portfolio. Static HTML, CSS, and JavaScript; no dependencies or installation required. Content is centralized in `assets/content.js`.

## Preview and validate

Requires Node.js 22 or later.

```sh
npm run check
npm run build
npm run dev
```

Open http://127.0.0.1:4173. The publishable files are generated in `dist/`.

## GitHub

Suggested repository name: `portfolio`, under `Gamdev708`. Create an empty repository, then from this directory:

```sh
git remote add origin https://github.com/Gamdev708/portfolio.git
git push -u origin main
```

If you choose another repository name, change the remote URL. Repository creation and authentication are separate from the local Git repository. No hosting workflow is enabled; GitHub Actions checks the source and build only.

## Cloudflare Pages (manual)

Import the GitHub repository as a Pages project. Use:

| Setting | Value |
| --- | --- |
| Framework preset | None |
| Production branch | main |
| Build command | npm run build |
| Output directory | dist |

See https://developers.cloudflare.com/pages/get-started/git-integration/ for the current setup. There are no environment variables or backend services.

## Add your content

Feature Gym uses a custom mechanic-by-mechanic case study in `assets/feature-gym.js`. Its seven gameplay demonstrations and poster images live in `assets/media/feature-gym/`. Sideways wall-running and upward wall-running are separate clips, cut from 54.3–59.7s and 138.0–141.8s in the supplied recording. The parkour architecture, slide, vault, and combo diagrams are scalable SVGs recreated from the owner's reference layout. Vaulting has a labeled media placeholder until a dedicated clip is provided. The existing `#project-prototypes` URL is retained for compatibility.

Edit `assets/content.js`:

- `profile.email`, `linkedin`, `resume`: optional contact and resume links. Empty values hide the links.
- Project `media`: local image path such as `assets/media/parkour.webp`, or an HTTPS image URL.
- Project `video`: public gameplay watch-page URL.
- Project `source`: approved public source repository.
- Project `build`: approved build download URL.
- Project `gallery`: any number of `{ type: 'video' | 'image', title, caption, url }` entries. Set each entry's `url` to replace its placeholder. Videos support YouTube watch/Shorts links and local `.mp4`/`.webm` files, with playback controls. Images support local files and HTTPS URLs. Closing a project stops its media playback.

Add approved images and PDFs inside `assets/`. The current project artwork is typographic illustration, not gameplay screenshots. Replace it with real project media before applying. The four project breakdowns open in accessible native dialogs and have shareable `#project-…` URLs.

Before publishing, complete `docs/CONTENT-CHECKLIST.md`. The draft has no invented dates, performance figures, contact addresses, or gameplay footage. No Unreal source, proprietary assets, credentials, or project binaries have been copied into this repository.

The delayed combo demonstration uses 190.0–195.2 seconds (3:10–3:15.2) from the original recording.
