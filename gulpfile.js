var gulp = require('gulp');
var critical = require('critical');
gulp.task('default', function () {
	critical.generate({
		inline: true,
		base: '.',
		src: 'index.max.html',
		dest: 'index.html',
		minify: true,
		width: 320,
		height: 480
	});
});