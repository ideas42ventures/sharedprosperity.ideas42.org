# sharedprosperity.ideas42.org [![Netlify Status](https://api.netlify.com/api/v1/badges/68152a7c-cb23-439c-a8aa-91f505587fa5/deploy-status)](https://app.netlify.com/sites/sharedprosperity-ideas42/deploys)

## Environments

- Production: [sharedprosperity.ideas42.org](https://sharedprosperity.ideas42.org)
- Netlify URL: [sharedprosperity-ideas42.netlify.app](https://sharedprosperity-ideas42.netlify.app)
- Staging: Every pull request gets a preview deploy URL. Check the PR or Netlify UI for it.

### Contact form

We use [Netlify forms](https://docs.netlify.com/forms/setup/) to handle the contact form submission.

- Form submissions are stored in the forms section of Netlify
- We send a copy of every submission to `spc@ideas42.org`

## Design

Available in Figma https://www.figma.com/file/fGwp7zO7prD9qipvkGNF3s/Shared-Prosperity-Catalyst-Site

## Contributing

- This is a static site build using [Eleventy](https://www.11ty.dev/docs)
- Hosted on Netlify in the ideas42 Ventures account

### Requirements

- node.js: LTS version recommended
- yarn: Latest version recommended

### Local setup

#### Clone the repo

```
git clone git@github.com:orgname/sharedprosperity.ideas42.org.git
cd sharedprosperity.ideas42.org
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

## A note about inline styles

For production builds, we put all CSS in the `head` of each page. This helps avoid layout shift during page load.

During dev builds–with `yarn start`–all CSS is compiled to an external `site.css`. We include that file with a `link` element in the head.
