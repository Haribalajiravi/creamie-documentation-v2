---
id: projectdeployment
title: Deploy the project
sidebar_label: Deploy project
---

Ensure you've run the following commands before deploying the project.

## Rebuild `package.json`

```bash
cd <PROJECT_NAME>
npm init
```

`package.json` would have automatically been created in your project's folder. If you had made any changes to it, run this command to rebuild it before deployment.

## Install packages

```bash
npm install
```

Run this command to install your project's dependant packages.

## Deploy project

```bash
npm run development
```

Run this command to deploy your project in a development environment. You can watch your project in action at [http://localhost:8080](http://localhost:8080)

```bash
npm run build
```

Run this command to generate production files in `dist/` folder. This step is essential before the project can be deployed in production.

```bash
npm start
```

Run this command to deploy your project in a production environment and open it up to users.
