import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	}
};

export default config;
// import adapter from '@sveltejs/adapter-static';
// export default {
// 	kit: {
// 	  adapter: adapter({
// 		// default options are shown. On some platforms
// 		// these options are set automatically — see below
// 		pages: 'build',
// 		assets: 'build',
// 		fallback: null,
// 		precompress: false,
// 		strict: true
// 	  })
// 	}
//   };