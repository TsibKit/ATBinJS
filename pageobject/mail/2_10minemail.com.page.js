// 2_10minemail.com.page.js
import MailPage from "./mail.page";
export default class ChMailPage extends MailPage{
    // Masked intrefacce, blocked me

    path = 'https://10minemail.com/';
    title = '10 Minute Mail';
    get clipBoardBtn () {return $('(//button[@data-clipboard-action="copy"])[2]')};
}
