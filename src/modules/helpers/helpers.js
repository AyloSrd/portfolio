export const changeMode = ({e, MODE_VARIABLES}) => {
	const mode = e.target.value === '0' 
		? 'light' 
		: 'dark'
	
	MODE_VARIABLES[mode].forEach(cssVar => document.documentElement.style.setProperty(...cssVar))
	
	document.querySelector('link[rel="shortcut icon"]').href = `src/assets/imgs/favicon-${mode}-mode.ico`;
	document.querySelector('link[rel="icon"]').href = `src/assets/imgs/favicon-${mode}-mode.ico`;
	
}

export const findModalContentById = (id, data) =>  data[id.split('-')[0]].filter(obj => obj.id === id)[0]

export const handleOpenModal = (ModalContainer, cb) => {
	ModalContainer.style.display = 'grid'
	ModalContainer.innerHTML = cb()
}

export const handleCloseModal = ModalContainer => {
	ModalContainer.style.display = 'none'
	ModalContainer.innerHTML = ''
}

const convertRemToPixels = rem => rem * parseFloat(getComputedStyle(document.documentElement).fontSize);


export const handleScrollLeft = e => e.target.nextElementSibling.nextElementSibling.scrollLeft -= (window.innerWidth - convertRemToPixels(2.5))

export const handleScrollRight = e => e.target.nextElementSibling.scrollLeft += (window.innerWidth - convertRemToPixels(2.5))

export const handleFilterSkills = (e, skills, cb) => {
	const searchInput = e.target.value.toLowerCase()
	const correspondingSkills = { categories: skills.categories }

	skills.categories
		.forEach(category => {
			if (!correspondingSkills[category.split(' ')[0].toLowerCase()]) correspondingSkills[category.split(' ')[0].toLowerCase()]
			correspondingSkills[category.split(' ')[0].toLowerCase()] = skills[category.split(' ')[0].toLowerCase()].filter(skill => skill.includes(searchInput))
		})
	
	return cb(correspondingSkills)
}

export const handleOnSearch = (e, skills, cb) => {
	const provSkillList = handleFilterSkills(e, skills, (r) => r)
	let arrOfSkills= []
	provSkillList.categories
		.forEach(category => arrOfSkills = [...arrOfSkills, ...provSkillList[category.split(' ')[0].toLowerCase()]])
	return cb(arrOfSkills[0])
}

export const filterArticlesBySkills = (foundSkills, articles) => {
	const newArticles = {}
	for(let key in articles) {
		newArticles[key] = articles[key].filter(article => foundSkills.every(skill => article['skills'].includes(skill)))
	}
	return newArticles
}

export const deleteItem = ( arr, item ) => {
	const index = arr.indexOf(item)
	if (index > -1) arr.splice(index, 1)
}

export const toggleAllSkillsZone = (ToggleAllSkillsBtn, AllSkillsZone) => {
	if (ToggleAllSkillsBtn.className === 'up') {
		ToggleAllSkillsBtn.className = 'down'
		AllSkillsZone.style.maxHeight = '0px'
	}else{
		ToggleAllSkillsBtn.className = 'up'
		AllSkillsZone.style.maxHeight = '500px'
	}
	console.log(ToggleAllSkillsBtn.className)
}