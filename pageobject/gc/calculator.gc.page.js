//calculator.gc.page.js
import FmGcPage from "./fm.gc.page";
class CalculatorGcPage extends FmGcPage{
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
    // get totalEstimatedCost() {return $('b*= Total Estimated Cost:')};
    // get emailEstimateBtn () {return $('[title="Email Estimate"]')}
    // get emailEstimateInput () {return $('[ng-model="emailQuote.user.email"]')};
    // get sendEmailEstimateBtn () {return $('button*=Send Email')}
    // get  () {return $('')};

    getByValue (value)      {return $(`//md-option[@value="${value}"]`)};
    getByName (name)        {return $(`.md-text*=${name}`)}; 
    getGpuNumber(number)    {return $(`md-option[ng-repeat*="GpuNumbers"][value="${number}"]`)};
    getComputerServerRegion(location) {return $(`md-option[ng-repeat*="computeServer"][value="${location}"]`)};
    getCommittedUsage(value){return $(`#select_option_13${value}`)}
    

    async setSoftware(software){
        await this.softwareList.click();
        await this.waitAndClick(this.getByValue(software.value));
    }


    async setVmClass(vmClass){
        await this.vmClassList.click();
        await this.waitAndClick(this.getByValue(vmClass.value));
    }


    async setInstanceType(instanceType){
        await this.seriesList.click();
        await this.waitAndClick(this.getByValue(instanceType.seriesValue));
        await this.instanceTypeList.click();
        await this.waitAndClick(this.getByValue(instanceType.value));
    }


    async setGpu(gpu){
        await this.addGpusCheckBox.click();
        await this.gpuList.click();
        await this.waitAndClick(this.getByValue(gpu.value));
        await this.gpuNumberList.click();
        await this.waitAndClick(this.getGpuNumber(gpu.number));
    }


    async setSsd(ssd){
        await this.ssdList.click();
        await this.waitAndClick(this.getByName(ssd));
    }
    

    async setLocation(location){
        await this.locationList.waitForExist();
        await this.locationList.waitForClickable();
        await this.locationList.click();
        await this.waitAndClick(this.getComputerServerRegion(location));
    }


    async setCommittedUsage(usage){
        await this.committedUsageList.click();
        await this.waitAndClick(this.getCommittedUsage(usage.value));
    }


    async submitEstimate(){
        await this.addToEstimateBtn.click()
    }
    // async getTotalEstimatedCost(){
    //     let text = await this.totalEstimatedCost.getText();
    //     console.log(text)
    // }
    // async emailEstimate(){
    //     await this.emailEstimateBtn.click();
    // }

    // async insertMail(){
    //     await this.emailEstimateBtn.click();
    //     await this.emailEstimateInput.click();
    //     await browser.keys([Key.Ctrl, 'v']);
    // }




}
export default new CalculatorGcPage();