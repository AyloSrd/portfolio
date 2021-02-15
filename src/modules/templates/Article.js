const Article = article => {
	const { image, id, title, shortDescription } = article
	const template = `
<article data-unique-id="${id}">
	<div class="img-container">
		<img src="./src/assets/imgs/${image.url}" alt="${image.alt}">
	</div>
	<div class="txt-container">
		<h3 class="underlined">${title}</h3>
		<p>${	
				article.role 
				? article.role
				: shortDescription
		}</p>
	</div>
</article>
	`
	return template
}

export default Article