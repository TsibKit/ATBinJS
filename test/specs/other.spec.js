import mainGcPage from "../../pageobject/gc/main.gc.page"
import searchResultGcPage from "../../pageobject/gc/searchResult.gc.page"
import calculatorGcPage from "../../pageobject/gc/calculator.gc.page"
import testDataReader from "../../service/testDataReader"

describe('Hurt Me Plenty', () => {
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

})

describe('Start from calculator page', ()=>{
    it ('open calc page',async ()=>{
        calculatorGcPage.open();
    })
    it('check selector', async ()=>{
        /* Work */
        // let selector =  calculatorGcPage.vmClassList;
        // let selector =  $('#cloud-site')
        // let locator = $('//iframe[@src="https://cloud.google.com/frame/products/calculator/index_d6a98ba38837346d20babc06ff2153b68c2990fa24322fe52c5f83ec3a78c6a0.frame?hl=ru"]')

        /* #document № 5 ??????????????????????????????*/

        /* Doesn't work */ 
        let selector = $("//title[text()='Google Cloud']")
        // let selector = $('#maia-main')
        // const selector = await $("//input[@id='input_94']") //from selenium ide
        // let selector = await $('//md-select[@placeholder="VM Class"]') //span[@class="md-select-icon"]')
        // let selector = $('//@placeholder="VM Class"');
        // let selector = $('aria/quantity');
        
        
        await expect(selector).toExist();
        // await selector.waitForExist({ timeout: 30000 });
    })
    // it ('Set engine', async () =>{
    //     await calculatorGcPage.setCopmuteEngine(testDataReader.settings);
    // })
})
