# Friend Finder

A survey-based people matching app to demonstrate a simple node express server. The user participates in a simulated personality-matching survey which sets them up with a robot 'mentor' in order better prepare for life under the thrall of the machines. Survey responses are passed into a rudimentary api and the matching personality is sent back as a reply.

1. [Installation and Requirements](#installation-and-requirements)
1. [How to Use](#how-to-use)
1. [How it Works](#how-it-works)
1. [About](#about)

## Installation and Requirements

Friend Finder requires [node.js](https://nodejs.org) and the express npm package. This repository includes a `package.json` file so all npm dependencies can easily be installed from the console with `npm i`.

## How to Use

Friend Finder is hosted on heroku at [https://friendaroos.herokuapp.com/](https://friendaroos.herokuapp.com/). There is a main page with a link to the survey.

To run on your local machine use:

```bash
node server.js
```

Then open your browser of choice and enter the following into the url bar:

```url
localhost:8080
```

The home page should display, you can then follow the link and fill out the survey.

## How it Works

Friend Finder is a node server running a primitive api with a data source called `friends.js`, which in this case is simply an array of objects containing a name, a link to an image, and an array of survey scores.

1. [Server](#serverjs)
1. [Routing](#routing)
1. [Public](#public)

### `server.js`

Run this file to start the Friend Finder server. This file does little more than import express and the two routing files, and then start listening on the `PORT` given to by the computer, or the default value: `8080`.

### Routing

The server responds to requests from users along a number of predefined routes. These are defined in `/app/routing/htmlRoutes.js` and `/app/routing/apiRoutes.js`. These routes are executed by `server.js`.

#### `htmlRoutes.js`

This file defines three routes that deliver html to the users browser:

`/` and it throws out `home.html`, a brief introductory website with relevent links to the survey and finder itself and also the entire api.

`/survey` sends `survey.html`, which includes the Friend Finder surey and the code to send the information to the api and display the response appropriately.

The third and final route takes any other url besides the first two and redirects it to `/`.

#### `apiRoutes.js`

This file defines two routes for interacting with the `friends` api through `/api/friends`.

The first is a GET that simply returns the contents of the friends api by returning the entire array in the form of a JSON.

The second is a POST that takes in a `newFriend` object, compares the survey results to each other friend, and replies to the page with the closest match.

### Public

#### home.html

This is simply a catch-all page that gives a little cutsy background info and provides links to the survey and full api in json format.

#### survey.html

This contains the hardcoded questions that define the personality scores of each `friend` in the api. It also contains the script that packages it up and sends it to the api, plus the logic and modal to display the users match.

## About

[Thomas Christ](https://kiselblat.github.io/) is a student in the Web Development Bootcamp at the University of Minnesota.
