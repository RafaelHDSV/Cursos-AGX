// declaração de variavel
var a = 'Hi';

// declaração de função
function aF() {
	console.log('Hi');
}

// chamar função
aF();

// declarar uma função em uma variavel
var aFunction = function () {};

// função com argumentos
// não utilizamos var na declaração de argumentos
// para que a função retorne algo utiliza a palavra return
// se exister um return seguido por nada, a função vai simplesmente encerrar
function compare(x, y) {
	return x > y;
}

// Global Scope e Function Scope
// funções declaradas no escopo global podem ser acessada em qualquer lugar
// funções declaradas no escopo de uma função, só podem ser acessada dentro da mesma função

// Uma funçaõ cria um novo contexto de execução

// -------------------------------------------------------------------------------------------------

var message = 'in global';
console.log('global: message = ' + message);

var aMessage = function () {
	var message = 'inside a';

	console.log('a: message = ' + message);

	function b() {
		console.log('b: message = ' + message);
	}

	b();
};

aMessage();

// -------------------------------------------------------------------------------------------------

// undefined
console.log('UNDEFINED');
var x;
console.log(x);

// null

// number
console.log('NUMBER');
console.log((5 + 4) / 3);
console.log(undefined / 5);

function test1(a) {
	console.log(a / 5);
}

test1();

// string
console.log('STRING');
var string = 'Hello';

string += ' World';
// string = string + "World" igual a linha acima

console.log(string + '!');

// symbol

// -------------------------------------------------------------------------------------------------

console.log('IGUALDADE');
var x = 4,
	y = 4;

if (x == y) {
	console.log('x = 4 is equal to y = 4');
}

x = '4';
if (x == y) {
	console.log('x="4" is equal to y = 4');
}

console.log('SCRICT IGUALDADE');
if (x === y) {
	console.log('Strict: x = "4" is equal to y = 4');
} else {
	console.log('Strict: x = "4" is NOT equal to y = 4 ');
}

console.log('BOOLEAN');
// falsos em boolean
if (false || null || undefined || '' || 0 || NaN) {
	console.log("This line won't ever execute");
} else {
	console.log('All false');
}

// verdadeiros em boolean
if (true && 'hello' && 1 && -1 && 'false') {
	console.log('All true');
}

// -------------------------------------------------------------------------------------------------

function orderChickenWith(sideDish) {
	if (sideDish === undefined) {
		sideDish = 'whatever!';
	}
	// = sideDish = sideDish || "whatever!"

	console.log('Chicken with ' + sideDish);
}

orderChickenWith('noodles');
orderChickenWith(); //chicken with undefined

// -------------------------------------------------------------------------------------------------
console.log('OBJECT');
var company = new Object();
company.name = 'Facebook';
company.ceo = new Object();
company.ceo.firstName = 'Mark';
company.ceo.favColor = 'blue';
company.$stock = 110;
company['stock of company'] = 110;

console.log(company);
console.log('Company CEO name is: ' + company.ceo.firstName);
console.log(company['name']);

// -------------------------------

console.log('OBJECT LITERAL');
var facebook = {
	name: 'Facebook',
	ceo: {
		firstName: 'Mark',
		favColor: 'blue',
	},
	$stock: 1000,
	'stock of company': 1000,
};
console.log(facebook);

// -------------------------------------------------------------------------------------------------

console.log('COPY BY REFERENCE VS BY VALUE');

var a = 7;
var b = a;
console.log('a: ' + a);
console.log('b: ' + b);
b = 5;
console.log('after b update: ');
console.log('a: ' + a);
console.log('b: ' + b);

console.log('--------------');

var a = { x: 7 };
var b = a;
console.log(a);
console.log(b);
b.x = 5;
console.log('after b update: ');
console.log(a);
console.log(b);

// -------------------------------------------------------------------------------------------------]

function test2() {
	console.log(this);
	console.log('Hello Coursera!');
}

test2();

// baseado no novo objeto criado e não no escolo global, como acima
function Circle(radius) {
	console.log(this);
	this.radius = radius;

	this.getArea = function () {
		return Math.PI * Math.pow(this.radius, 2);
	};
}

Circle.prototype.getArea = function () {
	return Math.PI * Math.pow(this.radius, 2);
};

var myCircle = new Circle(10);
console.log(myCircle);
console.log(myCircle.getArea());

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);

// -------------------------------------------------------------------------------------------------

var array = new Array();
array[0] = 'Yaakov';
array[1] = 2;
array[2] = function (name) {
	console.log('Hello ' + name);
};
array[3] = { course: 'HTML, CSS & JS' };

console.log(array);
console.log(array[1]);
array[2](array[0]);
console.log(array[3].course);

// -----------------------------

var names = [{ name: 'Yaakov' }, 'John', 'Joe'];
console.log(names);

names[100] = 'Jim';

for (let i = 0; i < names.length; i++) {
	console.log('Hello ' + names[i]);
}

var myObj = {
	name: 'Yaakov',
	course: 'HTML, CSS & JS',
	platform: 'Coursera',
};

for (var prop in myObj) {
	console.log(prop + ': ' + myObj[prop]);
}

// -------------------------------------------------------------------------------------------------
console.log('CLOSURE');
function makeMultiplier(multiplier) {
	// var multiplier = 2

	function b() {
		console.log('Multiplier is: ' + multiplier);
	}
	b();

	return function (x) {
		return multiplier * x;
	};
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));

// -------------------------------------------------------------------------------------------------

console.log('IMMEDIATELY INVOKED FUNCTION');
(function (name) {
	console.log('Hello ' + name);
})('Coursera');
