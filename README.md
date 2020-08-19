# Eleventy Starter [![Netlify Status](https://api.netlify.com/api/v1/badges/4eb519eb-9518-4b07-bd0a-f7a5610d3ee3/deploy-status)](https://app.netlify.com/sites/ideas42ventures-eleventy-starter/deploys)

A very opinionated static site project scaffold with Eleventy. Made for use as a GitHub template repo.

## How to use this repo

- This is a GitHub template repo. See the [official docs](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) for a detailed description of how templates work
- Generate a new repo based off this template with the "Use this repo" button or [Generate](https://github.com/ideas42ventures/eleventy-starter/generate)
- If deploying to Netlify, create a new site from the generated repo
- In the README of the generated repo
  - Remove this top section
  - Update the (✏️ CHANGE ME FOR YOUR PROJECT) sections below
  - Make any other changes needed for your project
- From there, make any changes needed to the project. Projects are not required to continue using anything in this template

## What's included

- Standard Eleventy foundation with decisions made about templates and locations
- Local dev tooling; Prettier, eslint, and precommit hooks for both with lint-staged and husky
- A recommened directory structure for templates and static assets
- A recommended CSS organization structure with basic concatenation
- A working web manifest

---

## Environments

- (✏️ CHANGE ME FOR YOUR PROJECT) Production: [ideas42ventures-eleventy-starter.netlify.app/](https://ideas42ventures-eleventy-starter.netlify.app/)
- Staging: Every pull request gets a preview deploy URL. Check the PR or Netlify UI for it.

## Contributing

- This is a static site build using [Eleventy](https://www.11ty.dev/docs)
- Hosted on Netlify

### Requirements

- node.js: LTS version recommended
- yarn: Latest version recommended

### Local setup

#### Clone the repo

(✏️ CHANGE ME FOR YOUR PROJECT)

```
git clone git@github.com:orgname/repo-name.git
cd repo-name
```

#### Install dependencies

```
yarn
```

#### Start the dev server and watcher

```
yarn start
```

The site will be available at [http://localhost:8080/](http://localhost:8080/).

#### Build without dev server or watcher

When you need to do a new build without starting the dev server or file watchers run:

```
yarn build
```

## Deploying

### To Production

We host this site on [Netlify](https://www.netlify.com/). Anything merged into the `main` branch is deployed to production.

### To Staging

We use Netlify preview builds. To see any branch in a live environment, push the branch to the remote and open a pull request.

## Code formatting

We format all JavaScript, CSS, and HTML with [Prettier](https://prettier.io). We use the [lint-staged with husky approach](https://prettier.io/docs/en/precommit.html#option-1-lint-stagedhttpsgithubcomokonetlint-staged) to make sure formatting happens for all contributors.
