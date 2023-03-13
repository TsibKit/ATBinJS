// estimator.js
import calculatorGcPage from "../pageobject/gc/calculator.gc.page";
import estimateGcPage from "../pageobject/gc/estimate.gc.page";
import mainMailPage from "../pageobject/mail/main.mail.page";
class Estimator {
    async setCopmuteEngine(settings){
        await calculatorGcPage.switchToInerFrame();
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
        await mainMailPage.copyEmail();
        await estimateGcPage.switchWindow();
        await estimateGcPage.insertEmail();
        await estimateGcPage.sendEmailEstimateBtn.click();
        await mainMailPage.switchWindow(mainMailPage.title);
        await mainMailPage.selectMail(1000);
        let cost = await mainMailPage.getGoogleText();
        await estimateGcPage.switchWindow();
        return cost
    }
}
export default new Estimator()