import SkillTagsList from './SkillTagsList.js'
import LinkIcon from './LinkIcon.js'

const Modal = obj => {
	const template = `
<div class="modal">
    <div class='modal-header'>
        <div class="modal-header-image-container">
            <img 
                src="./src/assets/imgs/${obj.image.url}" 
                alt="${obj.image.alt}"
                width="50px"
            >
        </div>
        <div calss="modal-header-text">
            <h2 id="modal-header-title">${obj.title}</h2>
            <h3 id="modal-header-subtitle-first">
            ${
                obj.role 
                    ? `${obj.shortDescription} - ${obj.role}`
                    : obj.shortDescription
            }
            </h3>
            <h3 
                id="modal-header-subtitle-second" 
                class="italic"
            >${obj.date} - ${obj.location}</h3>
        </div>
    </div>
    <div class="modal-body">
        ${
            obj.description
                ? `
                <div id="modal-body-description">
                <h3>Description</h3> 
                <p>${obj.description}<p> 
                </div>             
                `
                : ''
        }
        ${
            obj.tasks
                ? `
                <div id="modal-body-tasks">
                    <h3>Tasks</h3>
                    <ul>
                    ${
                        obj.tasks.map(task => `<li>${task}</li>`).join('\n')
                    }
                    </ul>
                </div>
                `
                : ''
        }
        ${
            obj.links
                ? `
                <div id="modal-body-links">
                    <h3>Links</h3>
                    <div class="links-container">
                    ${
                        obj.links.map(link => `
                        <div 
                            class="link-btn"
                            style="cursor: pointer;" 
                            onclick="window.open('${link}')"
                        >
                            ${LinkIcon(link)}
                        </div>`).join('\n')
                    }
                    </div>
                </div>
                `
                : ''
        }
        <div id="modal-body-skills">
        ${
            SkillTagsList({ title:'Skills & Technologies', skills: obj.skills })
        }
        </div>
    </div>
</div>
`
	return template
}

export default Modal