import mainPage from "../pageobjects/main.page";  
import loginPage from "../pageobjects/login.page";
import checkPage from "../pageobjects/check.page";
import rawPage from "../pageobjects/raw.page";

const id ={
    login : 'atbinjs',
    email : 'atbinjs@yopmail.com',
    password : 'superTestPassword',
}
describe('check bin in Pastebin',() => {
    /* I wanted to have more tries. But I had not found solution to pass "Проверка безопасности подключения к сайту"*/
    // it ('login', async () => {
    //     await mainPage.open();
    //     await loginPage.open();
    //     //await loginPage.inputPassword.waitForDisplayed({timeout:60000, interval:10000}); //try to wait "Проверка безопасности подключения к сайту"
    //     await loginPage.login(id.login, id.password);
    // })   
    
    it('I can win', async () =>{
        //open site
        await mainPage.open();
        //input message
        await mainPage.postText.setValue("Hello from WebDriver");
        //choose Expiration
        await mainPage.setExpiration('10 Minutes');
        //input title
        await mainPage.postName.setValue("Hello web");
        //send message
        await mainPage.create();
        
    })
    it('Bring It On', async () =>{
        const msg = {
            Text:
`git config --global user.name "New Sheriff in Town"

git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")

git push origin master --force`,
            Highlighting: "Bash",
            Expiration: "10 Minutes",
            Title: "how to gain dominance among developers",
        };
        //open site
        await mainPage.open();
        //input message
        await mainPage.postText.setValue(msg.Text);
        //choose Highlighting
        await mainPage.setHighlighting(msg.Highlighting);
        //choose Expiration
        await mainPage.setExpiration(msg.Expiration);
        //input title
        await mainPage.postName.setValue(msg.Title);
        //send message
        await mainPage.create();
            // for aprove actions without spending tries 
            // const urlForCheck = await browser.getUrl();
            // console.log(urlForCheck);
            // await checkPage.open('jqbDUZfh'); //for aprove actions without spending tries 
            // await checkPage.open('8mZW8Kir');
        //check Browser page title matches Paste Name / Title
        await expect(browser).toHaveTitleContaining(msg.Title);
        //check  Syntax is suspended for bash
        await expect(checkPage.highlightingField).toHaveText(msg.Highlighting);
        //check  Check that the code matches the one entered in paragraph 2
        await checkPage.btnRaw.click();
        await expect(rawPage.rawText).toHaveText(msg.Text);
            //await expect(checkPage.bashTextField).toHaveTextContaining(msg.Text); //lost format
            //await expect(checkPage.rawTextField).toHaveText(msg.Text); //must work if you are loged. But for guest isn't exist
    })

    

})