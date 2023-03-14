// 4_yopmail.com.page.js
import MailPage from "./mail.page";
export default class ChMailPage extends MailPage{
    //can'not select element in iframe
    path = 'https://yopmail.com/ru/email-generator'
    title = 'Случайных'

    get clipBoardBtn () {return $('.notmobile*=Скопировать в буфер обмена')};
    get checkMail() {return $('button*=Проверить почту')}
    get generatedEmail(){return $('#geny')}
    

    get googleMessage() {return $('.lms*=Google Cloud Price Estimate')};
    get googleEstimateText () {return $(' td:nth-child(4)')};
    get testselector() {return $('.bname')};

    get refreshBtn() {return $('#refresh')};



    async selectMail(delay){
        await this.openIncoming();
        await browser.pause(delay);
        await browser.refresh();
        await this.switchToInbox();
        await this.googleMessage.click();
    }


    async getGoogleText(){
        await this.switchToMail();
        let googleText = await super.getGoogleText();
        return googleText  
    }

    async refresh(){
        await this.refreshBtn.click()};



    async openIncoming(){
        if (this.title = 'Случайных'){ await this.checkMail.click()};
        this.title = "Входящие";
    }
    async switchToInbox(){    
        const  iframe = await browser.findElement('css selector', '#ifinbox');
        this.switchTo(iframe)
    }
    async switchToMail(){    
        //const  iframe = await browser.findElement('css selector', '#ifmail');
        const iframe = 2;
        this.switchTo(iframe)
    }

    async switchTo(iframe){
        await browser.switchToFrame(null);
        await browser.switchToFrame(iframe);
    }
}
