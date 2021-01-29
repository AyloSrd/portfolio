const SkillTag = ({ skill, researchedSkill }) => {
	const template = `
	<span
		class="skill-tag${ 
			researchedSkill 
			? 'researched-skill'
			: ''
		}"
	>
		${skill}
	</span>
	`
	return template
}

export default SkillTag