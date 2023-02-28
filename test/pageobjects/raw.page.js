import Page from "./page";
class RawPage extends Page{
    get rawText () {return $('pre')};
    
    
    open (pathEnding) {
        return super.open('raw'/pathEnding);
    }
}


export default new RawPage();