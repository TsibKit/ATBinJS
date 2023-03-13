// debug.spec.js
import mainGcPage from "../../pageobject/gc/main.gc.page"
import searchResultGcPage from "../../pageobject/gc/searchResult.gc.page"
import calculatorGcPage from "../../pageobject/gc/calculator.gc.page"
import testDataReader from "../../service/testDataReader"
import estimator from "../../service/estimator"
import estimateGcPage from "../../pageobject/gc/estimate.gc.page"



// describe('Start from calculator page', ()=>{
//     // it ('Open calc page',async ()=>{
//     //     calculatorGcPage.open();
//     // })


//     // it ('Set engine', async () =>{
//     //     await estimator.setCopmuteEngine(testDataReader.settings);
//     // })


//     // it ('Get estimated', async () =>{
//     //     await calculatorGcPage.getTotalEstimatedCost();
//     //     await expect(calculatorGcPage.totalEstimatedCost).toHaveText(testDataReader.settings.
//     //         exception.costLine);
//     // })


//     // it('Selectors work', async ()=>{
//     //     /* Work */
//     //     let selectors = [
//     //         mainGcPage.searchBtn,
//     //         $('#cloud-site'),
//     //         $('//iframe[@src="https://cloud.google.com/frame/products/calculator/index_d6a98ba38837346d20babc06ff2153b68c2990fa24322fe52c5f83ec3a78c6a0.frame?hl=ru"]'),
//     //     ]
//     //     for (let selector of selectors){
//     //         await expect(selector).toExist();
//     //     }

//     // }) 
//         /* #document № 5 ??????????????????????????????*/
    
//     // it ("Selector doesn't work", async()=>{
//     //     // await browser.switchToframe("0");
        
//     //     browser.switchToFrame(0); 
//     //     browser.switchToFrame(0);
//     //     /* Doesn't work */ 
//     //     //let selector = $("//title[text()='Google Cloud']")
//     //     // let selector = $('#maia-main')
//     //     // const selector = await $("//input[@id='input_94']") //from selenium ide
//     //     // let selector = await $('//md-select[@placeholder="VM Class"]') //span[@class="md-select-icon"]')
//     //     // let selector = $('//@placeholder="VM Class"');
//     //     // let selector = $('aria/quantity');
//     //     let selector = calculatorGcPage.instaceNumber;
//     //     // let selector =  calculatorGcPage.vmClassList;
        
//     //     await selector.waitForExist({reverse:true,});// timeout: 30000 });
//     // })
// })
describe('Start from estimate result',() => {
    it ('open estimated page', async () =>{
        await estimateGcPage.open('#id=e571347b-2d1e-4211-8b78-0c5804caa591');
        await estimateGcPage.switchToInerFrame();
    })


    it('old estimate',async () => {
        await expect(estimateGcPage.totalEstimatedCost).toHaveText(testDataReader.settings.
            exception.costLine);
    })  
    
    
    it ('email estimate',async () => {
        let cost = await estimator.getEstimateToEmail();
        await expect(estimateGcPage.totalEstimatedCost).toHaveTextContaining(cost);
     })
})