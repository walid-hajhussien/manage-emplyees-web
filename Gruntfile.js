module.exports = function (grunt) {
  // configration
  grunt.initConfig({
    connect: {
      server: {
        options: {
          open: true,
          keepalive: true,
        },
      },
    },
  });

  //load plugins
  grunt.loadNpmTasks("grunt-contrib-connect");

  //register task
  grunt.registerTask("default", ["connect"]);
};
