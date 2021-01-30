const SkillTag = ({ skill, researchedSkill }) => {
	const template = `
	<span
		class="skill-tag${ 
			researchedSkill 
			? 'researched-skill'
			: 'listed-skill'
		}"
	>
		${skill}
	</span>
	`
	return template
}

export default SkillTag