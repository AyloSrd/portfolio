import { 
	portfolio,
	skills
} from './assets/data/data.js'
import { 
	changeMode,
	handleOpenModal, 
	handleCloseModal,
	handleScrollLeft,
	handleScrollRight,
	handleFilterSkills,
	handleOnSearch
} from './modules/helpers/helpers.js'
import AllSkills  from './modules/templates/AllSkills.js'
import ArticlesContainer  from './modules/templates/ArticlesContainer.js'
import SkillTagsList from './modules/templates/SkillTagsList.js'

/* GENERAL VARIABLE */
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

let foundSkills = []

/* PAGE ELEMENTS */
const Modal = document.getElementById('modal')
const PortfolioScroll = document.getElementById('portfolio-scroll')
const AllSkillsZone = document.getElementById('all-skills-zone')
const FoundSkillsZone = document.getElementById('found-skills-zone')
const SearchForm = document.getElementById('search-form')
const SearchInput = document.getElementById('search-input')


/* EVENTS */

Modal.addEventListener('click', () => handleCloseModal(Modal))

PortfolioScroll.innerHTML = ArticlesContainer(portfolio)

AllSkillsZone.innerHTML = AllSkills(skills)

SearchForm.addEventListener('submit', e => {
	e.preventDefault()
})
SearchForm.addEventListener('search', e => handleFilterSkills(e, skills, correspondingSkills => {
	if ( foundSkills.length > 5 ) return
	foundSkills.push(correspondingSkills[0])
	SkillTagsList({ title: null, skills: correspondingSkills})
}))

SearchInput.addEventListener('input', e => handleFilterSkills(e, skills, correspondingSkills => AllSkillsZone.innerHTML = AllSkills(correspondingSkills)))
SearchInput.addEventListener('focus', () => AllSkillsZone.style.display = 'block')
SearchInput.addEventListener('blur', () => AllSkillsZone.style.display = 'none')

document.getElementById('dark-mode-btn').addEventListener('change', e => changeMode({e, MODE_VARIABLES}))//dark-mode

document.querySelectorAll('div.horizontal-scroll-container article').forEach(article => article.addEventListener('click', () => handleOpenModal(Modal)))//click on article to open modal

document.querySelectorAll('button.scroll-left').forEach(btn => btn.addEventListener('click', e => handleScrollLeft(e)))//scroll-left buttons

document.querySelectorAll('button.scroll-right').forEach(btn => btn.addEventListener('click', e => handleScrollRight(e)))//scroll-right buttons


