//calculator.gc.page.js
import GcPage from "./gc.page";
class CalculatorGcPage extends GcPage{
    urlKey='products/calculator'
    get computeEngineBtn () {return $('//div[@title="Compute Engine"][@class="tab-holder compute"]')}//need to find better
    get instaceNumber () {return $('//input[@ng-model="listingCtrl.computeServer.quantity"]')};
    get aim () {return $('//input[@ng-model="listingCtrl.computeServer.label"]')};
    get softwareList () {return $('//md-select[@ng-model="listingCtrl.computeServer.os"]')};
    get vmClassList () {return $('//md-select[@placeholder="VM Class"]')};
    get seriesList () {return $('//md-select[@placeholder="Series"]')};
    get instanceTypeList () {return $('//md-select[@placeholder="Instance type"]')};
    get addGpusCheckBox () {return $('//md-checkbox[@aria-label="Add GPUs"][@tabindex="-1"]')};

    get  () {return $('')};

    getByValue (value) {return $(`//md-option[@value="${value}"]`)};
    //getByName (name){return $(`//md-option//[text()*='${name}']`)}; 
    

    async setCopmuteEngine(set){
        await this.computeEngineBtn.click();
        await this.instaceNumber.setValue(set.instaceNumber);
        await this.aim.setValue(set.aim);
        await this.setSoftware(set.software);
        await this.setVmClass(set.vmClass);
        await this.setInstanceType(set.instanceType);
        if (set.gpu.add){
            await this.setGpu(set.gpu);
        }
    }

    async setSoftware(software){
        await this.softwareList.click();
        await this.getByValue(software.value).click();
    }

    async setVmClass(vmClass){
        await this.vmClassList.click();
        await this.getByValue(vmClass.value).click();
    }
    async setInstanceType(instanceType){
        await this.seriesList.click();
        await this.getByValue(instanceType.seriesValue);
        await this.instanceTypeList.click();
        await this.getByValue(instanceType.value);
    }
    async setGpu(gpu){
        await this.addGpusCheckBox.click();

    }


    open (some='') {
        return super.open(`${this.urlKey}/${some}`);
    }
}
export default new CalculatorGcPage();