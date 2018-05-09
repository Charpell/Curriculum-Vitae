# The Curriculum Vitae Project
Host cv on Github [http://charpell.github.io/Curriculum-Vitae](http://charpell.github.io/Curriculum-Vitae)

## Usage
1. Fork this or create a new GitHub repo and copy all the files there.
2. Install project dependencies with `npm install`
3. Start local development server with `npm start`.
4. Update contents of `src` folder to fit your needs. This item is explained [below](#update-contents).
5. Commit your changes.
6. Publish your updated CV on GitHub pages with `npm run gh`.
7. Open `http://your-username.github.io/your-cv-repo`
8. Have a cookie 🍪

### Update contents

The project uses [HandlebarsJS](https://github.com/wycats/handlebars.js/) as a template engine.

The main HTML template could be found in [src/templates/index.html](src/templates/index.html). Metadata for the template could be found in [src/metadata/metadata.js](src/metadata/metadata.js).

Don't forget to update [src/assets/favicon.ico](src/assets/favicon.ico). You can generate a new favicon out of your photo with [icoconvert.com](http://icoconvert.com/).