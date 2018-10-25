module.exports = (grunt) => {
    grunt.initConfig({
        sass: {
            development: {
                options: {
                },
                files: {
                    'src/css/App.css': src/sass/App.scss,
                    'src/css/Main.css': src/sass/Main.scss
                }
            },
            production: {
                options: {
                },
                files: {
                    'src/css/App.css': src/sass/App.scss,
                    'src/css/Main.css': src/sass/Main.scss
                }
            }
        },
        watch: {
            files: ['<%= sass.files %>'],
            tasks: ['sass']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass']);
    grunt.registerTask('heroku:production', 'sass');
};