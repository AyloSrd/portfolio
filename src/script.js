import { portfolio } from './assets/data/data.js'
import Article  from './modules/templates/Article.js'
import ArticlesContainer  from './modules/templates/ArticlesContainer.js'

document.getElementById('portfolio-scroll').innerHTML = ArticlesContainer(portfolio)