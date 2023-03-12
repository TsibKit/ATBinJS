// estimator.js
import calculatorGcPage from "../pageobject/gc/calculator.gc.page";
import mainMailPage from "../pageobject/mail/main.mail.page";
import {Key} from 'webdriverio'
//import mail from
class Estimator {
    async setCopmuteEngine(settings){
        await calculatorGcPage.switchCalculatorFrame();
        await calculatorGcPage.computeEngineBtn.click();
        await calculatorGcPage.instaceNumber.setValue(settings.instaceNumber);
        await calculatorGcPage.aim.setValue(settings.aim);
        await calculatorGcPage.setSoftware(settings.software);
        await calculatorGcPage.setVmClass(settings.vmClass);
        await calculatorGcPage.setInstanceType(settings.instanceType);
        if (settings.gpu.add){ await calculatorGcPage.setGpu(settings.gpu);}
        await calculatorGcPage.setSsd(settings.ssd);
        await calculatorGcPage.setLocation(settings.location);
        await calculatorGcPage.setCommittedUsage(settings.usage);
        await calculatorGcPage.submitEstimate();
    }
    async getEstimateToEmail(){
        await mainMailPage.openNew();
        let timeout1 =1000*60*5
        await mainMailPage.waitAndClick(mainMailPage.clipBoardBtn);
        await mainMailPage.checkMail.click();
        console.log(await browser.getTitle())
        await calculatorGcPage.switchWindow(calculatorGcPage.title);
        console.log(await browser.getTitle())
        await calculatorGcPage.switchCalculatorFrame();
        await calculatorGcPage.emailEstimateBtn.click();
        await calculatorGcPage.emailEstimateInput.click();
        await browser.keys([Key.Ctrl, 'v']);
        // await browser.pause(15000);
        await calculatorGcPage.sendEmailEstimateBtn.click();
        await mainMailPage.switchWindow(mainMailPage.title);
        //await mainMailPage.switchToInbox();
        
        // while (!(await mainMailPage.googleMessage.isExisting())) {
        //     //await mainMailPage.waitAndClick(mainMailPage.refreshBtn,{timeout:5000});
        //     await browser.pause(5000);
        //     // console.log(await ($('title')).getText());
        //     console.log(await browser.getTitle());
        //     console.log(await mainMailPage.googleMessage.isExisting())
        //     await browser.refresh(); 
        // }
       // await mainMailPage.googleMessage.click();
       //await mainMailPage.switchToMail();
       await browser.pause(3000);
       await browser.refresh();
       await mainMailPage.switchToInbox();
       let text = await mainMailPage.googleEstimateText.getText();
       console.log(text);
       //await browser.pause(40000)
    }
}
export default new Estimator()