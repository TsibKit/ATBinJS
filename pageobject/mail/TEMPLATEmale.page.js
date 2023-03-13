// TEMPLATEmale.page.js
import MailPage from "./mail.page";
export default class ChMailPage extends MailPage{
    path = '!!!!!!!!!!!!CHANGE ME!!!!!!!!!!!!!!!!!!!!'
    title = '!!!!!!!!!!!!CHANGE ME!!!!!!!!!!!!!!!!!!!!'

    get clipBoardBtn () {return $('!!!!!!!!!!!!CHANGE ME!!!!!!!!!!!!!!!!!!!!')};
    get checkMail() {return $('!!!!!!!!!!!!CHANGE ME!!!!!!!!!!!!!!!!!!!!')}
    

    get googleMessage() {return $('!!!!!!!!!!!!CHANGE ME!!!!!!!!!!!!!!!!!!!!')};
    get googleEstimateText () {return $('!!!!!!!!!!!!CHANGE ME!!!!!!!!!!!!!!!!!!!!')};
    // async copyEmail() {
    //     await super.copyEmail() 
    // }

    // async selectMail(delay = 0){
    //     await super.selectMail(delay)
    // }
    // async getGoogleText(){
    //    return await super.getGoogleText()  
    // }


}
