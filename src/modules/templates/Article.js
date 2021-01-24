const Article = article => {
	const { image, title, shortDescription } = article
	const template = `
<article>
	<div>
		<img src=".src/assets/imgs/${image.url}" alt="${image.alt}">
	</div>
	<div>
		<h3>${title}</h3>
		<p>${shortDescription}</p>
	</div>
</article>
	`
	return template
}

export default Article