// Page.js
export default class Page {
    async open (path) {
        await browser.url(path);
    }
}