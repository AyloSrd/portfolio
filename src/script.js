import { portfolio } from './assets/data/data.js'
import { 
	changeMode,
	handleOpenModal, 
	handleCloseModal 
} from './modules/helpers/helpers.js'
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

Modal.addEventListener('click', () => handleCloseModal(Modal))

document.getElementById('dark-mode-btn').addEventListener('change', e => changeMode(e, MODE_VARIABLES))

document.getElementById('portfolio-scroll').innerHTML = ArticlesContainer(portfolio)

document.querySelectorAll('div.horizontal-scroll-container article').forEach(article => article.addEventListener('click', () => handleOpenModal(Modal)))
