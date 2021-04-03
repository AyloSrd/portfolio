export const skills = {
	categories: ['Computer Skills', 'Business Skills', 'Soft Skills'],
	computer: ['aws', 'chrome-extensions', 'chrome-store', 'codemirror', 'css', 'deno', 'docker', 'express.js', 'face-api.js', 'git', 'github', 'heroku', 'html', 'javascript', 'mongoDB', 'node.js', 'nodemailer', 'noSQL', 'peerjs', 'progressive-web-apps', 'puppeteer', 'pwa', 'react', 'redux', 'socket.io', 'svelte', 'tensorflow.js', 'vanilla', 'vercel', 'webRTC'],
	business: ['business-acumen', 'seo', 'sales', 'marketing', 'contract-management', 'criminal-law', 'international-law', 'private-law', 'Google Ads', 'Google Analytics'],
	soft: ['teamworking', 'negotiation', 'storytelling', 'sleight-of-hand', 'stubborness', 'creativity', 'stress management', 'adaptability', 'problem-solving']
}

export const portfolio = [
	{
		"title": "this",
		"id": "portfolio-0.05288982192490144-this",
		"image": {
		  "url": "this.jpg",
		  "alt": "portfolio logo"
		},
		"date": "2021",
		"links": ['https://github.com/AyloSrd/portfolio', 'https://github.com/AyloSrd/portfolio'],
		"skills": ["creativity", "javascript", "vanilla", "github", "git", "css", "html"],
		"location": "Lyon, France & Alghero, Italy",
		"shortDescription": "The amazing portfolio web-app your are currently interacting with.",
		"role": null,
		"description": "Portfolio/resume website written in vanilla js and html/css.<br>The code was written with users' experience in mind; in particular, it allows users to go directly to the project/experience that matches the subset of skills they are looking for.<br>I tried to give a 'reactish' feeling by creating template components (similar to one of my other projects, the game '<a href='https://aylosrd.github.io/scopa/'>Scopa</a>)'. The events are delegated to the script.js."
	},
	{
		"title": "Tinderize-offline",
		"id": "portfolio-0.03727733622755158-tinderize",
		"image": {
		  "url": "tinderize.jpg",
		  "alt": "tinderize logo"
		},
		"date": "2021",
		"links": ['https://tinderize-offline.vercel.app/', 'https://github.com/AyloSrd/tinderize-offline'],
		"skills": ["face-api.js", "tensorflow.js", "svelte", "progressive-web-apps", "pwa", "vercel", "git", "github", "javascript"],
		"location": "Lyon, France & Alghero, Italy",
		"shortDescription": "A.I.-powered face-blurrer.",
		"role": null,
		"description": "The only acceptable pictures of you for Tinder include your way better-looking friends?<br>Worry no more : Tinderize uses the latest image recognition technologies to recognize and blur their faces.<br>Runs on Svelte and face-api.js, which uses tensorflow.js under the hood. The reason why the A.I. stuff happens in the front is that <s>I am planning to turn it in PWA working offline</s> it is a PWA working offline (hence its name)."
	},
	{
		"title": "Alexa Rank API Simplifier",
		"id": "portfolio-0.643238350258925-alexa-rank",
		"image": {
		  "url": "alexa-rank-api.jpg",
		  "alt": "alexa-rank api logo"
		},
		"date": "2021",
		"links": ["https://alexa-api-simplifier.herokuapp.com/", "https://github.com/AyloSrd/alexaApiSimplifier"],
		"skills": ["express.js", "node.js", "heroku", "git", "github"],
		"location": "Paris, France",
		"shortDescription": "API to enable GET requests to AWIS-Alexa-rank from Salesforce Mulesoft API.",
		"role": null,
		"description": "It's no easy thing to send get requests to AWIS-Alexa-rank from Salesforce, since you are supposed to include your token in the GET-request's header.<br>Alexa Rank API Simplifier acts as a middleware, extracting the info from the get request, re-formating it including an header, and parse the xml response sending only the ranking back to your Salesforce component.<br>This project is an MVP for a client in the e-commerce sector."
	},
	{
		"title": "Cöde",
		"id": "portfolio-0.5555406462258696-Cöde",
		"image": {
		  "url": "cooode.jpg",
		  "alt": "cöde logo"
		},
		"date": "2020",
		"links": ["https://cooode.herokuapp.com/", "https://github.com/AyloSrd/clientzumba", "https://github.com/AyloSrd/serverzumba"],
		"skills": ["react", "css", "html", "express.js", "creativity", "github", "heroku", "git", "javascript", "socket.io", "mongoDB", "noSQL", "webRTC", "codemirror"],
		"location": "Paris, France",
		"shortDescription": "Interactive coding lessons platform",
		"role": null,
		"description": "Cöde, is a learning platform that provides a connected integrated development environment for teachers and students for live coding lessons. Additionally, it can be used to stream coding sessions.<br>Each lesson is assigned to a specific socket.io room and has, therefore, its own chat. The text editors and browsers in each room are connected & synchronized. Students can pause at any time the code stream from the teacher and play and experiment with it at their own pace and convenience. Specific parts of the lessons can be saved at any time.<br>WebRTC technology allows the classroom to communicate via video.<br>The front-end part of Cöde is built with the following technologies: create-react-app, axios, codemirror, react-codemirror2 peerjs, react-router, socket.io-client"
	},
	{
		"title": "NASA Mission Control",
		"id": "portfolio-0.23573363901619038-NASA",
		"image": {
		  "url": "spacex.jpg",
		  "alt": "SpaceX rocket"
		},
		"date": "2020",
		"links": ['https://github.com/AyloSrd/NASA-Project'],
		"skills": ["deno", "typescript", "html", "css", "javascript", "aws", "docker"],
		"location": "Paris, France & Singapore",
		"shortDescription": "Deno/Typescript full-stack project",
		"role": null,
		"description": "Code-along exercise, based on <a href='https://www.udemy.com/course/deno-the-complete-guide-zero-to-mastery/'>ZTM Deno course</a>.<br>It uses Deno, the new JavaScript back-end framework, TypeScritp, adn follows Deno's best practices.<br>Runs in a docker container on AWS.<br>This is not an official site and is not affiliated with NASA or SpaceX in any way. For educational purposes only."
	},
	{
		"title": "redux-starwars",
		"id": "portfolio-0.7701651095791733-redux starwars",
		"image": {
		  "url": "starwars.jpg",
		  "alt": "grogu"
		},
		"date": "2020",
		"links": ['https://github.com/AyloSrd/redux-starwars'],
		"skills": ["html", "css", "javascript", "react", "redux"],
		"location": "Paris, France",
		"shortDescription": "Redux-based app that sorts Star Wars episodes.",
		"role": null,
		"description": "Having trouble with ordering the Star Wars first and second trilogy by date of release or episode number? redux-starwrs does it for you!<br>Small app to test redux, makes use of redux-thunk to deal with API calls (fetch)."
	},		
	{
		"title": "neofinance-c",
		"id": "portfolio-0.5098299148641952-neofinance",
		"image": {
		  "url": "neofinance-c.jpg",
		  "alt": "neofinance-c"
		},
		"date": "2020",
		"links": ["https://github.com/AyloSrd/neofinance-c"],
		"skills": ["node", "nodemailer", "puppeteer", "business-acumen", "javascript"],
		"location": "Paris, France",
		"shortDescription": "Script automating financial opportunities research.",
		"role": null,
		"description": "Automating search for financial opportunities on a p2p lending platform, with email notification.<br>The bot checks every 5 minutes the investments page and identifies new investment opportunities, based on fixed creteria, before the lending reqeuest is fullfilled. The user, Mr. C., is notified via email any time a new opportunity arises, with a 5 minutes max delay."
	},
	{
		"title": "Scopa!",
		"id": "portfolio-0.3267961201595331-scopa!",
		"image": {
		  "url": "scopa.jpg",
		  "alt": "scopa"
		},
		"date": "2020",
		"links": ["https://aylosrd.github.io/scopa/", "https://github.com/AyloSrd/scopa"],
		"skills": ["html", "css",  "git", "github", "javascript", "vanilla"],
		"location": "Paris, France",
		"shortDescription": "Very cool hyper-casual game",
		"role": null,
		"description": "Mental calculation training. Hyper-casual game based on Italian card game 'Scopa'.<br>The user has 10 seconds to chose the number/s that sum up to the requested amount.<br>Built with vanilla js in a 'reactish' way, it will in the near future become a PWA."
	},
	{
		"title": "È - maiuscola, accentata",
		"id": "portfolio-0.3576908747001428-È - maiuscola",
		"image": {
		  "url": "è-accentata-maiuscola.jpg",
		  "alt": "È accentata maiuscola"
		},
		"date": "2020",
		"links": ["https://chrome.google.com/webstore/detail/%C3%A8-maiuscola-accentata/bmegikflmmkgpgfjnmelombinkcjcpgi?hl=it&authuser=1"],
		"skills": ["chrome-store", "javascript", "chrome-extensions", "business-acumen", "seo"],
		"location": "Paris, France & Singapore",
		"shortDescription": "Extension to simplify the life of Italian QWERTY keyboards users",
		"role": null,
		"description": "We Italians have been blessed with many gifts: world-best cuisine, the Renaissance, a charming voice and the ability to speak with our hands. What we haven't blessed with however, is a QWERTY keyboard that allows us to type an 'È', Capital E with grave accent.In Italian, it is very usual to start a sentence with an 'È' (is), and we often resort to E', which is a grammatical horror.<br>This Chrome Extension simply copies the aforementioned character in the clipboard, by clicking on it.<br>It currently ranks on Google's first page for keywords such us 'è maiuscola' or 'è maiuscola accentata', and has more than 1000 users.<br>It is pure vanilla js, and I am planning to pass from a Manifest V2 to a V3 soon."
	}
]

