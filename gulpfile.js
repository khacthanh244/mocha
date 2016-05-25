'use strict';
const gulp = require('gulp'),
	ts   = require('gulp-typescript');

// var filterSetting = ['express'];
var tsProject = ts.createProject('tsconfig.json',{
	declaration: true,
	typescript: require('typescript')
	});

gulp.task('typescript',()=>{
	let tsResult = tsProject.src()
                    .pipe(ts(tsProject));
    // return tsResult.js.pipe(gulp.dest('./'));
    return tsResult.js.pipe(gulp.dest('./build'));
});
gulp.task('watch',['typescript'],()=>{
	gulp.watch('./**/*.ts',['typescript']);
});
