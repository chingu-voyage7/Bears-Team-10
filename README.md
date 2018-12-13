# Bears-Team-10
Add-project-description-here | Voyage-7 | https://chingu.io/

We have a backend and a frontend with an overarching project to run them concurrently.

During development, we can just run `npm start` from our main project directory to start up both the backend and frontend development servers. When we want to deploy to production we can use `npm run build` to compile the frontend and be served by our backend with its API

### Contribting: 
  1. Clone repo
  2. Install packages: `npm install`
  3. You can run the entire app, or run the individual front or backends:
       - `npm run start`
  4. Always be up to date: `git pull origin master` , or  `git pull origin develop`

  ### Your first pull request
  - Make clear your intention to work on a problem in the issue section by either: 
   1. Making an issue yourself and assigning it to yourself on zenhub
   2. Or comment on existing issue with your intention to fix it and assign it to yourself on zenhub
  - All code should be compliant to the proper es-lint rules laid out in the `eslintrc.js` file
  - Be sure you are using the prettier standards 
  - Use a branch name like fix/short-fix-description or feature/short-feature-description
  - Please keep all push requests concise
  - *Avoid* pushing more than one file at a time (avoid `git add .` unless you are certain it is not adding additional unrelated material)
    - You can add as many individual files as you want `git add ./filename/file.js ./filename/otherfile.js ./another/file/name.js`
    - Be sure to leave commit messages that are concise, but if you need to explain further you can add a second one to populate the body as well
       - `git commit -m "this is my message" -m "this is my body where i can put a whole lot of stuff that wont fit in the initial message"`
  - `git push origin your-iss-branch-name`
  - In the gitgub page, click to make a pull request and wait for it to be approved by the team 
  #### Issues
  - Pick an unassigned issue that you think you can accomplish, add a comment that you are attempting to do it.
  - Feel free to propose issues that aren’t described! Get the okay that it is inline with the project goals before working.
