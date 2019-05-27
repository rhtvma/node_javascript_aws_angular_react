/* =================== Type 1 ========================*/

var objProto = {
    type: 'test',
    greet: function () {
        console.log(this.greeting + " world!");
    }
}

var Greeting = function (term) {
    this.greeting = term;
};
// https://www.youtube.com/watch?v=XNjLhxg4u6k

Greeting.prototype = objProto;

var obj1 = new Greeting('Rohit');
obj1.greet();

/* =================== Type 2 ========================*/
var obj2 = Object.create(objProto);
obj2.greet('hi');
/* =================== Type 3 ========================*/


/* =================== Type 4 ========================*/
