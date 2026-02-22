module.exports = {
    branches: ["master"],
    tagFormat: "v${version}",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        ["@semantic-release/npm", { npmPublish: false }],
        ["@semantic-release/exec", { prepareCmd: "node scripts/version.cjs" }],
        [
            "@semantic-release/git",
            {
                assets: ["package.json", "package-lock.json", "src/build.tex", "CHANGELOG.md"],
                message:
                    "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
            },
        ],
        [
            "@semantic-release/github",
            {
                assets: [
                    { path: "src/solutions.pdf", label: "solutions.pdf (source build)" },
                    { path: "build/solutions.pdf", label: "solutions.pdf (packaged build)" },
                ],
            },
        ],
    ],
};
