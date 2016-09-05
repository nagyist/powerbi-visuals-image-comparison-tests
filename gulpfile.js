var gulp = require("gulp");
var runSequence = require("run-sequence")
var builder = require("./node_modules/selenium-test-runner/builder");
var seleniumTestRunner = require("selenium-test-runner");

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
    return seleniumTestRunner.seleniumServer
        .install()
        .then(() => seleniumTestRunner.seleniumServer.run());
});

gulp.task("run", () => {
    var runner = new seleniumTestRunner.WDIOTestRunner("wdio.conf.js");
    return runner.run();
});

gulp.task('build-run', () => {
    runSequence("build", "run");
});

gulp.task('build-install-run', () => {
    runSequence("build", "install-start-selenium", () => {
        var runner = new seleniumTestRunner.WDIOTestRunner("wdio.conf.js");
        return runner.run().then(exitCode => process.exit(exitCode));
    });
});