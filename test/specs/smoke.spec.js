// smoke.spec.js
import mainGcPage from "../../pageobject/gc/main.gc.page"
import searchResultGcPage from "../../pageobject/gc/searchResult.gc.page"
import calculatorGcPage from "../../pageobject/gc/calculator.gc.page"
import testDataReader from "../../service/testDataReader"
import estimator from "../../service/estimator"
import estimateGcPage from "../../pageobject/gc/estimate.gc.page"

describe('Hardcore', () => {
    it ('Open main page',async() =>{
        await mainGcPage.open();
        await expect(browser).toHaveTitleContaining(mainGcPage.title)
    })
    it ('Move to search page', async () =>{
        await mainGcPage.search(testDataReader.search.text);
        await expect(browser).toHaveUrlContaining(searchResultGcPage.urlKey); //It is a search page
        await expect(searchResultGcPage.searchLine)
                    .toHaveValue(testDataReader.search.text); //It is the right search phrase
    })
    it ('Move to calculator', async () =>{
        await searchResultGcPage.selectResultByText(testDataReader.search.linkName);
        await expect(browser).toHaveUrlContaining(calculatorGcPage.urlKey); //It is a calculator page
    } )
    it ('Set engine', async () =>{
        await estimator.setCopmuteEngine(testDataReader.settings);
    })
    it ('Get estimated', async () =>{
        await expect(estimateGcPage.totalEstimatedCost).toHaveText(testDataReader.settings.
            exception.costLine);
    })
    it ('email estimate',async () => {
        const emailDelay=1000;
        const useClipboard = false;
        const cost = await estimator.getEstimateToEmail(emailDelay,useClipboard);
        await expect(estimateGcPage.totalEstimatedCost).toHaveTextContaining(cost);
     })
})