
// svelte.config.js
import preprocess from 'svelte-preprocess';

// const config = {
//   kit: {
//     // ...
//     prerender: {
// 		// ...
// 		handleMissingId: "ignore"
//     }

//   },
//   preprocess: preprocess()
// };

// export default config;


import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			handleMissingId: "ignore"
		}
	}
};


export default config;
