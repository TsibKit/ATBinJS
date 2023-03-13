// 0_10minutemail.com.page.js
import MailPage from "./mail.page";
export default class ChMailPage extends MailPage{
    //don't give adress to test

    path = 'https://10minutemail.com/';
    title = '10 Minute Mail';
    get clipBoardBtn () {return $('#copy_address')};
}
