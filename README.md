<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<div align="center">

<img src="https://github.com/AndyOooh/event-dee-2/assets/60953822/47df893b-42af-426c-9a5b-b1108c83bd96" alt="Logo" width="" height="70">

### _Connecting events_

  <p>
    <!-- <a href="https://app-event-dee2.vercel.app/">View Demo</a>
    <a href="https://event-dee2.vercel.app/">View Demo</a> -->
    <!-- <a href="https://app-event-dee2.vercel.app/">View Demo</a> -->
    <a href="https://event-dee2.vercel.app/">Landing</a>
    ·
    <a href="https://app-event-dee2.vercel.app/">App</a>
    ·
    <a href="https://storybook-eventdee.netlify.app/">Storybook</a>
    |
    <a href="https://github.com/AndyOooh/event-dee-2/issues">Report Bug</a>
    ·
    <a href="https://github.com/AndyOooh/event-dee-2/issues">Request Feature</a>

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
<!-- - ![Jest](https://img.shields.io/static/v1?style=for-the-badge&message=Jest&color=C21325&logo=Jest&logoColor=FFFFFF&label=) -->

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

## Intro

This project is bootstrapped as a monorepo with [turborepo](https://turbo.build/). It includes four **apps**:

- landing - an SSG Next.js app.
- app - a Next.js app.
- vite-storybook - a Storybook app.
- firebase-cloud-functions - a Firebase Cloud Functions backend.

It also includes five **packages** for shared configurations, types and UI components:

- eslint-config-custom
- tsconfig
- tailwind-config
- event-dee-types
- ui (React component library)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

# Getting Started

To get a local copy up and running follow these simple steps.

## Prerequisites

You must be running **node v.18.17** or higher.

## Installation

1. Clone the repo:
   ```sh
   git clone git@github.com:AndyOooh/event-dee-2.git
   ```
2. Install packages:
   ```sh
   yarn install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Usage

To have a functioning backend you have two options:

- Ceate a Firebase project
- Run with emulators

## Firebase project

Create a firebase project and add the api key to _apps/app/.env_ and other configurations in _apps/app/firebase/clientApp.ts_. Lastly, log in to your firebase account:

```sh
yarn firebase login
```

## Emulators

You can run firebase emulators for cloud functions, firestore, auth and storage with:

```sh
turbo emulators
```

Emulators are available at:

- [localhost:4000](http://localhost:4000) - cloud functions
- [localhost:8080](http://localhost:8080) - firestore
- [localhost:9099](http://localhost:9099) - auth
- [localhost:9199](http://localhost:9199) - storage

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

You can also run the apps separately by using the `--filter` flag in combination with the app name: `landing`, `app`, `firebase-cloud-functions` or `vite-storybook`. For example, to start the client development server only, run:

```sh
turbo dev --filter landing
```

Or you can navigate to the specific app/package directory and use the local commands there with yarn.

Once you have the development servers running, you can access the:

- landing page at [localhost:3000](http://localhost:3000)
- app at [localhost:3001](http://localhost:3001)
- storybook at [localhost:6006](http://localhost:6006)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

# Roadmap

- [x] Bootstrap repo, apps, packages and configs.
- [x] Firebase set up.
- [x] Storybook set up.
- [x] Emulators set up.
- [x] Landing page.
- [x] Authentication flows.
- [x] User profiles - edit, delete, view.
- [x] Event creation - create, edit, delete, view.
- [x] Event feed.
- [x] Optimize SSG.
- [ ] Contract - create, edit, delete, view.
- [ ] Contract - sign.
- [ ] Video upload, storage and viewing.
- [ ] Search.
- [ ] Payment.
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
- [Google Maps React](https://youtu.be/2po9_CIRW7I?si=ApprjzCrqnuEkjPP)
- [@reach/combobox](https://reach.tech/styling)
- [@react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

<!-- Markdown Guide: https://www.markdownguide.org/basic-syntax/#reference-style-links -->
<!-- Create shields (images) https://shields.io/badges -->
<!-- Example shield url. Replace message, logo and color:
https://img.shields.io/static/v1?style=for-the-badge&message=Recoil&color=3578E5&logo=Recoil&logoColor=FFFFFF&label= -->
