module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			my_target: {
				options: {
					screwIE8: true
				},
				files: {
					'dist/jaiminho.min.js': ['src/Jaiminho.js']
				}
			}
		}
	});

	grunt.registerTask('default', ['uglify']);
};