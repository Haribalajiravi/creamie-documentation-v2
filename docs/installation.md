---
id: installation
title: Install CLI
sidebar_label: Install CLI
---

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
