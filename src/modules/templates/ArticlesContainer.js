import Article from './Article.js'

const ArticlesContainer = articles => {
	const template = articles.map(article => Article(article)).join('\n')
	return template

}

export default ArticlesContainer
