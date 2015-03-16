/**
 * Created by ww on 2015/2/12.
 */
'use struct'
module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    //require('time-grunt')(grunt);
    //var config = {
    //    app:'app',
    //    dist:'dist'
    //};
    grunt.initConfig({
        //config:config,
        concat_css: {
            all: {
                src: ['assets/styles/*.css','!assets/styles/*.min.css','!assets/styles/all_pages.css'],
                dest:'assets/styles/all_pages.css'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/styles',
                    src: ['all_pages.css', '!*.min.css'],
                    dest: 'assets/styles',
                    ext: '.min.css'
                }]
            }
        },
        less:{
            development: {
                options: {
                    compress:true,
                    yuicompress:true
                },
                files: [
                    {
                        expand: true,
                        cwd: 'less',
                        src: ["**/*.less",'!dev/**'],
                        dest: 'assets/styles/',
                        ext: '.css'
                    }
                ]
            }
        },
        watch:{
            styles: {
                files: ['less/**/*.less'], // which files to watch
                tasks: ['newer:less','concat_css','cssmin'],
                options: {
                    nospawn: true
                }
            }
        },
        clean:{
            cssfile:{
                src:["assets/styles/**.css"]
            }
        }
    });
    grunt.registerTask('cssDeal', ['clean:cssfile','less','concat_css','cssmin']);
};