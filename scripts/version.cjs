// This file is to automatically update new version for
// the document. Please do not manually adjust the file
const fs = require("fs/promises");
const packageJSON = require("../package.json");

const APP_VERSION = packageJSON.version;
(async () => {
    await fs.writeFile("./src/build.tex", APP_VERSION);
})();
