import Page from "./page";
class CheckPage extends Page{
    get nameField () {return $('.info-top h1')};
    get highlightingField () { return $('.highlighted-code a')};
    get rawTextField () { return $('.textarea')};
    get bashTextField () {return $('.source.bash .bash')};
    get btnRaw () {return $("[href*='raw']")}
}

export default new CheckPage();