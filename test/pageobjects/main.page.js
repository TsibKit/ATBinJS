import Page from './page.js';

class MainPage extends Page {
    /**
     * define elements
     */
    get postText () { return $('#postform-text')};
    get droplistExpiration () { return $('.form-group.field-postform-expiration  .select2-selection__arrow')};
    get droplistHighlighting () {return $("[aria-labelledby='select2-postform-format-container']   .select2-selection__arrow")}

    get postName () { return $('#postform-name')};
    get btnCreate () {return $('.btn.-big')};

    getExpiration(timecode) {return $("li[data-select2-id$='"+timecode+"']")};
    getHighlighting(languagecode) {return $("li[data-select2-id$='"+languagecode+"']")};
        
    
    /**
     * define or overwrite page methods
     */

    async setExpiration (time = 'Never', flgMessage=true) {
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
        await this.droplistExpiration.click();
        if (flgMessage) {
            time = _timeMap[time];
        }
        await this.getExpiration(time).click();
    }
    

    async setHighlighting (language = 'None', flgMessage=true) {
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
        await this.droplistHighlighting.click();
        if (flgMessage) {
            language = _highlightingMap[language];
        }
        await this.getHighlighting(language).click();
    }

    create () {
        return this.btnCreate.click()
    }
}

export default new MainPage();