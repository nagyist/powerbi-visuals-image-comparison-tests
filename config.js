module.exports = {
    jasmine: {
        defaultTimeoutInterval: 30000
    },
    specs: ["./lib/**/*.js"],
    exclude: ["./lib/CustomVisualsTests/ClientScripts/**/*.js"],
    capabilities: [{
        browserName: "chrome"
    }],
    startPage: "https://msit.powerbi.com/view?r=eyJrIjoiZGVmNjUyZmItODIxMC00MzI0LWE4ZDAtNzIxZGY5NzhjZGFlIiwidCI6IjcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0NyIsImMiOjV9",
    injectScripts: ["./lib/CustomVisualsTests/ClientScripts/**/*.js"]
}