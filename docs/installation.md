---
id: installation
title: Install CLI
sidebar_label: Install CLI
---

## Introduction
Creamie is entirely based on pure javascript methodology. It's scalable in nature and have very transparent javascript workflows. There is no abstraction in workflows so that you can reinvent custom workflow on top of this framework. Since, the whole framework core built under web components. All the features were wrapped under `Creamie` class which extends web component strategies.

Creamie increases your development's reusability, testability and reliability. Since it's based on web components, we can make use of shadow DOM where event bubbling triggers only under components, write individual style for components and don't need to worry about naming conflicts in DOM.

## Prerequisite
- Install [Node.js](https://nodejs.org/en/)

## Install Creamie's Command Line Interface (CLI)

Run the following command to install the CLI globally. If it isn't installed globally, you might not be able to use it through the terminal.

```sh
npm install -g @creamie/cli
```

In Linux or MacOS, you might face these errors:

```sh
npm WARN checkPermissions Missing write access to /usr/local/lib/node_modules
npm ERR! code EACCES
npm ERR! syscall access
npm ERR! path /usr/local/lib/node_modules
npm ERR! errno -13
npm ERR! Error: EACCES: permission denied, access '/usr/local/lib/node_modules'
npm ERR!  [Error: EACCES: permission denied, access '/usr/local/lib/node_modules'] {
npm ERR!   stack: "Error: EACCES: permission denied, access '/usr/local/lib/node_modules'",
npm ERR!   errno: -13,
npm ERR!   code: 'EACCES',
npm ERR!   syscall: 'access',
npm ERR!   path: '/usr/local/lib/node_modules'
npm ERR! }
```
Try this [link](https://gist.github.com/isaacs/579814) to install [nodejs](https://nodejs.org/en/) in proper way.
