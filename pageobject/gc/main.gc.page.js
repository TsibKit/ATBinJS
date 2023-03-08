import GcPage from './gc.page'
import {Key} from 'webdriverio'
class MainGcPage extends GcPage {
    title = 'Cloud Computing Services';//  |  Google Cloud';
    get searchBtn () {return $('.devsite-search-form')};
    get searchField () {return $('.devsite-search-query')}

    async search (something) {
        await this.searchBtn.click();
        await this.searchField.setValue(something);
        await browser.keys([Key.Enter]);
    }


}

export default new MainGcPage();