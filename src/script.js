import { portfolio } from './assets/data/data.js'
import ArticlesContainer  from './modules/templates/ArticlesContainer.js'

const MODE_VARIABLES = {
	dark:  [
		['--primary-important', '#fff'],
		['--primary', '#ddd'],
		['--bkg', '#333'],
		['--bkg-important', '#555'],
		['--bkg-dark-mode-toggler', '#a74949']

	],
	light: [
		['--primary-important', '#333'],
		['--primary', '#555'],
		['--bkg', '#fff'],
		['--bkg-important', '#fee'],
		['--bkg-dark-mode-toggler', '#fee']
	]
}

const Modal = document.getElementById('modal')

const changeMode = e => {
	const mode = e.target.value === '0' 
		? 'light' 
		: 'dark'
	MODE_VARIABLES[mode].forEach(cssVar => {
		document.documentElement.style.setProperty(...cssVar)
	})
}

const handleOpenModal = () => Modal.style.display = 'grid'

const handleCloseModal = () => Modal.style.display = 'none'

Modal.addEventListener('click', handleCloseModal)

document.getElementById('dark-mode-btn').addEventListener('change', e => changeMode(e))

document.getElementById('portfolio-scroll').innerHTML = ArticlesContainer(portfolio)

document.querySelectorAll('div.horizontal-scroll-container article').forEach(article => article.addEventListener('click', handleOpenModal))
