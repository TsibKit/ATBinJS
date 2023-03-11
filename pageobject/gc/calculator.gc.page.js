//calculator.gc.page.js
import GcPage from "./gc.page";
class CalculatorGcPage extends GcPage{
    urlKey='products/calculator'
    get computeEngineBtn () {return $('.md-tab.md-active .compute[title="Compute Engine"]')}
    get instaceNumber () {return $('input[ng-model*="computeServer.quantity"]')};
    get aim () {return $('input[ng-model*="computeServer.label"]')};
    get softwareList () {return $('md-select[ng-model="listingCtrl.computeServer.os"]')};
    get vmClassList () {return $('md-select[placeholder="VM Class"]')};
    get seriesList () {return $('md-select[placeholder="Series"]')};
    get instanceTypeList () {return $('md-select[placeholder="Instance type"]')};
    get addGpusCheckBox () {return $('aria/Add GPUs')}; //[@tabindex="-1"]'

    get gpuList  () {return $('[placeholder="GPU type"]')};
    get gpuNumberList () {return $('[placeholder="Number of GPUs"]')};
    get ssdList () {return $('[placeholder="Local SSD"]')};
    get locationList () {return $('[placeholder="Datacenter location"]')};
    get committedUsageList () {return $('[placeholder="Committed usage"]')};
    get addToEstimateBtn () {return $('[ng-click="listingCtrl.addComputeServer(ComputeEngineForm);"]')};
    get totalEstimatedCost() {return $('b*= Total Estimated Cost:')}
    // get  () {return $('')};

    getByValue (value)      {return $(`//md-option[@value="${value}"]`)};
    getByName (name)        {return $(`.md-text*=${name}`)}; 
    getGpuNumber(number)    {return $(`md-option[ng-repeat*="GpuNumbers"][value="${number}"]`)};
    getComputerServerRegion(location) {return $(`md-option[ng-repeat*="computeServer"][value="${location}"]`)};
    getCommittedUsage(value){return $(`#select_option_13${value}`)}


    async clickByValue(value){
        await this.getByValue(value).waitForClickable();
        await this.getByValue(value).click();
    }


    async clickByName(name){
        await this.getByName(name).waitForClickable();
        await this.getByName(name).click();
    }


    async clickGpuNumber(number){
        await this.getGpuNumber(number).waitForClickable();
        await this.getGpuNumber(number).click();
    }

    
    async clickComputerServerRegion(location){
        await this.getComputerServerRegion(location).waitForClickable();
        await this.getComputerServerRegion(location).click();
    }
    

    async setCopmuteEngine(set){
        await this.switchCalculatorFrame();
        await this.computeEngineBtn.click();
        await this.instaceNumber.setValue(set.instaceNumber);
        await this.aim.setValue(set.aim);
        await this.setSoftware(set.software);
        await this.setVmClass(set.vmClass);
        await this.setInstanceType(set.instanceType);
        if (set.gpu.add){
            await this.setGpu(set.gpu);
        await this.setSsd(set.ssd);
        await this.setLocation(set.location);
        await this.setCommittedUsage(set.usage);
        await this.submitEstimate();
        }
    }


    async setSoftware(software){
        await this.softwareList.click();
        await this.clickByValue(software.value);
    }


    async setVmClass(vmClass){
        await this.vmClassList.click();
        await this.clickByValue(vmClass.value);
    }


    async setInstanceType(instanceType){
        await this.seriesList.click();
        await this.clickByValue(instanceType.seriesValue);
        await this.instanceTypeList.click();
        await this.clickByValue(instanceType.value);
    }


    async setGpu(gpu){
        await this.addGpusCheckBox.click();
        await this.gpuList.click();
        await this.clickByValue(gpu.value);
        await this.gpuNumberList.click();
        await this.clickGpuNumber(gpu.number);
    }


    async setSsd(ssd){
        await this.ssdList.click();
        await this.clickByName(ssd);
    }


    async setLocation(location){
        await this.locationList.waitForExist();
        await this.locationList.waitForClickable();
        await this.locationList.click();
        await this.clickComputerServerRegion(location);
    }


    async setCommittedUsage(usage){
        await this.committedUsageList.click();
        await this.getCommittedUsage(usage.value).waitForClickable();
        await this.getCommittedUsage(usage.value).click();
    }


    async submitEstimate(){
        await this.addToEstimateBtn.click()
    }
    async getTotalEstimatedCost(){
        let text = await this.totalEstimatedCost.getText();
        console.log(text)
    }



    async switchCalculatorFrame(){
        browser.switchToFrame(0); 
        browser.switchToFrame(0);
    }
    


    open (some='') {
        return super.open(`${this.urlKey}/${some}`);
    }
}
export default new CalculatorGcPage();