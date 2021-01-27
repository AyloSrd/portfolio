export const changeMode = (e, MODE_VARIABLES) => {
	const mode = e.target.value === '0' 
		? 'light' 
		: 'dark'
	MODE_VARIABLES[mode].forEach(cssVar => {
		document.documentElement.style.setProperty(...cssVar)
	})
}

export const handleOpenModal = Modal => Modal.style.display = 'grid'

export const handleCloseModal = Modal => Modal.style.display = 'none'