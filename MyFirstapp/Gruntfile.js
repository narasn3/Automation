module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
		
   watch: {
      css: {
    files: '**/*.scss',
	tasks: ['sass','cssmin']
		},
		scripts:{
		files : '**/*.js',
		tasks:['concat','uglify']
		}
    },
	
	// CSS Compile and Minification
		sass: {
	 		dist: {
				files: {
					'css/app.css':'sass/app.scss'
				}
			}
		},
		cssmin:{
			target:{
				files:{
					'final.min.css' : ['css/app.css']
					}
				}
		},
		// JS concat and minification
		concat:{
			options:{
				separator:';'
		},
		dist:{
			src:['js/*.js'],
			dest:'jsmin/partials.js'
			}
		},
		uglify:{
				options:{
					compress:true,
						expand: true,    
						flatten: true,
						mangle:true
							//beautify: true
							},
						files:{
						 src:'jsmin/partials.js',
						 dest:'final.min.js' 
				}
		}
	/* 	compress:{
		target:{
			options:{
					mode:'zip'
					},
					files:{
					'final.gz.js' :'final.min.js' 
					}
		}
		} */
  });

	  grunt.loadNpmTasks('grunt-contrib-uglify');
	  grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	//grunt.loadNpmTasks('grunt-contrib-compress');
  // Default task(s).
  grunt.registerTask('default', ['watch','sass','cssmin','concat','uglify']);

};