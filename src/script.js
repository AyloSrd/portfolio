import { 
	portfolio,
	work,
	education,
	// interests,
	skills
} from './assets/data/data.js'
import { 
	changeMode,
	findModalContentById,
	handleOpenModal, 
	handleCloseModal,
	handleScrollLeft,
	handleScrollRight,
	handleFilterSkills,
	handleOnSearch,
	filterArticlesBySkills,
	deleteItem,
	toggleAllSkillsZone
} from './modules/helpers/helpers.js'
import Modal  from './modules/templates/Modal.js'
import AllSkills  from './modules/templates/AllSkills.js'
import ArticlesContainer  from './modules/templates/ArticlesContainer.js'
import SkillTagsList from './modules/templates/SkillTagsList.js'

/* GLOBAL VARIABLE */
const MODE_VARIABLES = {
	dark:  [
		['--primary-important', '#fff'],
		['--primary', '#ddd'],
		['--bkg', '#333'],
		['--bkg-important', '#555'],
		['--bkg-dark-mode-toggler', '#faa'],
		['--bkg-dark-mode-toggler-shadow', '0 0 10px #e74b4b, 0 0 40px #e74b4b, 0 0 80px #e74b4b']

	],
	light: [
		['--primary-important', '#333'],
		['--primary', '#555'],
		['--bkg', '#fff'],
		['--bkg-important', '#aaa'],
		['--bkg-dark-mode-toggler', '#ddd'],
		['--bkg-dark-mode-toggler-shadow', 'none']
	]
}

let foundSkills = []

/* PAGE ELEMENTS */
const ModalContainer = document.getElementById('modal-container')
const PortfolioScroll = document.getElementById('portfolio-scroll')
const WorkScroll = document.getElementById('work-scroll')
const EducationScroll = document.getElementById('education-scroll')
// const InterestsScroll = document.getElementById('interests-scroll')
const AllSkillsZone = document.getElementById('all-skills-zone')
const FoundSkillsZone = document.getElementById('found-skills-zone')
const ToggleAllSkillsBtn = document.getElementById('toggle-all-skills-btn')
const SearchForm = document.getElementById('search-form')
const SearchInput = document.getElementById('search-input')
const Header = document.querySelector('header')


/* DOM MANIPULATION */

document.getElementById('dark-mode-btn').addEventListener('change', e => changeMode({e, MODE_VARIABLES}))//dark-mode
document.querySelectorAll('button.scroll-left').forEach(btn => btn.addEventListener('click', e => handleScrollLeft(e)))//scroll-left buttons
document.querySelectorAll('button.scroll-right').forEach(btn => btn.addEventListener('click', e => handleScrollRight(e)))//scroll-right buttons

ModalContainer.addEventListener('click', e => e.target.tagName.toLowerCase() === 'section' && handleCloseModal(ModalContainer))
PortfolioScroll.innerHTML = ArticlesContainer(portfolio)
WorkScroll.innerHTML = ArticlesContainer(work)
EducationScroll.innerHTML = ArticlesContainer(education)

ToggleAllSkillsBtn.addEventListener('click', () => toggleAllSkillsZone(ToggleAllSkillsBtn, AllSkillsZone))
AllSkillsZone.innerHTML = AllSkills(skills)

SearchForm.addEventListener('submit', e => {
	e.preventDefault()
})
SearchForm.addEventListener('search', e => handleOnSearch(e, skills, correspondingSkill => {
	if ( foundSkills.length < 3 && !foundSkills.includes(correspondingSkill) ) {
		if (correspondingSkill !== undefined) foundSkills.push(correspondingSkill)
		FoundSkillsZone.innerHTML = SkillTagsList({ title: null, skills: foundSkills})
		const filteredArticles = filterArticlesBySkills(foundSkills, { portfolio, work, education})
		PortfolioScroll.innerHTML = filteredArticles.portfolio ? ArticlesContainer(filteredArticles.portfolio) : ''
		WorkScroll.innerHTML = filteredArticles.work ? ArticlesContainer(filteredArticles.work) : ''
		EducationScroll.innerHTML = filteredArticles.education ? ArticlesContainer(filteredArticles.education) : ''
		SearchInput.value = ''
		SearchInput.dispatchEvent(new Event('input'))
		ToggleAllSkillsBtn.className = 'down'
		AllSkillsZone.style.maxHeight = 0
		Header.scrollIntoView()
	}
}))

SearchInput.addEventListener('input', e => handleFilterSkills(e, skills, correspondingSkills => AllSkillsZone.innerHTML = AllSkills(correspondingSkills)))
SearchInput.addEventListener('focus', () => {
	ToggleAllSkillsBtn.className = 'up'
	AllSkillsZone.style.maxHeight = '500px'
})

AllSkillsZone.addEventListener('click', e => {
	if (e.target.classList.contains('listed-skill') && foundSkills.length < 3 && !foundSkills.includes(e.target.innerHTML.trim())) foundSkills.push(e.target.innerHTML.trim())
	FoundSkillsZone.innerHTML = SkillTagsList({ title: null, skills: foundSkills })
	SearchInput.value = ''
	SearchInput.dispatchEvent(new Event('input'))
	const filteredArticles = filterArticlesBySkills(foundSkills, { portfolio, work, education})
	PortfolioScroll.innerHTML = filteredArticles.portfolio ? ArticlesContainer(filteredArticles.portfolio) : ''
	WorkScroll.innerHTML = filteredArticles.work ? ArticlesContainer(filteredArticles.work) : ''
	EducationScroll.innerHTML = filteredArticles.education ? ArticlesContainer(filteredArticles.education) : ''
	ToggleAllSkillsBtn.className = 'down'
	AllSkillsZone.style.maxHeight = 0
	Header.scrollIntoView()
})

FoundSkillsZone.addEventListener('click', e => {
	if(e.target.tagName.toLowerCase() === 'span') {
		const item = e.target.dataset.skill
		deleteItem(foundSkills, item)
		FoundSkillsZone.innerHTML = SkillTagsList({ title: null, skills: foundSkills})
		SearchInput.value = ''
		SearchInput.dispatchEvent(new Event('input'))
		const filteredArticles = filterArticlesBySkills(foundSkills, { portfolio, work, education})
		PortfolioScroll.innerHTML = filteredArticles.portfolio ? ArticlesContainer(filteredArticles.portfolio) : ''
		WorkScroll.innerHTML = filteredArticles.work ? ArticlesContainer(filteredArticles.work) : ''
		EducationScroll.innerHTML = filteredArticles.education ? ArticlesContainer(filteredArticles.education) : ''
		Header.scrollIntoView()
	}
})

document.querySelectorAll('div.horizontal-scroll-container').forEach(div => {
	div.addEventListener('click', e => {
		// const isArticle = e.target.tagName.toLowerCase() === 'article' 
		// 	|| e.target.parentNode.tagName.toLowerCase() === 'article'
		// 	|| e.target.parentNode.parentNode.tagName.toLowerCase() === 'article'		
		if (e.target.tagName.toLowerCase() === 'h3' || e.target.tagName.toLowerCase() === 'img') {
			let article = e.target.parentNode.parentNode
			// while(article.tagName.toLowerCase() !== 'article')	article = article.parentNode
			const { uniqueId } = article.dataset
			const modelContent = findModalContentById(uniqueId, { portfolio, work, education })
			handleOpenModal(ModalContainer, () => Modal(modelContent))
		}
	})
})