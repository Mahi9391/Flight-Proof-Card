import pkg from './package.json' with {type:'json'}

export default {
	// import name from package.json
	name: pkg.name,
	triggers: {
		keywords: [
			'flight',
			'flights',
			'fly',
			'airline',
			'airfare',
			'air ticket',
			'plane ticket',
			'travel'
		]
	},
	query_format: {
		regex: [
			'flights?\\s+(?:from\\s+)?([a-zA-Z\\s]+)\\s+to\\s+([a-zA-Z\\s]+)',
			'([a-zA-Z\\s]+)\\s+to\\s+([a-zA-Z\\s]+)\\s+flights?',
			'flights?\\s+to\\s+([a-zA-Z\\s]+)',
			'([a-zA-Z]{3})\\s+to\\s+([a-zA-Z]{3})',
			'flights?'
		]
	},
	server: {
		location: 'dist/backend/index.js',
		configPath: 'dist/backend/wrangler.jsonc',
		schemaPath: 'dist/backend/schema.jsonc'
	},
	client: {
		// location of client side code
		location: pkg.module,
		// name of the UMD module
		moduleName: pkg.umdName || 'HD' + pkg.name,
		// baseURL is only used in local testing and ignored after publish
		baseURL: '/' + pkg.name,
	},
	format: {
		mainline: true,
		sidebar: true
	},
	permissions: {
		
	},
	info: {
		description: 'Search and compare flight prices, durations, and airline options',
		category: 'Travel'
	},
	github: 'https://github.com/hyperdart/flight-proofcode',
	demovideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
}
