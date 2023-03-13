// 4_yopmail.com.page.js
import MailPage from "./mail.page";
export default class ChMailPage extends MailPage{
    //can'not select element in iframe
    path = 'https://yopmail.com/ru/email-generator'
    title = 'Случайных'

    get clipBoardBtn () {return $('.notmobile*=Скопировать в буфер обмена')};
    get checkMail() {return $('button*=Проверить почту')}
    

    get googleMessage() {return $('.lms*=Google Cloud Price Estimate')};
    get googleEstimateText () {return $('h3')};


    async selectMail(delay){
        await this.openIncoming();
        await browser.pause(delay);
        await browser.refresh();
        await this.switchToInbox();
        await this.googleMessage.click();
    }


    async getGoogleText(){
        await this.switchToMail();
        await super.getGoogleText();
    }



    async openIncoming(){
        if (this.title = 'Случайных'){ await this.checkMail.click()};
        this.title = "Входящие";
    }
    async switchToInbox(){    
        const  iframe = await browser.findElement('css selector', '#ifinbox');
        //const iframe = 1;
        await browser.switchToFrame(null);
        await browser.switchToFrame(iframe);
    }
    async switchToMail(){    
        // const  iframe = await browser.findElement('css selector', '#ifmail');
        const iframe = 2;
        await browser.switchToFrame(null);
        await browser.switchToFrame(iframe);
    }
}
