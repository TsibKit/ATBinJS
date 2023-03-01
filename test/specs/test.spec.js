import mainPage from "../pageobjects/main.page"
import checkPage from "../pageobjects/check.page"
import rawPage from "../pageobjects/raw.page"
describe('I can win',() => {
    const msg={
       text:"Hello from WebDriver",
       expiration:'10 Minutes',
       title:"Hello web",
    }
    it('send process', async () =>{
        await mainPage.open();
        await mainPage.setAndCreate(msg);
    })    
    })

describe('Bring It On',() => {
    const msg = {
        text:
`git config --global user.name "New Sheriff in Town"

git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")

git push origin master --force`,
        highlighting: "Bash",
        expiration: "10 Minutes",
        title: "how to gain dominance among developers",
    }
    it('send process', async () =>{
        await mainPage.open();
        await mainPage.setAndCreate(msg);
        /* for manual control */ 
        //console.log(await rawPage.getPathEnding(1500));
        /* for aprove actions without spending tries  */
        //await mainPage.setMsgParameters(msg);
        //await checkPage.open('c9yiJdXx'); 
    })
   /*check Browser page title matches Paste Name / Title */
    it('title containe', async () =>{
        await expect(browser).toHaveTitleContaining(msg.title);
    })
    /* check  Syntax is suspended for bash */
    it('highlighthing equal', async () =>{
        await expect(checkPage.highlightingField).toHaveText(msg.highlighting);
        
    })
    /* check  Check that the code matches the one entered in paragraph 2 */
    it('text equal', async () =>{
        await checkPage.btnRaw.click();
        await expect(rawPage.rawText).toHaveText(msg.text);
    })
})