import { portfolio } from './assets/data/data.js'
import Article  from './modules/templates/Article.js'
import ArticlesContainer  from './modules/templates/ArticlesContainer.js'

const MODE_VARIABLES = {
	dark:  [
		['--primary-important', '#fff'],
		['--primary', '#ddd'],
		['--bkg', '#333'],
		['--bkg-important', '#555']

	],
	light: [
		['--primary-important', '#333'],
		['--primary', '#555'],
		['--bkg', '#fff'],
		['--bkg-important', '#fee']
	]
}


const changeMode = e => {
	const mode = e.target.value === '0' ? 'light' : 'dark'
	console.log(MODE_VARIABLES[mode])
	MODE_VARIABLES[mode].forEach(cssVar => {
		document.documentElement.style.setProperty(...cssVar)
	})
}

document.getElementById('dark-mode-btn').addEventListener('change', e => changeMode(e))


document.getElementById('portfolio-scroll').innerHTML = ArticlesContainer(portfolio)