import {jasmineHelpers, testRunner} from "../_references";

describe("AsterPlot", () => {
    it("default", (done) => {
        browser
            //To execute any client script before taking a screenshot
            .webdrivercss(testRunner.getCurrentSpecImagePath(), {
                name: "svg.asterPlot",
                elem: "svg.asterPlot"
            })
            .then(result => jasmineHelpers.assertImageMatch(result))
            .then(() => done());
    });
});