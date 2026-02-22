# MIT6.042J_18.062J Mathematics for Computer Science Guidelines

## Purpose
This file contains descriptions for the structure of the project and the tools in which the project is built. It also describes the methodology for how this project is built and versioned everytime it is deployed in production.

## Project Structure
The project is structured in a way that promotes modularity and separation of concerns. The main directories include:
- `src/`: Contains the source code for the project, the versioning file, and the compiled files, including the
generated PDF file.
- `src/notes`: Contains the notes for the project, written in LaTeX
- `src/problems`: Contains the problems and solutions for the project, written in LaTeX
- `scripts`: Contains the scripts for building and deploying the project. The files generated here should be used to write to `src/build.tex` for versioning, based on `package.json`, which is updated with every release.
- `package.json`: Contains the metadata for the project, including the version number, dependencies, and scripts for building and deploying the project.

## Build Methodology
- CI/CD pipeline should build and compile the project with `latexmk`, generating `src/solutions.pdf`.
- `semantic-release` should update `package.json` when changes are merged into `master`.
- Run `npm run set-build` (or `scripts/deploy.sh`) to:
	- sync `src/build.tex` from `package.json` version
	- rebuild `src/solutions.pdf`
	- copy the result to `build/solutions.pdf` for packaging
