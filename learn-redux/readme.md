# Learn Redux

A simple React + Redux implementation. This will be turned into a free video series once the app is totally fleshed out.

## Running

First `npm install` to grab all the necessary dependencies.

Then run `npm start` and open <localhost:7770> in your browser.

## Production Build

Run `npm build` to create a distro folder and a bundle.js file.

Then run `npm run start:prod` and open <localhost:7770> in your browser to view the production build of the app.

## Pull requests

In order to merge pull requests opened for the source repo, add this config to git

```
#.git/config
[remote "source"]
  url = https://github.com/wesbos/Learn-Redux-Starter-Files.git
  fetch = +refs/heads/*:refs/remotes/source/*
  fetch = +refs/pull/*/head:refs/remotes/origin/pr/*
```

Run `git fetch source` and then you can `git merge orig/pr/#` into the current branch.
