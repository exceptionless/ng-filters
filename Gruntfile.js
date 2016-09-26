module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: [
                '/**',
                ' * <%= pkg.description %>',
                ' * @version v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>' +
                ' * @link <%= pkg.homepage %>',
                ' * @author <%= pkg.author %>',
                ' * @license MIT License, http://www.opensource.org/licenses/MIT',
                ' */',
                ''
              ].join('\n')
    },
    dirs: {
      dest: 'dist'
    },
    concat: {
      options: {
        banner: '<%= meta.banner %>'
      },
      dist: {
        src: ['src/angular-filters.js', 'src/**/*-filter.js'],
        dest: '<%= dirs.dest %>/<%= pkg.name %>.js'
      }
    },
    bowerInstall: {
        install: {
        }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/angular-filters.js', 'src/**/*.js'],
      options: {
        jshintrc: true
      }
    },
    karma: {
      options: {
        configFile: 'karma.conf.js'
      },
      build: {
        singleRun: true,
        autoWatch: false
      },
      debug: {
        singleRun: false,
        autoWatch: true,
        browsers: ['Chrome']
      },
      travis: {
        singleRun: true,
        autoWatch: false,
        browsers: ['Firefox']
      },
      travisUnderscore: {
        singleRun: true,
        autoWatch: false,
        browsers: ['Firefox'],
        configFile: 'karma.underscore.conf.js'
      },
      buildUnderscore: {
        configFile: 'karma.underscore.conf.js',
        singleRun: true,
        autoWatch: false
      },
      dev: {
        autoWatch: true
      }
    },
    changelog: {
      options: {
        dest: 'CHANGELOG.md'
      }
    }
  });

  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.loadNpmTasks('grunt-bower-task');

  grunt.renameTask('bower', 'bowerInstall');

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-conventional-changelog');

  // Default task.
  grunt.registerTask('default', ['build']);

  // Build task.
  grunt.registerTask('build', ['bowerInstall', /* 'test', */ 'concat']);

  grunt.registerTask('test', ['karma:build', 'karma:buildUnderscore']);

  grunt.registerTask('test-debug', ['karma:debug']);

  grunt.registerTask('travis', ['karma:travis', 'karma:travisUnderscore']);

  // Provides the "bump" task.
  grunt.registerTask('bump', 'Increment version number', function() {
    var versionType = grunt.option('type');
    function bumpVersion(version, versionType) {
      var type = {patch: 2, minor: 1, major: 0},
          parts = version.split('.'),
          idx = type[versionType || 'patch'];
      parts[idx] = parseInt(parts[idx], 10) + 1;
      while(++idx < parts.length) { parts[idx] = 0; }
      return parts.join('.');
    }
    var version;
    function updateFile(file) {
      var json = grunt.file.readJSON(file);
      version = json.version = bumpVersion(json.version, versionType || 'patch');
      grunt.file.write(file, JSON.stringify(json, null, '  '));
    }
    updateFile('package.json');
    updateFile('bower.json');
    grunt.log.ok('Version bumped to ' + version);
  });
};
