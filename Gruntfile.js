module.exports = function (grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			build: {
        src: 'js/scripts.js',
        dest: 'js/scripts.min.js'
      }
		}
	});

	// Load the "Uglify" plugin
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Set up our default task
	grunt.registerTask('default', ['uglify']);
};