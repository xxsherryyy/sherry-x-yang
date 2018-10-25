module.exports = (grunt) => {
    grunt.initConfig({
        sass: {
            development: {
                options: {
                },
                files: {
                    'css/App.css': 'sass/App.scss',
                    'css/Main.css': 'sass/Main.scss'
                }
            },
            production: {
                options: {
                },
                files: {
                    'css/App.css': 'sass/App.scss',
                    'css/Main.css': 'ass/Main.scss'
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