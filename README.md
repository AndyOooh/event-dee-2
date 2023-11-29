<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<div align="center">

<img src="https://github.com/AndyOooh/event-dee-2/assets/60953822/47df893b-42af-426c-9a5b-b1108c83bd96" alt="Logo" width="" height="70">

<!-- <h1>Event Dee</h3> -->
<!-- <h4>Connecting events - An event workers platform.</h4> -->

### _Connecting events_

  <p>
    <a href="https://app-event-dee2.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/AndyOooh/repo_name/issues">Report Bug</a>
    ·
    <a href="https://github.com/AndyOooh/repo_name/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
      <ul>
        <li><a href="#intro">Intro</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#author">Author</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

# About The Project

## Built With

<!-- * [![Next][Next.js]][Next-url] -->

- ![Turborepo](https://img.shields.io/static/v1?style=for-the-badge&message=Turborepo&color=9E4C96&logo=Turborepo&logoColor=FFFFFF&label=)
- ![Firebase](https://img.shields.io/static/v1?style=for-the-badge&message=Firebase&color=222222&logo=Firebase&logoColor=FFCA28&label=)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
- ![Next.js](https://img.shields.io/static/v1?style=for-the-badge&message=Next.js&color=000000&logo=Next.js&logoColor=FFFFFF&label=)
- ![Vite](https://img.shields.io/static/v1?style=for-the-badge&message=Vite&color=646CFF&logo=Vite&logoColor=FFFFFF&label=)
- ![Storybook](https://img.shields.io/static/v1?style=for-the-badge&message=Storybook&color=FF4785&logo=Storybook&logoColor=FFFFFF&label=)
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![DaisyUI](https://img.shields.io/static/v1?style=for-the-badge&message=DaisyUI&color=5A0EF8&logo=DaisyUI&logoColor=FFFFFF&label=)
- ![Jest](https://img.shields.io/static/v1?style=for-the-badge&message=Jest&color=C21325&logo=Jest&logoColor=FFFFFF&label=)

## Intro

This project is bootstrapped as a monorepo with [turborepo](https://turbo.build/). It includes four **apps**:

- landing - an SSG Next.js 13 app.
- app - a Next.js 13 app.
- vite-storybook - a Storybook 7 app.
- firebase-cloud-functions - a firebase cloud functions backend.

It also includes five **packages** for shared configurations, types and UI components:


- eslint-config-custom
- tsconfig
- tailwind-config
- event-dee-types
- ui

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

# Getting Started

To get a local copy up and running follow these simple steps.

## Prerequisites

You must be running **node v. 18** or higher.

## Installation

1. Clone the repo:
   ```sh
   git@github.com:AndyOooh/event-dee-2.git
   ```
2. Install packages (In the root folder):
   ```sh
   yarn install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Usage

To have a functioning backend you must create a firebase project and add the api key to _apps/app/.env_ and other configurations in _apps/app/firebase/clientApp.ts_. Lastly, log in to your firebase account in the terminal by running:

```sh
yarn firebase login
```

For running tests and starting the development servers, turborepo is used. It is configured to run all apps concurrently. The commands are:

```sh
yarn dev
```

and

```sh
yarn test
```

or

```sh
yarn coverage
```

However, you can also run the apps separately. Either by using the `--filter` flag in combination with the app names `landing`, `app`, `firebase-cloud-functions` or `vite-storybook`, or by appending them with `:<package>`. For example, to start the client development server only, run:

```sh
yarn dev --filter landing
```

Or you can _cd_ into the specific directories and use the commands there.

Once you have the development servers running, you can access the: 
- landing page at [localhost:3000](http://localhost:3000) 
- app at [localhost:3001](http://localhost:3001)
- storybook at [localhost:6006](http://localhost:6006)

You can also run firebase emulators for cloud functions, firestore, auth and storage with:

```sh
turbo emulators
```

Emulators are available at:
- [localhost:4000](http://localhost:4000) - cloud functions
- [localhost:8080](http://localhost:8080) - firestore
- [localhost:9099](http://localhost:9099) - auth
- [localhost:9199](http://localhost:9199) - storage


To clean the cache and build folders and, run:

```sh
turbo clean
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

# Roadmap

- [x] Bootstrap repo, apps, packages and configs.
- [x] Landing page.
- [x] Authentication flows.
- [ ] ...

See the [open issues](https://github.com/AndyOooh/persona/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Author -->

# Author

👤 **AndyOooh**

- Website: [andyo.xyz](https://www.andyo.xyz/)
- LinkedIn: [@andyooh](https://linkedin.com/in/andyooh)
- Resume: [andyo.xyz/resume](https://www.andyo.xyz/static/media/Andreas%20Oee%20-%20Junior%20Full%20Stack%20-%20Resume.ab537effccc087b4a020.pdf)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Jira integration now works!

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
