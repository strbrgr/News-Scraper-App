// To Do
// include Twitter Link and Logo
// make responsive

class News{
  //What to put in here?
  constructor(){
  }
  

  getNewsArticles(category){
    // Checks if there already is content, if so it removes it
    const newsSection = document.getElementById("news")
    while (newsSection.firstChild) {
        newsSection.firstChild.remove()
    } 

    fetch(
      `https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=${category}`,
      {
        method: 'GET',
        headers: {
          'x-api-key': 'NbV-VXpvd17m4kTWIYsJN0ofMU326FM_QJwSCwLiR2I'
        }
      }
    )
    .then(res => res.json()) // parse response as JSON
    .then(data => {
     data.articles.forEach((e,i) => {


      // Create article element for each article
      const article = document.createElement('article')
      article.id = `article${i}`
      document.querySelector('#news').appendChild(article);
       
      
      // Create and populate headings
       const heading = document.createElement('a');
       heading.className = 'heading1-news-title';
       heading.textContent = e.title;
       heading.href = e.link
       document.querySelector(`#article${i}`).appendChild(heading);


       // Create and populate sources
       const source = document.createElement('h2');
       source.className = 'heading2-news-source';
       source.textContent = e.clean_url;
       document.querySelector(`#article${i}`).appendChild(source);


      // Add the divider
      const divider = document.createElement('div');
      divider.className = 'news-divider';
      document.querySelector(`#article${i}`).appendChild(divider);
     })


    })
    .catch(err => {
    console.log(`error ${err}`)
    });

  }
  
}

//Create News
const newHeadlines = new News()


// Buttons
const BUSINESS = document.querySelector('#business')
const BEAUTY = document.querySelector('#beauty')
const ECONOMICS = document.querySelector('#economics')
const ENERGY = document.querySelector('#energy')
const FINANCE = document.querySelector('#finance')
const FOOD = document.querySelector('#food')
const GAMING = document.querySelector('#gaming')
const MUSIC = document.querySelector('#music')
const SCIENCE = document.querySelector('#science')
const SPORT = document.querySelector('#sport')
const TECHNOLOGY = document.querySelector('#technology')
const TRAVEL = document.querySelector('#travel')
const POLITICS = document.querySelector('#politics')
const WORLD = document.querySelector('#world')


// Click-Events
BUSINESS.addEventListener('click', () => newHeadlines.getNewsArticles('business'))
BEAUTY.addEventListener('click', () => newHeadlines.getNewsArticles('beauty'))
ECONOMICS.addEventListener('click', () => newHeadlines.getNewsArticles('economics'))
ENERGY.addEventListener('click', () => newHeadlines.getNewsArticles('energy'))
FINANCE.addEventListener('click', () => newHeadlines.getNewsArticles('finance'))
FOOD.addEventListener('click', () => newHeadlines.getNewsArticles('food'))
GAMING.addEventListener('click', () => newHeadlines.getNewsArticles('gaming'))
MUSIC.addEventListener('click', () => newHeadlines.getNewsArticles('music'))
SCIENCE.addEventListener('click', () => newHeadlines.getNewsArticles('science'))
SPORT.addEventListener('click', () => newHeadlines.getNewsArticles('sport'))
TECHNOLOGY.addEventListener('click', () => newHeadlines.getNewsArticles('tech'))
TRAVEL.addEventListener('click', () => newHeadlines.getNewsArticles('travel'))
POLITICS.addEventListener('click', () => newHeadlines.getNewsArticles('politics'))
WORLD.addEventListener('click', () => newHeadlines.getNewsArticles('world'))