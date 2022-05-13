# 👷 BuildIt 🛠️

## Motivation

Ever googled `Side project ideas`, `beginner app ideas` or some other version of those? Yeah, me to...

In fact this project come about because yet again I could not think of a project idea to build.

Well no more! **BuildIt** is here.

## Built With

**BuildIt** has a React frontend, styled with [Chakra UI](https://chakra-ui.com/) and uses [Redux Toolkit](https://redux-toolkit.js.org/tutorials/overview) for managing all state and bits and pieces on the client.

The API was built in _nodejs_ well _express_ to be specific and my database of choice is [MongoDB](https://www.mongodb.com/).

JWT for Auth

## Project Status

This is still very much a WIP and still in active development. Right now it has a very limited feature set, but, ship early and often they say!

Unauthenticated users can simply view all project ideas on the home page. At the moment each project is made up like so:

```
Difficulty (on of beginner, intermediate or advanced)
Title (required)
Description (required)
User stories (optional but most have)
Examples (ditto)
```

Authenticated users can hit the `/my-projects` route and then have the ability to add project ideas. Once added the route will show any projects you have created and offer the option to delete.

## What's Coming?

Lots! I have a bunch of ideas and am all ears for anything else people would like to see. Here is some features I have in mind:

- Authenticated users should be able to edit their projects
- Any user should be able to upvote a project
- Users should be able to downvote a project - this is to try and weed out spam and profanity, maybe after X amount of downvotes the project should be hidden
- On the last point, project approval might be necessary, but I would rather not delay people being able to add or view projects if possible
- ~~Each project should have a difficulty rating~~ 🔫
- Sorting of projects by _date added_, _upvotes_
- Filtering of projects by _difficulty_

## Screenshots

![2](https://user-images.githubusercontent.com/39712238/168235971-0c1b2eb8-67d4-47f7-960f-0e717cc1e250.png)
![1](https://user-images.githubusercontent.com/39712238/168235988-33eddc59-f447-4b35-b721-b43d183a30b2.png)
![3](https://user-images.githubusercontent.com/39712238/168236006-2f60d92f-7d08-4050-97f8-4eb1b7bfaa74.png)
![4](https://user-images.githubusercontent.com/39712238/168236167-5332c2f7-5bae-482c-9945-c61e3903d95c.png)

## Reflection!

This started as a weekend project to get back in touch with mongo and node after mostly focussing on the client side for the past few years. I really enjoyed getting my hands dirty there again, so have decided to put a bit more time into this and build out some more of the features above.

I want to continue the learning experience so I also plan to do some/all of the following:

- Migrate to Typescript
- API Documentation
- Tests
- Optimise workflow and development experience with Docker
