const Modal = () => {
	const template = `
<div class="modal">
    <div class='modal-header'>
        <div class="modal-header-image-container">
            <img src="" alt="">
        </div>
        <div calss="modal-header-text">
            <h2 id="modal-header-title">Title</h2>
            <h3 id="modal-header-subtitle-first">Subtitle</h3>
            <h3 
                id="modal-header-subtitle-second" 
                class="italic"
            >Subtitle Italic</h3>
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