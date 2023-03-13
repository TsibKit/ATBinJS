// fm.gc.page.js
import GcPage from "./gc.page";
export default class FmGcPage extends GcPage{
    urlKey='products/calculator';

    open (some='') {
        return super.open(`${this.urlKey}/${some}`);
    }
    async switchToInerFrame(){
       await browser.switchToFrame(null);
       await browser.switchToFrame(0); 
       await browser.switchToFrame(0);
    }
    async switchWindow(matcher=this.title){
        await super.switchWindow(matcher);
        await this.switchToInerFrame();
     }

}