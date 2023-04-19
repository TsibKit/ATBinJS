//testDataReader.js
 class TestDataReader {
    constructor(){
        this.ENVIRONMENT = process.env.environment;
        this.testData = require(`../resources/${this.ENVIRONMENT}.properties.json`);
        this.search = this.getTestData('search');
        this.settings = this.getTestData('settings');
        this.exception = this.getTestData('exception');
    }
    getTestData(key) {
        return this.testData[key]
    }
    
}
export default new TestDataReader