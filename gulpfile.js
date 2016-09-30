var gulp = require("gulp");
var runSequence = require("run-sequence")
var builder = require("./node_modules/visual-regression-test-runner/builder");
var visualRegressionTestRunner = require("visual-regression-test-runner");

var customVisualsTestsTsConfigPath = __dirname + "/src/CustomVisualsTests/tsconfig";

gulp.task("build", () => {
    if (!builder.build(customVisualsTestsTsConfigPath)) {
        throw "build failed";
    }
});

gulp.task("clean", () => {
    builder.clean(customVisualsTestsTsConfigPath)
});

gulp.task("install-start-selenium", () => {
    return visualRegressionTestRunner.SeleniumServer.installRun();
});

gulp.task("run", () => {
    return visualRegressionTestRunner.TestRunner
        .run("./config.js")
        .catch(() => process.exit(1))
        .then(() => process.exit(0));
});

gulp.task('build-run', () => {
    runSequence("build", "run");
});

gulp.task('build-install-run', () => {
    return runSequence("build", "install-start-selenium", "run");
});