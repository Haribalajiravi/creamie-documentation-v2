---
id: projectgeneration
title: Create a Creamie project
sidebar_label: Create Project
---

[Install the Creamie CLI](https://creamie.now.sh/docs/installation) and use the following command to automatically create all the folders and files required for your project.

```bash
creamie create <PROJECT_NAME>
```

## Folder Structure

The auto-generated project's folder structure will resemble this:

```bash
<PROJECT_NAME>
├── ecosystem.config.js
├── package.json
├── package-lock.json
├── server.js
├── src
│   ├── app
│   │   ├── app-boot.js
│   │   ├── app-component.css
│   │   ├── app-component.html
│   │   ├── app-component.js
│   │   └── app-config.js
│   ├── assets
│   │   └── cream.png
│   ├── index.html
│   ├── index.js
│   └── styles
│       └── main.css
└── webpack.config.js
```
