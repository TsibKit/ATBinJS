// mail.page.js
import Page from "../page";
export default class MailPage extends Page{
    // path = 'https://10minutemail.com/';
    // title = '10 Minute Mail';
    // get clipBoardBtn () {return $('#copy_address')};//com
    //don't give adress

    // path = 'https://10minutemail.net/';
    // title = '10 Минутная Почта';
    //get clipBoardBtn () {return $('#copy-button')};//net
    // too slow 

    //path = 'https://10minemail.com/';
    //title = '10 Minute Mail';
    // get clipBoardBtn () {return $('(//button[@data-clipboard-action="copy"])[2]')}; // patch
    // blocked me

    // path = 'https://etempmail.net/10minutemail';
    // title = '10 Minute Mail';
    // get clipBoardBtn () {return $('#btn_copy')};
    // can'not select mail. Blocked

    path = 'https://yopmail.com/ru/email-generator'
    title = 'Случайный'
    get clipBoardBtn () {return $('.notmobile*=Скопировать в буфер обмена')};
    get checkMail() {return $('button*=Проверить почту')}




    async open(urlKey=''){
        await super.open(this.path + urlKey)
    }
    async openNew(urlKey=''){
        await super.openNew(this.path + urlKey)
    }
}
