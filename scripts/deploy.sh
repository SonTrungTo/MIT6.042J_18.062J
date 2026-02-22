#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

# Builds the PDF and syncs src/build.tex from package.json version.
npm run -s set-build