export const work = [
	{
		"title": "Aÿlo Srd",
		"id": "work-0.9524332065933723-aylo",
		"image": {
		  "url": "aylo.jpg",
		  "alt": "Aÿlo Srd"
		},
		"date": "2020",
		"links": ['https://aylosrd.github.io/portfolio/', 'https://github.com/AyloSrd?tab=repositories'],
		"skills": ['aws', 'chrome-extensions', 'chrome-store', 'codemirror', 'css', 'deno', 'docker', 'express.js', 'face-api.js', 'git', 'github', 'heroku', 'html', 'javascript', 'mongoDB', 'node.js', 'nodemailer', 'noSQL', 'peerjs', 'puppeteer', 'react', 'redux', 'socket.io', 'svelte', 'tensorflow.js', 'vanilla', 'vercel', 'webRTC', 'business-acumen', 'seo', 'stubborness', 'creativity', 'stress management', 'adaptability', 'problem-solving'],
		"location": "Paris, France",
		"shortDescription": "Open-source, personal and professional web-projects",
		"role": "Freelance Full-stack Developer",
		"tasks": [
			"Envisioned, designed, coded and deployed several full-stack, back-end and front-end projects for personal use or professional clients. Most of the projects are open-source.",
		  	"Explored the most recent technologies, libraries and frameworks, such as Svelte and Deno."
		]
	},
	{
		"title": "Predictice",
		"id": "work-0.9619077781293668-Predictice",
		"image": {
		  "url": "predictice.jpg",
		  "alt": "predictice"
		},
		"date": "2020",
		"links": ['https://predictice.com/'],
		"skills": ['sales','puppeteer', 'negotiation', 'stubborness', 'stress management', 'adaptability', 'problem-solving'],
		"location": "Paris, France",
		"shortDescription": "LegalTech/Predictive Justice/AI/Saas start-up",
		"role": "Salesperson",
		"tasks": [
			"Managed the entire sales process end-to-end within Paris’ XVI Arrondissement",
		  	"Scraped Legal500 website to get top tier law firms info and ranked by region and specialisation"
		]
	},
	{
	  "title": "H3 Dynamics",
	  "id": "work-0.26374097941255537-H3 Dynamics",
	  "image": {
		"url": "h3d.jpg",
		"alt": "h3d"
	  },
	  "date": "2017 to 2020",
	  "links": ["https://www.h3dynamics.com/", "https://www.hes.sg/", "https://www.h3zoom.ai/"],
	  "skills": ["sales", 'negotiation', 'stubborness', 'stress management', 'adaptability', 'problem-solving', 'storytelling', 'sleight-of-hand', 'contract-management'],
	  "location": "Paris, France & Singapore",
	  "shortDescription": " Drones, Artificial Intelligence and Cleantech",
	  "role": "Sales Executive & Marketing Lead",
	  "tasks": [
		"Covered several roles for the subsidiaries H3Zoom.AI (Artificial Intelligence for anomalies detection on infrastructures) and HES Energy Systems (Hydrogen Fuel Cells).",
		"Initiated successful cold email campaign (25% conversion rate), obtaining a meeting with each and every one of the targeted companies (French top tier construction companies).",
		"Negotiated terms for the co-development of an Artificial Intelligence detecting anomalies on road infrastructures.",
		"Explored, analysed and assessed several markets and industries at a European and Global scale, to prepare the launch of new drone/AI-based services.",
		"Collaborated with the oversea sales team in generating profitable leads (through tradeshows, networking events, emails) for a cloud based facade inspection service that leverages A.I. and drone technology.",
		"Refined pitch decks and oral presentations to be used at meetings and business fairs.",
		"Generated relevant income by selling hydrogen fuel cell systems for UAVs.",
		"Built long-term relations with partners from the largest European Energy and Aerospace companies.",
		"Co-organized the launch of a hydrogen-electric plane at several European main events (EmTech, Journées de l’Hydrogène).",
		"Solved customers’ problems by phone or in person, under stressful conditions.",
		"Designed web application web application for automating the selling process of fuel cells systems",
		"Maintained and built CRM records , reports, and opportunities (on Pipedrive) to increase sales optimization.",
		"Remodelled HES corporate style guide and designed new product brochures."
	  ]
	},
	{
	  "title": "B&B Villa Rosa",
	  "id": "work-0.970450827304862-B&B Villa Rosa",
	  "image": {
		"url": "b&bvillarosa.JPG",
		"alt": "b&bvillarosa"
	  },
	  "date": "2010 to present",
	  "links": ['https://www.airbnb.it/rooms/2992833'],
	  "skills": ['business-acumen', 'marketing', 'teamworking', 'storytelling'],
	  "location": "Alghero, Italy",
	  "shortDescription": "Typical Sardinian Cottage",
	  "role": "Co-owner & Manager(Seasonal)",
	  "tasks": [
		"Achieved 169% turnover growth over the last 5 years, despite negative market trends.",
		"Obtained 86% of 5-stars reviews on Airbnb, and Superhost badge for 8 consecutive quarters."
	  ]
	},
	{
	  "title": "Stefano Carboni Law Firm",
	  "id": "work-0.46033034389910243-Stefano Carboni Law Firm",
	  "image": {
		"url": "avvcarboni.JPG",
		"alt": "avvcarboni"
	  },
	  "date": "2016",
	  "skills": ['contract-management', 'criminal-law', 'private-law'],
	  "location": "Alghero, Italy",
	  "shortDescription": "Criminal Law and Civil Law",
	  "role": "Trainee Lawyer",
	  "tasks": [
		"Drafted contracts, legal briefs and opinions, and took part in the development of legal strategies for important criminal and commercial cases."
	  ]
	},
	{
	  "title": "ASKE Avocats Conseils",
	  "id": "work-0.23553856554512076-ASKE Avocats Conseils",
	  "image": {
		"url": "aske.jpg",
		"alt": "aske"
	  },
	  "date": "2015",
	  "links": ['http://aske-avocats.fr/'],
	  "skills": ['contract-management', 'criminal-law', 'international-law', 'private-law'],
	  "location": "Nantes, France",
	  "shortDescription": "International Business Law",
	  "role": "Paralegal",
	  "tasks": [
		"Conducted legal researches preparing for national and cross border disputes and employment litigations.",
		"Assisted dual qualified solicitor/avocat (UK/Fr) in supporting foreign companies operating in France"
	  ]
	}
  ]

