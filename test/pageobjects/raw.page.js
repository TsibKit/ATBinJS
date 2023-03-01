import Page from "./page";
class RawPage extends Page{
    get rawText () {return $('pre')};
    
    
    open (pathEnding) {
        return super.open(`raw/${pathEnding}`);
    }

    async getPathEnding(pause=0){
        await browser.pause(pause); //bad 
        const url = await browser.getUrl();
        return url.split('/').pop();
    }
}


export default new RawPage();