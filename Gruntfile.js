module.exports = function (grunt) {
  
  // Define our tasks here

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      all: ['Gruntfile.js', 'js/scripts.js']
    },
    
    uglify: {
      build: {
        src: 'js/scripts.js',
        dest: 'js/scripts.min.js'
      }
    }
  });

  
  // Load the jshint plugin
  grunt.loadNpmTasks('grunt-contrib-jshint');
  
  // Load the uglify plugin
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Set up our default task
  grunt.registerTask('default', ['jshint', 'uglify']);

};