import SkillTagsList from './SkillTagsList.js'

const AllSkills = skills => {
	const template = `
${
	skills.categories.map(category => SkillTagsList({title: category, skills: skills[category.split(' ')[0].toLowerCase()]})).join('\n')
}
	`
	return template
}

export default AllSkills