// 3_etempmail.net.page.js
import MailPage from "./mail.page";
export default class ChMailPage extends MailPage{

    // can'not select mail. Blocked me
    path = 'https://etempmail.net/10minutemail';
    title = '10 Minute Mail';
    get clipBoardBtn () {return $('#btn_copy')};
}
