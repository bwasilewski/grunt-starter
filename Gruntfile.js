module.exports = function (grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			build: {
        src: 'src/scripts.js',
        dest: 'dist/scripts.min.js'
      }
		}
	});

	// Load the "Uglify" plugin
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Set up our default task
	grunt.registerTask('default', ['uglify']);
};