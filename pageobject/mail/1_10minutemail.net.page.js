// 1_10minutemail.net.page.js
import MailPage from "./mail.page";
export default class ChMailPage extends MailPage{

    // too slow 
    path = 'https://10minutemail.net/';
    title = '10 Минутная Почта';
    get clipBoardBtn () {return $('#copy-button')};
}
