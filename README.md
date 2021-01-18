**Getting Started**

> Node 10.2+ is required

1. Clone the repository and run `npm install` to download all the dependencies.

The following scripts are available:

|Label  |Description  |Type  |Command  |
|---------|---------|---------|---------|
|Source     |Combines all source CSS files into one and saves it as `dist/css/styles.src.css` without any optimization applied          |build         |`npm run source`         |
|Purge     |Combines all source CSS files into one, removes all unused classes, and saves it as `dist/css/styles.purged.css`          |build         |`npm run purge`         |
|Mini     |Builds a purged version of the stylesheet, minifies it, and saves it as `dist/css/styles.mini.css`         |build         |`npm run mini`         |
|Build Everything     |Builds all 3 stylesheets         |build         |`npm run all`         |
|Minify|Minifies the available purged stylesheet (to test minify settings without compiling the CSS) and saves it as `dist/css/styles.mini.css`|test|`npm run minify`

Build tasks are also available in VS Code. Press `Cmd/cntr + shift + b` to see the list and run them.

2. Open the Workspace file in `.vscode` and apply the settings/ install the extentions. Extentions do the following:


|Name  |Function  |
|---------|---------|
|Tailwind Docs     |Easy access to specific parts of Tailwind docs.         |
|Stylelint     |Takes over CSS validation and respects Tailwind directives so that Tailwind CSS files don't throw errors.         |
|VSCode Tailwind CSS     |Auto-complete suggestions based on all available Tailwind classes in accordance to the root `tailwind.config.js` (essential).         |
|Headwind     |Sorts the Tailwind class list on save. Keeps the class orders consistent (essential).         |
|Comment Anchors     |Easy navigation to sub-segments of large documents based on anchors        |
|Live Server     |Simulates a server and auto-refreshes the page on save/build         |

