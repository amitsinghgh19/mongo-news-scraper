# mongo-news-scraper
## a news scraper for the tech industry

* Preview `mongo-news-scraper` LIVE on [Heroku](https://calm-lowlands-41536.herokuapp.com/) 
* Please make sure that your browser is not blocking javascript, `Subscribe to our newsletter` might not work if your browser is blocking javascript.

### About

* `mongo-news-scraper` is an app that allows users to scrape articles from [The Verge](https://www.theverge.com/tech/) and save their favorites into a personalized library.

* The `Scrape New Tech Articles` button triggers the app to scrape the internet for new tech articles, rendering them in the browser in a user-friendly fashion. Each article comes with a `Save` button. Users can immediately read a short synopsis on each article or follow a link to read the full article.

* The `Save` button `on-click` will save that particular article to the database.

* Click the `Saved Tech Articles` tab to easily view or navigate between previously saved articles, leave personalized comments, or delete the article and all of its associated content (comments) from the database.

* `Warning(!)`: The red `Clean Library` button in the jumbotron directly below heading `My Library` will permanently erase all of the articles from `My Library` and re-render a blank page without them.

### Technologies Used
  * HTML5
  * CSS3
  * Fontawesome
  * Javascript
  * jQuery
  * Axios
  * ExpressJS (Server)
  * NodeJS (Backend)
  * MongoDB (Database)
  * Mongoose (ORM)
  * [Cheerio](https://www.npmjs.com/package/cheerio) (NPM package for web-scraping)
  * Heroku (Deployment)


### Summary

* `mongo-news-scraper` leverages `mongoose.js` to communicate with a `MongoDB` database hosted in the cloud with `Heroku`. The on-screen buttons trigger the appropriate request via `express` routing to fetch or update a respective articles data -- the response is rendered in the browser using `JavaScript` or `jQuery`.

### Under Construction

* `Subscribe to our newsletter` code is ready, working on to add an email list service api.
* `Users` will login to access to their personalized `Library` of articles.


