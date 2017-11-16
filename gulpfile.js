var gulp = require('gulp')
var bs = require('browser-sync').create()

gulp.task('sync', function() {
  bs.init({
    server: {
      baseDir: './'
    }
  })

  gulp.watch("*.html").on("change", bs.reload)
})

gulp.task('default', ['sync'])
