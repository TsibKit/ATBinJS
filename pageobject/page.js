// page.js
export default class Page {
    async open (path) {
        await browser.url(path);
    }
    async openNew (path) {
        await browser.newWindow(path);
    }
    async switchWindow(mask){
        await browser.switchWindow(mask);
    }
    async waitAndClick(btn, waitParam={}){
        await btn.waitForClickable(waitParam);
        await btn.click();
    }
}