// searchResult.gc.page.js
import GcPage from './gc.page'

class SearchResultGcPage extends GcPage {
    urlKey='s/results?q='
    get searchLine () {return $('//input[@placeholder="Search"]')}
    getResultByText(text){
        return  $(`//div[@class="gs-title"]/a[@class="gs-title"]/b[text()='${text}']`);
    }
    async selectResultByText(text) {
        await this.getResultByText(text).click()
    }
    open (searchItem='') {
        return super.open(this.urlKey+searchItem);
    }

}

export default new SearchResultGcPage()