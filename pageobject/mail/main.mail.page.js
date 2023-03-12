//main.mail.page.jc
import MailPage from "./mail.page"
class MainMailPage extends MailPage{
    title = "Входящие"
    
    get googleMessage() {return $('.lms*=Google Cloud Price Estimate')};
    
    get whiteDom (){return $('body')}
    // get googleEstimateText () {return this.whiteDom.shadow$('div')};
    get googleEstimateText () {return $('//*[@id="mail"]/div/div/table/tbody/tr[2]/td/h2')};
    //get inboxIF () {return $('[name="ifinbox"]')}

    // get  () {return $('')};
    async switchToInbox(){    
        //const  iframe = await browser.findElement('css selector', '#ifinbox');
        // const iframe = 1;
        await browser.switchToFrame(1);
    }
    async switchToMail(){    
        //const  iframe = await browser.findElement('css selector', '#ifmail');
        // const iframe = 2;
        await browser.switchToFrame(2);
    }

}
export default new MainMailPage()
