export const changeMode = ({e, MODE_VARIABLES}) => {
	const mode = e.target.value === '0' 
		? 'light' 
		: 'dark'
	MODE_VARIABLES[mode].forEach(cssVar => {
		document.documentElement.style.setProperty(...cssVar)
	})

	document.querySelector('link[rel="shortcut icon"]').href = `src/assets/imgs/favicon-${mode}-mode.ico`;
	document.querySelector('link[rel="icon"]').href = `src/assets/imgs/favicon-${mode}-mode.ico`;

}

export const handleOpenModal = Modal => Modal.style.display = 'grid'

export const handleCloseModal = Modal => Modal.style.display = 'none'

export const handleScrollLeft = e => e.target.nextElementSibling.nextElementSibling.scrollLeft -= 200

export const handleScrollRight = e => e.target.nextElementSibling.scrollLeft += 200

export const handleOnInput = (e, skills, cb) => {
	const searchInput = e.target.value
	const foundSkills = { categories: skills.categories }

	skills.categories
		.forEach(category => {
			if (!foundSkills[category.split(' ')[0].toLowerCase()]) foundSkills[category.split(' ')[0].toLowerCase()]
			foundSkills[category.split(' ')[0].toLowerCase()] = skills[category.split(' ')[0].toLowerCase()].filter(skill => skill.includes(searchInput))
		})
	
	cb(foundSkills)
	
}