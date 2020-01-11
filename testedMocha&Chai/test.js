function sayName(name){
    let message = "My name is " + name;
    return message
};

let arr = [5,-3,6,-5,0,1,2];
let result = arr.reduce(function(sum,elem){
    return sum + elem;
})

let assert = require('chai').assert

describe("sayName", function(){
    it("Получаем фразу с новым именем", function(){
        assert.typeOf(sayName("ALEX"), 'string')
    });
});

describe("arr", function(){
    it("Получаем суммус чисел массива", function(){
        assert.equal(result, 6)
    });
});