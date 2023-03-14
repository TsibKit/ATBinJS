// mail.page.js
import Page from "../page";
export default class MailPage extends Page{
    path = '!!!!!!!!!!!!CHANGE ME!!!!!!!!!!!!!!!!!!!!'
    title = '!!!!!!!!!!!!CHANGE ME!!!!!!!!!!!!!!!!!!!!'
    async open(urlKey=''){
        await super.open(this.path + urlKey)
    }
    async openNew(urlKey=''){
        await super.openNew(this.path + urlKey)
    }

    get clipBoardBtn () {return $('!!!!!!!!!!!!CHANGE ME!!!!!!!!!!!!!!!!!!!!')};
    get checkMail() {return $('!!!!!!!!!!!!CHANGE ME!!!!!!!!!!!!!!!!!!!!')}
    

    get googleMessage() {return $('!!!!!!!!!!!!CHANGE ME!!!!!!!!!!!!!!!!!!!!')};
    get googleEstimateText () {return $('!!!!!!!!!!!!CHANGE ME!!!!!!!!!!!!!!!!!!!!')};
    get generatedEmail(){return $('!!!!!!!!!!!!CHANGE ME!!!!!!!!!!!!!!!!!!!!')};

    async copyEmailInClipboard() { 
        await this.waitAndClick(this.clipBoardBtn);
    }
    async getEmail() {
        return this.generatedEmail.getText();
    }
    

    async selectMail(delay = 0){
        await browser.pause(delay);
        await this.refresh();
        await this.googleMessage.click();
    }
    async getGoogleText(){
        return await this.googleEstimateText.getText();  
    }

    async refresh(){
        await browser.refresh();
    }


}
