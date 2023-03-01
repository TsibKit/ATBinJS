import Page from './page.js';

class MainPage extends Page {
    /**
     * define elements
     */
    get postText () { return $('#postform-text')};
    get droplistExpiration () { return $('.form-group.field-postform-expiration  .select2-selection__arrow')};
    get droplistHighlighting () {return $("[aria-labelledby='select2-postform-format-container']   .select2-selection__arrow")}

    get postTitle () { return $('#postform-name')};
    get btnCreate () {return $('.btn.-big')};

    line(liCode) {return $(`li[data-select2-id$='${liCode}']`)};
    
    /**
     * define or overwrite page methods
     */
    async setText(text=''){
        // console.log(`text ${text}`);
        await this.postText.setValue(text);
    }
    async setTitle(title){
        // console.log(`Title ${title}`);
        await this.postTitle.setValue(title)
    }
    //This metod do nothing for Undefinited parametr
    async setHighlighting(language, flgMessage = true){
        if (this._checkUndefinited(language)){
            return 
        }
        const _highlightingMap={
            None:1,
            Bash:8,
            C:9,
            'C#':14,
            'C++':13,
            CSS:16,
            HTML:25,
            JSON:255,
            Java:27,
            JavaScript:28,
            Lua:30,
            Markdown:267,
            'Objective C':35,
            PHP:41,
            Perl:40,
            Python:42,
            Ruby:45,
            Swift:256,
        }
        await this._setDroplist(language, _highlightingMap, this.droplistHighlighting, flgMessage)

    }
    //This method sets the default value instead of the Undefined parametr
    async setExpiration (time  = 'Never', flgMessage=true){
        const _timeMap = {
                'Never':'N',
                'Burn after read':'B',
                '10 Minutes':'10M',
                '1 Hour':'1H',
                '1 Day':'1D',
                '1 Week':'1W',
                '2 Weeks':'2W',
                '1 Month':'1M',
                '6 Months':'6M',
                '1 Year':'1Y'
        }
        await this._setDroplist(time, _timeMap, this.droplistExpiration, flgMessage);
    }
    _checkUndefinited(param){
        return (param == null)
    }    

    async _setDroplist(code,map,droplist,flg = true){
        if (flg) {
            code = map[code];
        }
        await droplist.click();
        await this.line(code).click();
    }

    async setMsgParameters(msg){
        await this.setText(msg.text); 
        await this.setHighlighting(msg.highlighting);
        await this.setExpiration(msg.expiration);
        await this.setTitle(msg.title);
    }
    async create () {
        await this.btnCreate.click()
    }
    async setAndCreate(msg){
        await this.setMsgParameters(msg);
        await this.create();
    }
}

export default new MainPage();