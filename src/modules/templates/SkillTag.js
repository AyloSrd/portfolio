const SkillTag = ({ skill, researchedSkill }) => {
	const template = `
	<span
		data-skill="${skill}"
		class="skill-tag${ 
			researchedSkill 
			? ' researched-skill'
			: ' listed-skill'
		}"
	>
		${skill}
		${ researchedSkill 
			? `<span data-skill="${skill}" class="remove-researched-skill">x</span>`
			: ''
		}
	</span>
	`
	return template
}

export default SkillTag