export const education = [
	{
	  "title": "EMLYON Business School",
	  "id": "education-0.9074130134886937-EMLYON Business School",
	  "image": {
		"url": "emlyon.jpg",
		"alt": "emlyon"
	  },
	  "date": "2016",
	  "links": ["www.em-lyon.com"],
	  "skills": ['sales', 'marketing','sales', 'marketing','teamworking', 'creativity', 'adaptability', 'problem-solving'],
	  "location": "Lyon, France",
	  "shortDescription": "Specialised Master in International Business Strategy for Lawyers.",
	  "tasks": [
		"Economic Intelligence, Marketing B2B, International Business Strategy, M&A, Finance, Accountability, Negotiation Techniques, Start-ups’ Legal Consulting, Contract Engineering."
	  ]
	},
	{
	  "title": "East China Normal University – 华东师范大学",
	  "id": "education-0.8372885100124878-East China Normal University – 华东师范大学",
	  "image": {
		"url": "ecnu.jpg",
		"alt": "ecnu"
	  },
	  "date": "2017",
	  "links": ["http://english.ecnu.edu.cn/"],
	  "skills": ['marketing', 'teamworking', 'negotiation', 'stress management', 'adaptability', 'problem-solving'],
	  "location": "Shanghai, China",
	  "shortDescription": "Campus Abroad «Doing Business in China».",
	  "tasks": [
		"Social Media Marketing in China, Retail and Services Management in China, Asian Business Environment, Chinese Consumer Behaviour, Chinese Language."
	  ]
	},
	{
	  "title": "University of Sassari – Faculty of Law",
	  "id": "education-0.19035757271907383-University of Sassari – Faculty of Law",
	  "image": {
		"url": "sassari.jpg",
		"alt": "sassari"
	  },
	  "date": "2010 to 2015",
	  "links": ["https://www.uniss.it/"],
	  "skills": ['criminal-law', 'international-law', 'private-law'],
	  "location": "Sassari, Italy",
	  "shortDescription": "Law Master Degree – 110/110 cum laude.",
	  "tasks": [
		"International Law, Business Law, Criminal Law, Corporate Law, Contract Law",
		"Master Thesis: The Crimean Crisis at the light of International Law."
	  ]
	},
	{
	  "title": "University of Poitiers - Faculty of Law and Social Science",
	  "id": "education-0.38882941259712034-University of Poitiers - Faculty of Law and Social Science",
	  "image": {
		"url": "poitiers.jpg",
		"alt": "poitiers"
	  },
	  "date": "2012",
	  "links": ['https://www.univ-poitiers.fr/'],
	  "skills": ["international-law", 'private-law'],
	  "location": "Poitiers, France",
	  "shortDescription": "Erasmus Year Abroad.",
	  "tasks": [
		"Labour Law, European Law, French Business Law"
	  ]
	},
	{
	  "title": "E. Fermi High School for Science",
	  "id": "education-0.384709619592122-E. Fermi High School for Science",
	  "image": {
		"url": "liceo.jpg",
		"alt": "liceo"
	  },
	  "date": "2005 to 2010",
	  "links": ["https://www.liceoalghero.edu.it/"],
	  "skills": ['teamworking', 'creativity', 'problem-solving'],
	  "location": "Alghero, Italy",
	  "shortDescription": "Graduation score: 100/100 – Class representative",
	  "tasks": [
		  "Class representative for 2 years",
		  "High School's Olympics of Mathematics Team Captain",
		  "High School's Athletics Team"
		]
	}
  ]

