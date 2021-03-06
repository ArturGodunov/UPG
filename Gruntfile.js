module.exports = function(grunt) {
	grunt.initConfig({
		jade: {
			dist: {
				options: {
					pretty: true,
					data: {
						debug: false
					}
				},
				files: {
					'dist/index.html': 'src/jade/index.jade',
                    'dist/index1.html': 'src/jade/index1.jade',
                    'dist/index2.html': 'src/jade/index2.jade',
					'dist/index3.html': 'src/jade/index3.jade',
					'dist/index4.html': 'src/jade/index4.jade',
					'dist/index5.html': 'src/jade/index5.jade',
					'dist/index6.html': 'src/jade/index6.jade',
					'dist/index7.html': 'src/jade/index7.jade',
					'dist/index8.html': 'src/jade/index8.jade',
					'dist/index9.html': 'src/jade/index9.jade',
					'dist/index10.html': 'src/jade/index10.jade',
					'dist/index11.html': 'src/jade/index11.jade',
					'dist/popup1.html': 'src/jade/includes/blocks/popup1.jade',
					'dist/popup2.html': 'src/jade/includes/blocks/popup2.jade',
					'dist/popup3.html': 'src/jade/includes/blocks/popup3.jade'
				}
			}
		},

		sass: {
			dist: {
				options: {
					style: 'expanded',
					sourcemap: 'none'
				},
				files: {
					'dist/styles/styles.css': 'src/sass/layout.scss'
				}
			}
		},

		watch: {
			options: {
				livereload: true
			},
			html: {
				files: [
                    'src/jade/*.jade',
                    'src/jade/includes/*.jade',
                    'src/jade/includes/blocks/*.jade'
                ],
				tasks: ['jade:dist'],
				options: {
					spawn: false
				}
			},
			css: {
				files: [
                    'src/sass/*.scss',
                    'src/sass/includes/*.scss',
                    'src/sass/includes/base/*.scss',
                    'src/sass/includes/cosmetic/*.scss',
                    'src/sass/includes/project/*.scss'
                ],
				tasks: ['sass:dist'],
				options: {
					spawn: false
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', [
        'jade',
        'sass',
        'watch'
    ]);
};