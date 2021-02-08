import SkillTag from './SkillTag.js'

const SkillTagsList = ({ title, skills }) => {
	const template =  `
	${ title
		? `<h3>${ title }</h3>` 
		: ''
	}
	<div class="skill-list">
		${
			skills.map(skill => SkillTag({ skill, researchedSkill: title ? false : true})).join('\n')
		}
	<div>
	`
	return template
}

export default SkillTagsList