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
        <div id="modal-body-description">
        </div>
        <div id="modal-body-tasks">
        </div>
        <div id="modal-body-skills">
        </div>
    </div>
</div>
`
	return template
}

export default Modal