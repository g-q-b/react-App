const proxy = require('http-proxy-middleware');

		module.exports = function(app) {
		  app.use(
		    proxy("/api", {
		      target: 'http://localhost:3001',
		      changeOrigin: true
		    })
		  );		  
		  app.use(
		    proxy("/mock", {
		      target: 'http://localhost:3333',
		      changeOrigin: true
		    })
		  );
		  app.use(
		    proxy("/v2", {
		      target: "https://api.douban.com",
		      changeOrigin: true
		    })
		  );

		};
