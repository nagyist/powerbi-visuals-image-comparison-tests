import {jasmineHelpers} from "../_references";

describe("AsterPlot", () => {
    beforeEach(() => {
        browser.url("https://msit.powerbi.com/view?r=eyJrIjoiZGVmNjUyZmItODIxMC00MzI0LWE4ZDAtNzIxZGY5NzhjZGFlIiwidCI6IjcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0NyIsImMiOjV9");
    });

    it("default", () => {
        let result = browser.webdrivercss(jasmineHelpers.getCurrentSpecImagePath(), {
            name: "svg.asterPlot",
            elem: "svg.asterPlot"
        });

        jasmineHelpers.assertImageMatch(result);
    });
})