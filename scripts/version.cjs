// This file automatically syncs the document version (src/build.tex)
// from package.json. Please do not manually adjust src/build.tex.
const fs = require("fs/promises");
const path = require("path");

const packageJSON = require(path.join(__dirname, "..", "package.json"));
const appVersion = packageJSON.version;

(async () => {
    const buildTexPath = path.join(__dirname, "..", "src", "build.tex");
    await fs.writeFile(buildTexPath, `${appVersion}\n`, "utf8");
})();
