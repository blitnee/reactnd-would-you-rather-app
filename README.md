# Would You Rather App :bar_chart:

This application allows a user to login/out, vote on existing poll questions, create new polls, change their poll vote, and view their status on the leaderboard compared to other users. This project emphasizes key features of React and Redux. The application has been broken down into distinct components:
* `App` - Holds `Nav` and active main content
* `Dashboard` - Holds the QuestionList Component
* `LeaderBoard` - Holds the `LeaderCard`s in the appropriate order
* `LeaderCard` - Displays a user's leader status
* `Nav` - Displays navigation links and user login/logout trigger
* `NewQuestion` - Displays a new poll question form
* `NotFound` - Displays a 404 page with a link back to the app
* `Question` - Displays a poll's details including the options, the user's vote, and the overall votes for each option
* `QuestionPrev` - Displays a the two options for a poll and the user's vote
* `QuestionList` - Displays the tab feature that toggles the answered and unanswered question lists
* `SignIn` - Displays the signin form

## Instructions

1. Download a copy of the project locally or clone the repository:

    `git@github.com:blitnee/would-you-rather-app.git`

2. Install dependencies and run:

    `npm install`

    `npm start`

    if you are using yarn

    `yarn install`

    `yarn start`

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks in the project [`README`](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## License
This project is licensed under the MIT [License](https://github.com/computationalcore/myreads/blob/master/LICENSE) - see the LICENSE file for details.