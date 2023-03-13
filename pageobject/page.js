// page.js
export default class Page {
    title = '';
    async open (path) {
        await browser.url(path);
    }
    async openNew (path) {
        await browser.newWindow(path);
    }
    async switchWindow(matcher=this.title){
        await browser.switchWindow(matcher);
    }
    async waitAndClick(btn, waitParam={}){
        await btn.waitForClickable(waitParam);
        await btn.click();
    }
}
