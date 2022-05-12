# 👷 BuildIt 🛠️

## Motivation

Ever googled `Side project ideas`, `beginner app ideas` or some other version of those? Yeah, me to...

In fact this project come about because yet again I could not think of a project idea to build.

Well no more! **BuildIt** is here.

## Built With

**BuildIt** has a React frontend, styled with [Chakra UI](https://chakra-ui.com/) and uses [Redux Toolkit](https://redux-toolkit.js.org/tutorials/overview) for managing all state and bits and pieces on the client.

The API was built in _nodejs_ well _express_ to be specific and my database of choice is [MongoDB](https://www.mongodb.com/).

## Project Status

This is still very much a WIP and still in active development. Right now it has very limited feature, but, ship early and often they say!

Unauthenticated users can simply few all project ideas on the home page. At the moment each project is made up like so:

```
Title (required)
Description (required)
User stories (optional but most have)
Examples (ditto)
```

Authenticated users can hit the `/my-projects` route and then have the ability to add project ideas. Once added the route will show any projects you have created and offer the option to delete.

## What's Coming?

Lots! I have a bunch of ideas and am all ears for anything else users want to see. Here is some features I have in mind:

- Authenticated users should be able to edit their projects
- Any user should be able to upvote a project
- Each project should have a difficulty rating
- Sorting of projects by _date added_, _upvotes_
- Filtering of projects by _difficulty_

## Screenshots
![Screenshot 2022-05-13 at 00 12 25](https://user-images.githubusercontent.com/39712238/168184258-6fa2ffc9-9622-46e3-ad26-087725d72c90.png)
![Screenshot 2022-05-13 at 00 12 11](https://user-images.githubusercontent.com/39712238/168184272-1555135b-c33d-45aa-b977-9dc075fdafe5.png)
![Screenshot 2022-05-13 at 00 12 39](https://user-images.githubusercontent.com/39712238/168184278-9d2b5f72-bd82-44d9-bea6-98b8888f9de5.png)
![Screenshot 2022-05-13 at 00 12 50](https://user-images.githubusercontent.com/39712238/168184283-d06ac101-718a-4ea7-9efe-1dbdac948605.png)

## Reflection

This started as a weekend project to get back in touch with mongo and node after mostly focussing on the client side for the past few years. I really enjoyed getting my hands dirty there again, so have decided to put a bit more time into this and build out some more of the features above.

I want to continue the learning experience so I also plan to do some/all of the following:

- Migrate to Typescript
- API Documentation
- Tests
- Optimise workflow and development experience with Docker
