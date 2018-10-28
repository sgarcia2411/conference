var gulp = require('gulp')
, nodemon = require('gulp-nodemon')
, eslint = require('gulp-eslint');

gulp.task('lint', function () {});

gulp.task( 'default', [ 'develop' ] )

gulp.task('develop', function () {
var stream = nodemon({ script: '/app/server.ts', tasks: ['lint'] })

stream.on('restart', function () {
      console.log('restarted!')
    })
    .on('crash', function() {
      console.error('Application has crashed!\n')
       stream.emit('restart', 10)  // restart the server in 10 seconds
    })
})