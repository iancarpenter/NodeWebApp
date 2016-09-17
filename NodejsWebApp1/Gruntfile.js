/// <binding AfterBuild='copy' />
module.exports = function (grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        copy: {
            js: {
                expand: true,
                cwd: './node_modules',
                dest: './content/js/libs/',
                flatten: true,
                filter: 'isFile',
                src: [
                    './bootstrap/dist/js/bootstrap.js',
                    './jquery/dist/jquery.js'
                ]
            },
            css: {
                expand: true,
                cwd: './node_modules',
                dest: './content/css/',
                flatten: true,
                filter: 'isFile',
                src: [
                    './bootstrap/dist/css/bootstrap.min.css',
                    './bootstrap/dist/css/bootstrap-theme.min.css'
                ]
            },
            views: {
                expand: true,
                cwd: './',
                dest: './views/',
                flatten: false,
                filter: 'isFile',
                src: ['./views.jade/*.jade'],
                rename: function (dest, src) {
                    console.log(src);
                    return dest + src.substring(src.lastIndexOf('/'), src.lastIndexOf('.')) + '.pug';
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['copy']);
};