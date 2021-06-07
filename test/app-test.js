const assert = require('chai').assert;
const app = require('../app');

describe('App', function(){
    it('app should return hello', function(){
        let result = app.sayHello();
        assert.equal(result, 'hello');
    })

    it('sayHello should return type string', function(){
        let result = app.sayHello();
        assert.typeOf(result, 'string');
    })

    it('sayHello should return type string', function(){
        let result = app.addNumbers(5,5);
        assert.isAtLeast(result, 10);
    })
});