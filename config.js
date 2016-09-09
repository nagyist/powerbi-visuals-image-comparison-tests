module.exports.config = {
    jasmine: {
        defaultTimeoutInterval: 30000
    },
    webdrivercss: {
        screenshotRoot: "screenshots/originals",
        failedComparisonsRoot: "screenshots/differents",
        misMatchTolerance: 0,
        screenWidth: [1920],
        gmOptions: {
            appPath: require("graphics-magick-binaries").getGMBinariesPathForCurrentSystem()
        }
    },
    specs: ["./build/**/*.js"],
    exclude: ["./build/CustomVisualsTests/ClientScripts/**/*.js"],
    capabilities: [{
        name: "chrome",
        browserName: "chrome"
    }],
    startPage: "https://msit.powerbi.com/view?r=eyJrIjoiZGVmNjUyZmItODIxMC00MzI0LWE4ZDAtNzIxZGY5NzhjZGFlIiwidCI6IjcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0NyIsImMiOjV9",
    injectScripts: ["./build/CustomVisualsTests/ClientScripts/**/*.js"],
    waitUntil: function () {
        return $ && $("svg.asterPlot").length > 0;
    }
}