/*export const interests = [
	{
		"title": "Sleight of hand",
		"id": "interests-0.38882941259712034-sleight of hand",
		"image": {
		  "url": "magic.jpg",
		  "alt": "magic"
		},
		"skills": ["test"],
		"shortDescription": "Close-up magic, cardistry, coin magic.",
	  },
	  {
		"title": "Tarantino Movie",
		"id": "interests-0.38882941259712034-sleight of hand",
		"image": {
		  "url": "uma.jpg",
		  "alt": "Uma Thurman"
		},
		"skills": ["test"],
		"shortDescription": "My favorite film is KIll Bill.",
	  },
	  {
		"title": "Science Fiction",
		"id": "interests-0.38882941259712034-sleight of hand",
		"image": {
		  "url": "uma.jpg",
		  "alt": "Uma Thurman"
		},
		"skills": ["test"],
		"shortDescription": "Mainly Asimov. < href='https://templatetraining.princeton.edu/sites/training/files/the_last_question_-_issac_asimov.pdf'>Read this onew/a>",
	  },
]*/

/* GET EDUCATION FROM WEBSITE

const edu = Array.from(document.querySelectorAll('#\\33  > div.containerTimeline div.containerLavoro div.titolettoLavoro')).map(ed => {
	const edObj = {}
	edObj.title = ed.querySelector('div.datoreDescrizioneTitolo h3').innerText
	edObj.id = `education-${Math.random()}-${edObj.title}`
	edObj.image = {}
	edObj.image.url = `${edObj.title.split(' ')[0].toLowerCase()}.jpg`
	edObj.image.alt = `${edObj.title.split(' ')[0].toLowerCase()}`
	edObj.date = '2010'
	edObj.links = []
	edObj.skills = []
	edObj.location = ed.querySelector('div.datoreDescrizioneTitolo > p:nth-child(2)')
		.innerText
	edObj.shortDescription = ed.querySelector('div.datoreDescrizioneTitolo > p:nth-child(3)')
		.innerText
	return edObj
})

Array.from(document.querySelectorAll('#\\33  > div.containerTimeline div.containerLavoro div.mansioni'))
	.forEach((ed, i) => edu[i].tasks = Array.from(ed.querySelectorAll('li')).map(li => li.innerText))

console.log(JSON.stringify(edu)) 

GET JOBS FROM WEBSITE 

const jobs = Array.from(document.querySelectorAll('#\\32  > div.containerTimeline div.containerLavoro'))

const workExperience = jobs.map(job => {
    const jobObj = {}
	jobObj.title = job.querySelector('div.datoreDescrizioneTitolo h3').innerText
	jobObj.id = `work-${Math.random()}-${jobObj.title}`
	jobObj.image = {}
	jobObj.image.url = `${jobObj.title.split(' ')[0].toLowerCase()}.jpg`
	jobObj.image.alt = `${jobObj.title.split(' ')[0].toLowerCase()}`
	jobObj.date = '2010'
	jobObj.links = []
	jobObj.skills = []
	jobObj.location = job.querySelector('div.datoreDescrizioneTitolo > p:nth-child(2)')
		.innerText
		.split(' -')[0]
	jobObj.shortDescription = job.querySelector('div.datoreDescrizioneTitolo > p:nth-child(2)')
		.innerText
		.split(' -')[1]
	jobObj.role = job.querySelector('div.datoreDescrizioneTitolo > p:nth-child(3)')
		.innerText
	jobObj.tasks = Array.from(job.querySelectorAll('li')).map(li => li.innerText)
	return jobObj
})

console.log(JSON.stringify(workExperience))

*/