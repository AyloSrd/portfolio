import { 
	portfolio,
	skills
} from './assets/data/data.js'
import { 
	changeMode,
	handleOpenModal, 
	handleCloseModal,
	handleScrollLeft,
	handleScrollRight 
} from './modules/helpers/helpers.js'
import AllSkills  from './modules/templates/AllSkills.js'
import ArticlesContainer  from './modules/templates/ArticlesContainer.js'

/* GENERAL CONSTANTS */
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

/* PAGE ELEMENTS */
const Modal = document.getElementById('modal')
const PortfolioScroll = document.getElementById('portfolio-scroll')
const AllSkillsZone = document.getElementById('all-skills-zone')


/* EVENTS */
Modal.addEventListener('click', () => handleCloseModal(Modal))
PortfolioScroll.innerHTML = ArticlesContainer(portfolio)
AllSkillsZone.innerHTML = AllSkills(skills)
document.getElementById('dark-mode-btn').addEventListener('change', e => changeMode({e, MODE_VARIABLES}))//dark-mode
document.querySelectorAll('div.horizontal-scroll-container article').forEach(article => article.addEventListener('click', () => handleOpenModal(Modal)))//click on article to open modal
document.querySelectorAll('button.scroll-left').forEach(btn => btn.addEventListener('click', e => handleScrollLeft(e)))//scroll-left buttons
document.querySelectorAll('button.scroll-right').forEach(btn => btn.addEventListener('click', e => handleScrollRight(e)))//scroll-right buttons


