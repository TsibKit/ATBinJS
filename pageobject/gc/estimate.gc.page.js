//estimate.gc.page
import FmGcPage from "./fm.gc.page";
import {Key} from 'webdriverio'
class EstimateGcPage extends FmGcPage{

    get totalEstimatedCost() {return $('b*= Total Estimated Cost:')};
    get emailEstimateBtn () {return $('[title="Email Estimate"]')}
    get emailEstimateInput () {return $('[ng-model="emailQuote.user.email"]')};
    get sendEmailEstimateBtn () {return $('button*=Send Email')};

    async getTotalEstimatedCost(){
        let text = await this.totalEstimatedCost.getText();
        console.log(text)
    }

    async insertEmail(){
        await this.emailEstimateBtn.click();
        await this.emailEstimateInput.click();
        await browser.keys([Key.Ctrl, 'v']);
    }

    async emailEstimate(){
        this.insertEmail();
        this.waitAndClick(this.sendEmailEstimateBtn);
    }

    


}   
export default new EstimateGcPage();