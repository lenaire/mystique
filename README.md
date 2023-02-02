[![test runner](https://github.com/lenaire/mystique/actions/workflows/test.yml/badge.svg)](https://github.com/lenaire/mystique/actions/workflows/test.yml)

# Mystique
Mystique is a sample design system.  It is the theming and componentization of common user inputs and display elements.

React App Flavor
* [Typescript](https://www.typescriptlang.org/) for type safety
* [Styled Components](https://styled-components.com/) for styling headless components
* [Stoybook](https://storybook.js.org/) for component documentation
* [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) for code cleanliness and standardization 

## Available Scripts
In this project you can run:

### `npm run build`
This builds the typescript project into `./dist`

### `npm run build:watch`
This watches for changes and incrementally rebuilds the app when underlying files change.

### `npm run storybook`
This runs Storybook.  Storybook is used for developing components in isolation and visually testing these components.
Open [http://localhost:6006](http://localhost:6006) to view it in your browser.

### `npm run build-storybook`
This builds Storybook documentation in a docs folder.  This can be pushed to Github to updated Github Pages documentation of components.

### `npm run scaffold`
This scaffolds a react component.

### `npm test`
Runs all tests.

### `npm run test:coverage`
Run tests with coverage report.

### `npm run test:watch`
Run tests with watch.

### `npm run lint`
This runs eslint.

### `npm run format`
This runs eslint with fix property and supresses warnings. Prettier is run through eslint.

## Sample Component Folder Structure
Each component folder has an `internals` folder for any local functionality that is no shared.  Each component has a `.stories.tsx` file written in CSF.  An optional `.mdx-documentation.mdx` file may also be used for customized component documentation.  
```
├── src                                       
│   ├── components                            
│   │   ├── table                  
│   │   │   ├── internals                 
|   │   │   │   └── helpers.tsx           
│   │   │   ├── index.tsx                 
│   │   │   ├── table.stories.tsx
│   │   │   ├── table.tsx
│   │   │   └── table.test.tsx
```

## Local Development
Husky is enabled as a pre-commit hook.  The project should be properly linted and formatted before checking files in.  All new code should have 100% code coverage.  The Main branch is gated with an 85% code coverage minimum.

## Branching
Development is done from feature branches.  Feature branches should be associated with Github issues. Each feature branch a developer creates requires a PR back to the versioned release branch.

## Releases
When a release branch is merged into main then an npm publish is triggered via github workflows with the `publish.yml`.  The version number in the package.json should be incremented when the release branch is ready to be merged into master.  Github Releases is used to track all changes for new releases.  A Release draft should be created in preparation of the next release branch merge and all features verified.  When the new version is pushed to Github Packages the Github Release should be published.

## Installation
Add a scoped registry in your .npmrc
```
@lenaire:registry=https://npm.pkg.github.com
registry=https://registry.npmjs.org
```

Now the package can be installed
```
npm install @lenaire/mystique@1.0.0
```
