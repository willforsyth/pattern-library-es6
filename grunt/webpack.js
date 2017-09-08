module.exports = {

	dev: {
	    entry: {
	    	common : './dev/_assets/scripts/common.js',
				pattern : './dev/_assets/scripts/pattern.js',
	    	ie8 : './dev/_assets/scripts/ie8.js'
	    },
	    output: {
	        path: '.tmp/scripts',
	        filename: '[name].js'
	    },
	    module: {
	  		loaders: [
	            {
	            	test: /\.js$/,
	            	loader: "babel-loader",
	            	exclude: /(bower_components)/
	            }
	        ]
	  	},
		  resolve: {
		    extensions: ['', '.js', '.es6']
		  }
	},

	dist: {
	    entry: {
	    	common : './.tmp/scripts/common.js',
				pattern : './dev/_assets/scripts/pattern.js',
	    	ie8 : './.tmp/scripts/ie8.js'
	    },
	    output: {
	        path: 'web/scripts',
	        filename: '[name].js'
	    }

	}
}
