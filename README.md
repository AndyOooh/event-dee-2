<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<div align="center">

<img src="https://github.com/AndyOooh/event-dee-2/assets/60953822/47df893b-42af-426c-9a5b-b1108c83bd96" alt="Logo" width="" height="70">

<!-- <h1>Event Dee</h3> -->
<!-- <h4>Connecting events - An event workers platform.</h4> -->

### _Connecting events_

  <p>
    <!-- <a href="https://app-event-dee2.vercel.app/">View Demo</a> -->
    <a href="https://event-dee2.vercel.app/">View Demo</a>
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
     <ul>
        <li><a href="#basic-scripts">Basic Scripts</a></li>
        <li><a href="#filtering-apps">Filtering apps</a></li>
        <li><a href="#emulators">Emulators</a></li>
      </ul>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#author">Author</a></li>
    <li><a href="#library-docs">Libraries</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

# About The Project

## Built With

<!-- * [![Next][Next.js]][Next-url] -->
<!-- - ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) -->

- ![Turborepo](https://img.shields.io/static/v1?style=for-the-badge&message=Turborepo&color=9E4C96&logo=Turborepo&logoColor=FFFFFF&label=)
- ![Firebase](https://img.shields.io/static/v1?style=for-the-badge&message=Firebase&color=222222&logo=Firebase&logoColor=FFCA28&label=)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![Next.js](https://img.shields.io/static/v1?style=for-the-badge&message=Next.js&color=000000&logo=Next.js&logoColor=FFFFFF&label=)
- ![Vite](https://img.shields.io/static/v1?style=for-the-badge&message=Vite&color=646CFF&logo=Vite&logoColor=FFFFFF&label=)
- ![Storybook](https://img.shields.io/static/v1?style=for-the-badge&message=Storybook&color=FF4785&logo=Storybook&logoColor=FFFFFF&label=)
- ![Recoil](https://img.shields.io/static/v1?style=for-the-badge&message=Recoil&color=3578E5&logo=Recoil&logoColor=FFFFFF&label=)
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![DaisyUI](https://img.shields.io/static/v1?style=for-the-badge&message=DaisyUI&color=5A0EF8&logo=DaisyUI&logoColor=FFFFFF&label=)
<!-- - ![Jest](https://img.shields.io/static/v1?style=for-the-badge&message=Jest&color=C21325&logo=Jest&logoColor=FFFFFF&label=) -->

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

You must be running **node v.18.17** or higher.

## Installation

1. Clone the repo:
   ```sh
   git@github.com:AndyOooh/event-dee-2.git
   ```
2. Install packages:
   ```sh
   yarn install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Usage

To have a functioning backend you must create a firebase project and add the api key to _apps/app/.env_ and other configurations in _apps/app/firebase/clientApp.ts_. Lastly, log in to your firebase account:

```sh
yarn firebase login
```

## Basic Scripts

For running tests and starting the development servers, turborepo is used. It is configured to run all apps concurrently. The commands are:

Run dev servers:
```sh
turbo dev
```

Lint
```sh
turbo lint
```

Build apps:

```sh
turbo build
```

<!-- Run tests:

```sh
=======
```sh
turbo build
```

<!-- Run tests:

```sh
turbo test
```

or

```sh
turbo coverage
``` -->

To clean the cache and remove build folders and other generated code, run:

```sh
turbo clean
```

In addition you might want to delete the root _node_modules_ folder.

## Filtering apps

You can also run the apps separately. Either by using the `--filter` flag in combination with the app names `landing`, `app`, `firebase-cloud-functions` or `vite-storybook`, or by appending them with `:<package>`. For example, to start the client development server only, run:

```sh
turbo dev --filter landing
```

Or you can _cd_ into the specific directories and use the commands there.

Once you have the development servers running, you can access the:

- landing page at [localhost:3000](http://localhost:3000)
- app at [localhost:3001](http://localhost:3001)
- storybook at [localhost:6006](http://localhost:6006)


## Emulators

You can also run firebase emulators for cloud functions, firestore, auth and storage with:

```sh
turbo emulators
```

Emulators are available at:

- [localhost:4000](http://localhost:4000) - cloud functions
- [localhost:8080](http://localhost:8080) - firestore
- [localhost:9099](http://localhost:9099) - auth
- [localhost:9199](http://localhost:9199) - storage


**NB: Emulators are not yest set up!**


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

## Library docs

- [Turborepo](https://turbo.build/)
- [Next.js](https://nextjs.org/)
- [Recoil](https://recoiljs.org/)
- [Firebase](https://firebase.google.com/)

- [TailwindCSS](https://tailwindcss.com/)
- [Daisy UI](https://daisyui.com/)

- [Storybook](https://storybook.js.org/)
- [Vite](https://vitejs.dev/)
- [React Firebase Hooks](https://github.com/CSFrequency/react-firebase-hooks/tree/09bf06b28c82b4c3c1beabb1b32a8007232ed045)
- [React Hook Form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup)

- [Lodash](https://lodash.com/docs/4.17.15)
- [Date-fns](https://date-fns.org/)

- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)

- [Github Actions](https://github.com/features/actions)

- [Clone Reddit Video](https://www.youtube.com/watch?v=rCm5RVYKWVg&t=12603s) (next.js, firebase, react-firebase-hooks, recoil)
- [React Hook Form Playlist - Codevolution](https://www.youtube.com/playlist?list=PLC3y8-rFHvwjmgBr1327BA5bVXoQH-w5s)
- [React Hook Form Playlist - Beier Luo](https://www.youtube.com/playlist?list=PL03g4H_exuTppOgtY-45oWvN79rvJIKzf)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

<!-- Markdown Guide: https://www.markdownguide.org/basic-syntax/#reference-style-links -->
<!-- Create shields (images) https://shields.io/badges -->
<!-- Example shield url. Replace message, logo and color:
https://img.shields.io/static/v1?style=for-the-badge&message=Recoil&color=3578E5&logo=Recoil&logoColor=FFFFFF&label= -->
