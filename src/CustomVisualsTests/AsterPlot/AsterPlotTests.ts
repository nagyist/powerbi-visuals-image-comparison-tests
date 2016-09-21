import {jasmineHelpers, testRunner} from "../_references";

describe("AsterPlot", () => {
    it("default", (done) => {
        //To execute any client script before taking a screenshot
        browser.assertAreaScreenshot({
                name: "svg.asterPlot",
                elem: "svg.asterPlot"
            })
            .then(() => done());
    });
});