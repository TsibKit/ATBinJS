// gc.page.jsgc.page.js
import Page from "../page";
export default class GcPage extends Page{
    title = 'Google Cloud';


    open (path='') {
        return super.open(`/${path}`);
    }

}