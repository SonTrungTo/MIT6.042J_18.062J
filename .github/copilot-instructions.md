# MIT6.042J_18.062J Mathematics for Computer Science Guidelines

## Purpose
This file contains descriptions for the structure of the project and the tools in which the project is
built. It also describes the methodology for how this project is built and versioned everytime it is
deployed in production.

## Project Structure
The project is structured in a way that promotes modularity and separation of concerns. The main
directories include:
- `src/`: Contains the source code for the project, the versioning file, and the compiled files,
including the
generated PDF file.
- `src/notes`: Contains the notes for the project, written in LaTeX
- `src/problems`: Contains the problems and solutions for the project, written in LaTeX
- `scripts`: Contains the scripts for building and deploying the project. The files generated here should
be used to write to `src/build.tex` for versioning, based on `package.json`, which is updated with every
release.
- `package.json`: Contains the metadata for the project, including the version number, dependencies, and
scripts for building and deploying the project.

## Build Methodology
- CI/CD pipeline should build and compile the project with `latexmk`, generating `src/solutions.pdf`.
- CI/CD pipeline should contain **only** `release` workflow, which is triggered when changes are merged
into `master`. Additionally, there should be one file and the steps should be divided into multiple
stages:
	- Stage 1: `build` stage, which setup everything until running `npm run -s set-build`.
	- Stage 2: `release` stage, only after stage 1 is successful, which runs `semantic-release` to update
	the version number in `package.json` and create a new release on GitHub.
- `semantic-release` should update `package.json` when changes are merged into `master`.
- Run `npm run set-build` (or `scripts/deploy.sh`) to:
	- sync `src/build.tex` from `package.json` version
	- rebuild `src/solutions.pdf`
	- copy the result to `build/solutions.pdf` for packaging
