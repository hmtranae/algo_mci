// reference type

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

object1 === object2;

object1 === object3;

object1.value = 15;

object2.value;

object3.value;