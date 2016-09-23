///<reference path="../_references.ts"/>

describe("AsterPlot", () => {
    it("default", (done) => {
        //To execute any client script before taking a screenshot
        browser
            .assertAreaScreenshotMatch({
                name: "svg.asterPlot",
                elem: "svg.asterPlot"
            })
            .then(done);
    });
});