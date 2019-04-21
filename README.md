# Helix Re - QA tool web app
This is a web app that allows a user to visualise images and filter images based on their content.
Made with [create-react-app](https://github.com/facebook/create-react-app), and uses static image data.
Uses [Google Vision AI](https://cloud.google.com/vision/) to get image label annotations, so you will need an API key to authenticate requests.


# Running the app locally
- Clone this repo using `git clone git@github.com:sprazzeus/helix.git` or download zip
- Install project dependencies using `yarn` or `npm i`
- Create a .env file and add your Google Vision API key under the variable `REACT_APP_GOOGLE_VISION_API_KEY`
- Run app in browser "localhost:3000" using `yarn start` or `npm start`
