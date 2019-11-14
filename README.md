## Description
Framework for web automation using:
* [Cypress.io](https://www.cypress.io/) testing tool
* [Junit reporter](https://docs.cypress.io/guides/tooling/reporters.html#npm-Reporters) which accepts options and allows to customize behavior
* [Junit-merge](https://www.npmjs.com/package/junit-merge) library to merge reports
* Run tests in Jenkins Pipeline
* Publishing reports in Jenkins

## Getting Started
Install dependencies:

```
yarn install
```

## Running Tests
Run all tests in Electron:

```
yarn cy:run
```

Run all tests in Chrome:

```
yarn cy:run-chrome
```

Open Cypress to run a specific spec:

```
yarn cy:open
```