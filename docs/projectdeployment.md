---
id: projectdeployment
title: Deploy the project
sidebar_label: Deploy project
---

Ensure you've run the following commands before deploying the project.

## Rebuild `package.json`

```sh
cd <PROJECT_NAME>
npm init
```

`package.json` would have automatically been created in your project's folder. If you had made any changes to it, run this command to rebuild it before deployment.

## Install packages

```sh
npm install
```

Run this command to install your project's dependant packages.

## Deploy project

```sh
npm run development
```

Run this command to deploy your project in a development environment. You can watch your project in action at [http://localhost:8080](http://localhost:8080)

```sh
npm run build
```

Run this command to generate production files in `dist/` folder. This step is essential before the project can be deployed in production.

```sh
npm start
```

Run this command to deploy your project in a production environment and open it up to users.
