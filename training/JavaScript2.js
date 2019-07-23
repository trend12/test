Выбор имени функции - использовать глагольные префиксы после чего идёт 
должна быть глаголом, ведь функция это действия
функция должна делать что то одно (одна функция - одно дейсвие)

showMessage
getAge
calcD....
createForm
checkPrtmission

setAge
addPhone

авто тесты chai и mocha




var x =123454566;
x.toLocaleString()       //123 454 566



вывод символов юникода (ножницы дроби и т.д.)
&#номер;
&#2702;    -ножницы



массивы:
	push/pop, shift/unshift, splice для добавление удаление элементов
	join/split - для преобразование строки в массив и обратно
	slice - копирует участок массива
	sort - для сортировки массива. Если не передать функцию сортирует элеметы как строки
	reverce - меняет порядок элементов на обратный
	concat - объеденяет массивы
	indexOf/lastIndexOf - возвращает позицию элемента в массиве

	forEach
	filter - создаёт новый массив в который попадают те элементы для которых вызов callBack(item, i, arr) возвратит true
	every/some
	map
	reduce/reduceRight


function showWarning (option) {
	var width = option.width || 200; //
	var height = option.height || 100; //

	var contents = option.contents || "предупреждения";
}


//--------------------------------------------------------------------------
function makeCounter () {
	var currentCount = 1;

	return {
		getNext: function () {
			return currentCount++;
		},
		set: function (value) {
			currentCount = value;
		},
		reset: function() {
			currentCount = 1;
		}
	};
}

var counter = makeCounter();

alert( counter.getNext() ); // 1
alert( counter.getNext() ); // 2

counter.set(5);
alert( counter.getNext() ); // 5




//--------------------------------------------------------------------------
//патерн одиночка


function Sum() {

	if (typeof Sum.instance === "object") {
		return Sum.instance;
	}

	this.color = "yellow";
	this.idBig = true;

	Sum.instance = this;
}

var sum1 = new Sum();
var sum2 = new Sum();

conosle.log(sum1 === sum2); //true

//--------------------------------------------------------------------------











var QueryStringManager = function(window) {
    this.window = window;
  };

QueryStringManager.prototype = function() {
    var filters = [],
        viewFilters = [],
        multifilter = {"IsSet":false},

    url = function() {
        return this.window.location.protocol + "//" + this.window.location.host + this.window.location.pathname;
    },

    regexIndexOf = function(phrase, regex, startpos) {
        // thanks StackOverflow: http://stackoverflow.com/questions/273789/is-there-a-version-of-javascripts-string-indexof-that-allows-for-regular-expr 
        var indexOf = phrase.substring(startpos || 0).search(regex);
        return (indexOf >= 0) ? (indexOf + (startpos || 0)) : indexOf;
    },

    getExistingFilter = function(filterName) {
        var urlSearch = this.window.location.search;
       
        var queryStrings = {}; 
        urlSearch.replace( new RegExp("([^?=&]+)(=([^&]*))?", "g"), function($0, $1, $2, $3) { queryStrings[$1] = $3; } ); 

        return queryStrings; 

    },

    attachFilter = function(fieldName, fieldValue) {
        if ((fieldValue !== -1) && (fieldValue !== -2)) {
            filters.push( {"FilterField":fieldName, "FilterValue":fieldValue} );
        }
        return this;    
    },

    attachMultiFilter = function(fieldName, fieldValues) {
        multifilter = $.extend(multifilter, { "IsSet":true, "FilterField": fieldName, "FilterValues": fieldValues });
        return this;    
    },

    applyFilter = function() {
        var furl = url() + "?";

        for(var i=0;i<viewFilters.length;i++)
        {
            furl = furl + "View=" + viewFilters[i].View + "&";
        }

        if (multifilter.IsSet) {
            furl = furl + "FilterName=" + multifilter.FilterField + "&FilterMultiValue=" + multifilter.FilterValues + "&";
        }

        for (var i = 0; i<filters.length; i++) {
            furl = furl + "FilterField" + (i + 1) + "=" + filters[i].FilterField + "&FilterValue" + (i + 1) + "=" + filters[i].FilterValue + "&";
        }

        this.window.location = furl;
    },

    clearFilters = function() {
        filters = [];
        multifilter = {"IsSet":false};
        return this;    
    };


    return {    getExistingFilter : getExistingFilter,
                attachFilter : attachFilter,
                applyFilter : applyFilter,
                attachMultiFilter : attachMultiFilter,
                clearFilters : clearFilters,
                attachViewFilter : attachViewFilter
            };

}();






























var obj = new Object();
console.log(obj.constructor === Object); //true

var obj = new Object(1);
console.log(obj.constructor === Number); //true

var obj = new Object("Hellou word");
console.log(obj.constructor === String); //true

var obj = new Object(true);
console.log(obj.constructor === Boolean); //true



var add = new Function("x", "y", "return x + y");
var res = add(2, 3);








Патерн namespace


var App = App || {};

App.define = function (namespace) {
	var parts = namespace.split("."), parent = App, i;

	//убрать начальный префикс если это имя глобальной переменной
	if (parts[0] == "App") {
		parts = parts.slice(1); // ['utils', 'dom']
	}

	//если в глобальном объекте нет свойства - создаём его
	for (var i = 0; i < parts.length; i++) {
		if (typeof parent[parts[i]] == "undefined") {
			parent[parts[i]] = {};
		}

		parent = parent[parts[i]];
	}
	
	return parent;
}



//использование

(function () {
	//создание пространство имён utils.ajax

	var module1 = App.define("App.utils.ajax")
	console.log(module1 == App.utils.ajax); // true


	//создаём пространство имён utils.dom

	var module2 = App.define("utils.dom");
	console.log(modeule2 == App.utils.dom); // true

	console.dir(App);
}());













console.log("Результат операции");
document.write("Результат операции ");

-string: представляет строку
-number: представляет числовое значение (45    45.4)
	-NaN - Not a Number (значение number)
		isNaN(st1) - евляется ли переданный параметр NaN ("'12d' - евляется", '12' - не является)
	-parseInt(number1); //возвращает NaN если не получилось преобразовать
	-parseFloat(number1); //возвращает NaN если не получилось преобразовать
	из строки в float и отбросиит дробную часть parseFloat(data.allBall).toFixed(1)

-boolean: представляет логическое значение true или false
-function:
	-arguments: массив аргументов, передаваемых в функцию
		function test (a, b, c) {
			console.log(test.arguments[0]);  //arguments - массив
		}
		test(1,2,3);


	-length: определяет количество аргументов, которые ожидает функция
		function test (a, b, c) {
			console.log(test.length); // 3
		}


	-caller: определяет функцию, вызвавшую текущую выполняющуюся функцию
		function test (a, b, c) {
			console.log(test.caller); // выведедет текст функции
		}

		(function f1() {
			test();
		})();


	-name: имя функции
			function test (a, b, c) {
			}

			var f = test;
			console.log(f.name);


	-prototype: прототип функции
	
	-метод call  - вызывается с 2 параметрами, первый объект, остальные параметры
	-метод apply - вызывается с 2 параметрами, первый объект, второй массив параметров

	3 вида функций:
		1 декларативное (Function Declaration)
			function foo(){}
		2 выражения (Function Expression)
			var foo = function () {};
		3 созданные конструктором function
			var foo = new Function('a,b', 'return a+b;');
			foo();

		могут быть:
		1 самовызывающимися
			(function (){})();
			(function (n){})(4);

			(function (){}());
		2 конструкторами
			function Constructor(){};
			var newObj = new Constructor();

		прототипы:
		- объект служащий прообразом для других объектов
		- есть у всех объектов
		- Прототипом может быть любой объект, либо null


-undefined: (не объявленна) указывает, что значение не установлено	(можно устанавливать  isAlive = undefined;)

-null это значение типа object!!! указывает на неопределенное значение
										
-object - Все данные, которые не попадают под вышеперечисленные пять типов, относятся к типу object



//requestAnimationFrame()-------------------------------------------------------------------------------------
//работает как и setInterval только заточен под анимации, работу с графикой



<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <style>
    #rect {
        margin: 100px;
        width: 100px;
        height: 100px;
        background: #50c878;
    }
    </style>
</head>
<body>
<div id="rect"></div>
<script>
	var square = document.getElementById("rect");
	var angle = 0;
	function rotate() {
	    angle = (angle + 2)%360;
	    square.style.transform = "rotate(" + angle + "deg)";
	    window.requestAnimationFrame(rotate);
	}
	var id = window.requestAnimationFrame(rotate);                              //!!! rotate будет вызыватся 60 раз в секунду
</script>
</body>
</html>




//window.cancelAnimationFrame(id);                                           //!!! остановука анимации










////////////////////////////////////////////////////////////////////////////////////
Поиск по элементам
////////////////////////////////////////////////////////////////////////////////////
document.getElementById(value)          : выбирает элемент, у которого атрибут id равен value
document.getElementsByTagName(value)    : выбирает все элементы, у которых тег равен value
document.getElementsByClassName(value)  : выбирает все элементы, которые имеют класс value
document.getElementsByName(value)       : для iframe, a, input (в современных браузерах используется редко)

document.querySelector(".annotation p") : выбирает первый элемент, который соответствует css-селектору value
document.querySelectorAll(value)        : выбирает все элементы, которые соответствуют css-селектору value

!!!!! а можно вместо document написать element


////////////////////////////////////////////////////////////////////////////////////
свойство document
////////////////////////////////////////////////////////////////////////////////////

document.documentElement              : предоставляет доступ к корневому элементу <html>
document.body                         : предоставляет доступ к элементу <body> на веб-странице
document.images                       : содержит коллекцию всех объектов изображений (элементов img)
document.links                        : содержит коллекцию ссылок - элементов <a> и <area>, у которых определен атрибут href
document.anchors                      : предоставляет доступ к коллекции элементов <a>, у которых определен атрибут name
document.forms                        : содержит коллекцию всех форм на веб-странице



////////////////////////////////////////////////////////////////////////////////////
Element
////////////////////////////////////////////////////////////////////////////////////

element1.innerText = "привет мир";
element1.innerHTML = "<h1>привет мир</h1>";
element1.textContent = "привет мир";               : аналогично innerText

var styleValue = articleDiv.getAttribute("attr");  : возвращает значение атрибута attr
element1.setAttribute("style", "color:blue;");     : устанавливает для атрибута attr значение value. Если атрибута нет, то он добавляется
element1.removeAttribute(attr)                     : удаляет атрибут attr и его значение

element1.offsetWidth                               : включается граница элемента
element1.offsetHeight                              : включается граница элемента

element1.clientWidth                               : без учёта границы
element1.clientHeight                              : без учёта границы

var clientRect  = rect.getBoundingClientRect();    : определение позици элемента относительно верхнего угла браузера (clientRect.top, clientRect.bottom, clientRect.left, clientRect.right)
var elem = document.elementFromPoint(x, y);        : возвращает элемент каторый находится под x, y относительно окна

element1.style                                     : стиль элемента ( root.style.color = "blue"; )
element1.class                                     : Изменение значения атрибута class
							( articleDiv.className = "blueStyle"; )                       //задание нового класса
							( articleDiv.className = articleDiv.className + " blueStyle"; //для объеденение предедущего класса с новым

element1.classList:
	elem1.classList.add("blueStyle");          : добавляет класс className
	elem1.classList.remove("article");         : удаляет класс className
	elem1.classList.toggle("article");         : переключает у элемента класс на className. Если класса нет, то он добавляется, если есть, то удаляется



//получение всех элементоы---------------------------------------------------
function getChildren(elem){
     
    for(var i in elem.childNodes){
     
        if(elem.childNodes[i].nodeType===1){                              //!!!
         
            console.log(elem.childNodes[i].tagName);
            getChildren(elem.childNodes[i]);
        }
    }
}
var root = document.documentElement;
console.log(root.tagName);
getChildren(root);






////////////////////////////////////////////////////////////////////////////////////
Изменение стиля элементов
////////////////////////////////////////////////////////////////////////////////////
подходы для изменение стиля элемента:
	- Изменение свойства style              ( root.style.color = "blue"; )
	- Изменение значения атрибута class     ( articleDiv.className = "blueStyle"; ) что прежнее значение атрибута class удаляется














////////////////////////////////////////////////////////////////////////////////////
события
////////////////////////////////////////////////////////////////////////////////////

события бывают:
-События мыши (перемещение курсора, нажатие мыши и т.д.)
-События клавиатуры (нажатие или отпускание клавиши клавиатуры)
-События жизненного цикла элементов (например, событие загрузки веб-станицы)
-События элементов форм (нажатие кнопки на форме, выбор элемента в выпадающем списке и т.д.)
-События, возникающие при изменении элементов DOM
-События, возникающие при касании на сенсорных экранах
-События, возникающие при возникновении ошибок


onclick="alert('Нажато')"                          //вызвать встроенную функцию
onclick="displayMessage()"                         //вызвать свою функцию
onclick="return handler(this)"                     //передача текущего объекта (возращает true или false обозначающии продолжать обработку или нет)
onclick="handler(event)"                           //получает параметр события
		function handler(e){     
		    alert(e.type); // получаем тип события
		}


document.getElementById("rect").onclick = handler;  //задать обработчик в JavaScript-е ( автоматически передает объект event)



rect.addEventListener("click", handler);            //добавления обработчика событий через слушателей событий (есть третий параметр который определяет какое событие восходящее или нисходящее)
rect.removeEventListener("click", handler);         //удаление обработчика события


rect.addEventListener("click", function (e) {
    alert(e.type);
});


//!!!!!!можно прекреплять несколько обработчиков

// прикрепляем первый обработчик
rect.addEventListener("click", handlerOne);
// прикрепляем второй обработчик
rect.addEventListener("click", handlerTwo);



enent------------------------------------------------------------------------
	bubbles              : возвращает true, если событие является восходящим. Например, если событие возникло на вложенном элементе, то оно может быть обработано на родительском элементе.
	cancelable           : возвращает true, если можно отменить стандартную обработку события
	currentTarget        : определяет элемент, к которому прикреплен обработчик события
	defaultPrevented     : возвращает true, если был вызван у объекта Event метод preventDefault()
	eventPhase           : определяет стадию обработки события
	target               : указывает на элемент, на котором было вызвано событие
		function handler(e){    
			    e.target.style.backgroundColor = "red";
		}
	timeStamp            : хранит время возникновения события
	type                 : указывает на имя события              (e.type==="mouseover" или  e.type==="mouseout")
	e.preventDefault();  : мы можем остановить дальнейшее выполнение события. (запретить переход по ссылки, запретить отправку данных формы)
        e.stopPropagation(); : остановить распространение событий



<a href="http://google.com" id="link">Поиск</a>
<script>
function linkHandler(e){
     
    var date = new Date();
    var hour = date.getHours();
    console.log(hour);
    if(hour>12){
         
        e.preventDefault();
        document.write("После 12 переход запрещен");
    }
}
var link = document.getElementById("link");
link.addEventListener("click", linkHandler);
</script>




Есть несколько форм распространения событий:
	Восходящие: событие распространяется вверх по дереву DOM от дочерних узлов к родительским
	Нисходящие: событие распространяется вниз по дереву DOM от родительских узлов к дочерним, пока не достигнет того элемента, на котором это событие и возникло
		var blueRect = document.getElementById("blueRect");
		blueRect.addEventListener("click", function(){
			    console.log("Событие на blueRect");
		}, true); //!!! true значит событие нисходящие




События мыши
	click      : возникает при нажатии указателем мыши на элемент
	mousedown  : возникает при нахождении указателя мыши на элементе, когда кнопка мыши находится в нажатом состоянии
	mouseup    : возникает при нахождении указателя мыши на элементе во время отпускания кнопки мыши
	mouseover  : возникает при вхождении указателя мыши в границы элемента
	mousemove  : возникает при прохождении указателя мыши над элементом
	mouseout   : возникает, когда указатель мыши выходит за пределы элемента


e содержит MouseEvent:
	altKey: возвращает true, если была нажата клавиша Alt во время генерации события
	button: указывает, какая кнопка мыши была нажата
	clientX: определяет координату Х окна браузера, на которой находился указатель мыши во время генерации события
	clientY: определяет координату Y окна браузера, на которой находился указатель мыши во время генерации события
	ctrlKey: возвращает true, если была нажата клавиша Ctrl во время генерации события
	metaKey: возвращает true, если была нажата во время генерации события метаклавиша клавиатуры
	relatedTarget: определяет вторичный источник возникновения события
	screenX: определяет координату Х относительно верхнего левого угла экрана монитора, на которой находился указатель мыши во время генерации события
	screenY: определяет координату Y относительно верхнего левого угла экрана монитора, на которой находился указатель мыши во время генерации события
	shiftKey: возвращает true, если была нажата клавиша Shift во время генерации события


<script>
function setColor(e){
     
    if(e.type==="mouseover")                       //!!!!!!!!!
        e.target.style.backgroundColor = "red";
    else if(e.type==="mouseout")
        e.target.style.backgroundColor = "blue";
}
var blueRect = document.getElementById("blueRect");
blueRect.addEventListener("mouseover", setColor);
blueRect.addEventListener("mouseout", setColor);
</script>








//////////////////////////////////////////////////////////////////////////////////////
События клавиатуры
//////////////////////////////////////////////////////////////////////////////////////

	keydown: возникает при нажатии клавиши клавиатуры и длится, пока нажата клавиша
	keyup: возникает при отпускании клавиши клавиатуры
	keypress: возникает при нажатии клавиши клавиатуры, но после события keydown и до события keyup.
	          Надо учитывать, что данное событие генерируется только для тех клавиш, которые формируют вывод в виде символов,
			  например, при печати символов. Нажатия на остальные клавиши, например, на Alt, не учитываются.

е содержит KeyboardEvent
	altKey: возвращает true, если была нажата клавиша Alt во время генерации события
	charCode: возвращает символ Unicode для нажатой клавиши (используется для события keypress)
	keyCode: возвращает числовое представление нажатой клавиши клавиатуры
	ctrlKey: возвращает true, если была нажата клавиша Ctrl во время генерации события
	metaKey: возвращает true, если была нажата во время генерации события метаклавиша клавиатуры
	shiftKey: возвращает true, если была нажата клавиша Shift во время генерации события



//упровление стрелками квадратом

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <style>
    html, body{
        margin:0;
        overflow:hidden;
    }
    #blueRect{
        width:100px;
        height:100px;
        background-color:blue;
    }
    </style>
</head>
<body>
<div id="blueRect"></div>
 
<script>
function moveRect(e){
     
    var blueRect = document.getElementById("blueRect");
    // получаем стиль для blueRect
    var cs = window.getComputedStyle(blueRect);
     
    var left = parseInt(cs.marginLeft);
    var top = parseInt(cs.marginTop);
     
    switch(e.keyCode){
         
        case 37:  // если нажата клавиша влево
            if(left>0)
                blueRect.style.marginLeft = left - 10 + "px";
            break;
        case 38:   // если нажата клавиша вверх
            if(top>0)
                blueRect.style.marginTop = top - 10 + "px";
            break;
        case 39:   // если нажата клавиша вправо
            if(left < document.documentElement.clientWidth - 100)
                blueRect.style.marginLeft = left + 10 + "px";
            break;
        case 40:   // если нажата клавиша вниз
            if(top < document.documentElement.clientHeight - 100)
                blueRect.style.marginTop = top + 10 + "px";
            break;
    }
}
 
addEventListener("keydown", moveRect);
</script>
</body>
</html>








/////////////////////////////////////////////////////////////////////////////////////
ФОРМЫ
/////////////////////////////////////////////////////////////////////////////////////

<form name="search">
</form>

var searchForm = document.search;                         : получаем объект формы
var searchForm = document.forms["search"];                : получаем объект формы
var searchForm = document.getElementsByTagName("form")[0] : получаем объект формы

form1.elements                                            : колеекция элементов формы
var keyBox = searchForm.elements["FirstName"];            : получить по имени текстовое поле
form1.submit()                                            : отправляет данные формы на сервер
form1.reset()                                             : очищает поля
textbox.form.name                                         : forms получить родительский элемент формы

textbox1.focus();                                         : устанавливаем фокус на элементе
textbox1.blur();                                          : убираем фокус с элемента

document.form1.button1                                    : можно так



//кнопки отправить
<button name="send">Отправить</button>
<input type="submit" name="send" value="Отправить" />


//изменить адресс отправки
document.form1.action="PostForm";

//очистить форму
<button type="reset">Очистить</button>
<input type="reset" value="Очистить" />






/////////////////////////////////////////////////////////////////////////////////////
ТЕКСТОВЫЕ ПОЛЯ
/////////////////////////////////////////////////////////////////////////////////////
свойства:
	focus          : происходит при получении фокуса
	blur           : происходит при потере фокуса
	change         : происходит при изменении значения поля
	select         : происходит при выделении текста в текстовом поле
	keydown        : происходит при нажатии клавиши клавиатуры
	keypress       : происходит при нажатии клавиши клавиатуры для печатаемых символов
	keyup          : происходит при отпускании ранее нажатой клавиши клавиатуры

var val = String.fromCharCode(e.keyCode);//конвертируем в символ






/////////////////////////////////////////////////////////////////////////////////////
хранилище localStorage и sessionStorage
///////////////////////////////////////////////////////////////////////////////////// 

localStorage   - представляет хранилище для данных на постоянной основе
sessionStorage - удаляются после закрытия браузера

//!!! значения хранятся в текстовом виде  !!!!


localStorage.setItem("login", "tom32@gmail.com");                     //!!! добавление или перезаписывание

var login = localStorage.getItem("login"); //tom32@gmail.com          //!!! получение

localStorage.removeItem("login");                                     //!!! удаление

localStorage.clear();                                                 //!!! очистка всех значений






//сохранение объекта -------------------------------------------

var user ={
    name: "Tom",
    age: 23,
    married: false
};
 
localStorage.setItem("user", JSON.stringify(user));                                                 //!!! сохраняем
var savedUser = JSON.parse(localStorage.getItem("user"));                                           //!!! извлекаем в класс
document.write(savedUser.name + " " + savedUser.age +" " + savedUser.married); // Tom 23 false














/////////////////////////////////////////////////////////////////////////////////////
AJAX
///////////////////////////////////////////////////////////////////////////////////// 


var request = new XMLHttpRequest();                                                    //создание
request.open("GET", "http://localhost:8080/hello.txt", false);                         //открытие  (второй параметр означает отправка будет в синхронном или асинхронном режиме false синхронный режим)
//request.open("GET", "http://localhost/home.php", true, "login", "password");         //можно с логиным и паролем
request.send();                                                                        //отправка

var status = request.status;
if(status==200)
    document.write("Текст ответа: " + request.responseText)
else if(status==404)
    document.write("Ресурс не найден")
else
    document.write(request.statusText)




	-status: содержит статусный код ответа HTTP, который пришел от сервера. С помощью статусного кода можно судить об успешности
	         запроса или об ошибках, которые могли бы возникнуть при его выполнении. Например, статусный код 200 указывает
			 на то, что запрос прошел успешно. Код 403 говорит о необходимости авторизации для выполнения запроса,
			 а код 404 сообщает, что ресурс не найден и так далее.
	-statusText: возвращает текст статуса ответа, например, "200 OK"
	-responseType: возвращает тип ответа. Есть следующие типы:
		""
		"arraybuffer"
		"blob"
		"document"
		"json"
		"text"
	-response: возвращает ответ сервера
	-responseText: возвращает текст ответа сервера
	-responseXML: возвращает xml, если ответ от сервера в формате xml



//Асинхронные запросы---------------------------------------
<script>
	var request = new XMLHttpRequest();
 
	function reqReadyStateChange() {
	    if (request.readyState == 4) {
	        var status = request.status;
	        if (status == 200) {
	            document.write(request.responseText);
	        } else {
	            document.write("Ответ сервера " + request.statusText);
	        }
	    }
	}
 
	request.open("GET", "http://localhost:8080/hello.txt");                        //третий параметр true по умолчанию
	request.onreadystatechange = reqReadyStateChange;                              //озникает каждый раз, когда изменяется значение свойства readyState
	request.send();
</script>



значение readyState:
	0: объект XMLHttpRequest создан, но метод open() еще не был вызван для инициализации объекта
	1: метод open() был вызван, но запрос еще не был отправлен методом send()
	2: запрос был отправлен, заголовки и статус ответа получены и готовы к использованию
	3: ответ получен от сервера
	4: выполнение запроса полностью завершено (даже если получен код ошибки, например, 404)









//с использованием события возникающим после получение ответа---------------------------------------

var request = new XMLHttpRequest();
 
function responceLoad() {
    if (request.readyState == 4) {
        var status = request.status;
        if (status == 200) {
            document.write(request.responseText);
        } else {
            document.write("Ответ сервера " + request.statusText);
        }
    }
}

request.open("GET", "http://localhost:8080/hello.txt");
request.onload = responceLoad;                                                    //происходит после выполнение запроса
request.send();











//Отправка GET-запроса-----------------------------------------
<script>
// объект для отправки
var user = {
    name: "Tom",
    age: 23
};
 
var request = new XMLHttpRequest();
function reqReadyStateChange() {
    if (request.readyState == 4) {
        var status = request.status;
        if (status == 200) {
            document.getElementById("output").innerHTML=request.responseText;
        }
    }
}
// строка с параметрами для отправки
var body = "name=" + user.name + "&age="+user.age;                                                    //!!!
//var body = "name=" + encodeURIComponent(user.name) + "&age="+encodeURIComponent(user.age);          //!!! правильно использовать encodeURIComponent для 
request.open("GET", "http://localhost:8080/postdata.php?"+body);
request.onreadystatechange = reqReadyStateChange;
request.send();
</script>






//для кодированиея (чтобы избежать ситуаций когда name может содержать знаки '=' или '&')
var encodeName = encodeURIComponent(user.name); // Tom%26Tim

//для декодирования
var encodeName = encodeURIComponent(user.name); // Tom%26Tim






//POST запрос------------------------------------------------------------------------------
var user = {
    name: "Tom",
    age: 23
};
 
var request = new XMLHttpRequest();
function reqReadyStateChange() {
    if (request.readyState == 4 && request.status == 200)
        document.getElementById("output").innerHTML=request.responseText;
}
var body = "name=" + user.name + "&age="+user.age;
request.open("POST", "http://localhost:8080/postdata.php");
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');             //!!! Для отправки данных методом POST надо установить заголовок Content-Type с помощью метода setRequestHeader()
request.onreadystatechange = reqReadyStateChange;
request.send(body);                                                                        //!!!






//Отправка форм. FormData------------------------------------------------------------------
//FormData, который позволяет сериализовать данные формы для ее последующей отправки. При этом нам даже необязательно создавать форму в коде html, мы можем создать ее динамически в JavaScript:


var formData = new FormData();
formData.append('name', 'Tom');                                                          //!!! добавление параметров
formData.append('age', 23);                                                              //!!! добавление параметров
 
var request = new XMLHttpRequest();
function reqReadyStateChange() {
    if (request.readyState == 4 && request.status == 200)
        document.getElementById("output").innerHTML=request.responseText;
}
 
request.open("POST", "http://localhost:8080/display.php");
request.onreadystatechange = reqReadyStateChange;
request.send(formData);                                                                  //!!! отправка данных









//отправка готовой формы---------------------------------------------------------------------

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
</head>
<body>
<div id="output"></div>
<form name="user" action="http://localhost:8080/postdata.php">
	<input type="text" name="username" placeholder="Введите имя" /><br/>
	<input type="text" name="age" placeholder="Введите возраст" /><br/>
	<input type="submit" name="submit" value="Отправить" />
</form>
<script>
// получаем объект формы
var form = document.forms.user;
// прикрепляем обработчик кнопки
form.submit.addEventListener("click", sendRequest);
 
// обработчик нажатия
function sendRequest(event){
     
    event.preventDefault();
    var formData = new FormData(form);                        //!!! для сериализации полей формы
 
    var request = new XMLHttpRequest();
 
    request.open("POST", form.action);
     
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200)
            document.getElementById("output").innerHTML=request.responseText;
    }
    request.send(formData);
}
</script>
</body>
</html>








//Отправка данных в формате json---------------------------------------------------------------------

// объект для отправки
var user = {
    username: "Tom",
    age: 23
};

var json = JSON.stringify(user);                                                       //серелизуем данные
var request = new XMLHttpRequest();
request.open("POST", "http://localhost:8080/postjson.php");
request.setRequestHeader('Content-type', 'application/json; charset=utf-8');           //устанавливаем заголовок
request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200)
            document.getElementById("output").innerHTML=request.responseText;
}
request.send(json);                                                                    //передаём данные








//Promise в Ajax-запросах--------------------------------------------------------------------------------
...









/////////////////////////////////////////////////////////////////////////////////////
ОБЩИЕ
/////////////////////////////////////////////////////////////////////////////////////

function User(a, b, c, power) {        //[[scope]] присваевается при создании функции!!!! находится в LexicalEnviroment

	var x = 10;             //private   инкапсуляция
	this._y = 20;           //protected поле доступное только из для унаследованных классов (_name - обще принетое знак)
	this.z = 30;            //public

	function f1(d) {        //private function //[[scope]] присваевается при создании функции!!!! находится в LexicalEnviroment
		alert(x);           //возьмет из своего [[scope]] == LexicalEnviroment User-а
	}

	this.enable = function () {
		//...
	}


	//способ-------------------------------------------------------------------------

	var WATER_HEAT_CAPACITY = 4200;

	var getBoilTime = function() {
		return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}.bind(this);                                                 //!!!!!!!!!!!!!!

	this.run = function() {
		setTimeout(onReady, getBoilTime());                   //теперь её можно вызвать
	};


	//самый популярный способ-------------------------------------------------------
	var self = this;                                               //!!!!!!!!!!!
	self.waterAmount = 0;

	function getBoilTime() {
		return self.waterAmount * WATER_HEAT_CAPACITY * 80;
	}

	this.run = function() {
	    setTimeout(onReady, getBoilTime());                        //!!!!!!!!!!!
	};




	//гетеры и сетеры---------------------------------------------------------------
	var waterAmount = 0;                                           //скрытая переменная
	
	this.setWaterAmount = function(amount) {
		//...
		waterAmount = amount;
	}

	this.getWaterAmount = function() {
		return waterAmount;
	};






	//можно сделать единым свойсвом если без параметров то возвращает значения
	//если с параметрами то записывает значения

	this.waterAmount = function(amount) {
	    // вызов без параметра, значит режим геттера, возвращаем свойство
	    if (!arguments.length) return waterAmount;

	    // иначе режим сеттера
	    if (amount < 0) {
	      throw new Error("Значение должно быть положительным");
	    }
	    if (amount > capacity) {
	      throw new Error("Нельзя залить воды больше, чем " + capacity);
	    }

	    waterAmount = amount;
	};




	//!!!! есть способ как в c# через дескрипторы свойств
}




/////////////////////////////////////////////////////////////////////////////////////
Использование this
///////////////////////////////////////////////////////////////////////////////////// 

obj.func(...)                              //this == obj
obj["func"](...)                           //this == obj
--------------------------------------------
func()                                     //this == window   (ES3) this == undefined
--------------------------------------------
new func()                                 //this == {} новый объект
--------------------------------------------
func.apply(context, args)                  // this == context    -для динамического использование
func.call(context, arg1, arg2, arg3, ...)  // this == context





/////////////////////////////////////////////////////////////////////////////////////
Передать функцию с контекстом
///////////////////////////////////////////////////////////////////////////////////// 

//функция обвертка----------------------------------------------------
var user = {
	firstName: "Вася",
	sayHi: function() {
		alert( this.firstName );
	}
};

setTimeout(function() {                           //функция обвертка
	user.sayHi();                                 //достаётся из замыкания
}, 1000);


//свой функция bind--------------------------------------------------
function bindT(func, context) {
	return function() {
		return func.apply(context, arguments);
	};
}

function f() {
	alert(this);
}

var g = bindT(f, "Text");
g();                                           //выведет Text

//встроенная функция bind--------------------------------------------

function f(a, b) {
	alert(this);
	alert(a + b);
}


var g = f.bind("Context");                       //у bind есть параметры по умолчанию
g(1, 2);                                         //Context, затем 3


/////////////////////////////////////////////////////////////////////////////////////
функции обвёртки, функции декораторы
///////////////////////////////////////////////////////////////////////////////////// 

Функции декораторы возвращают функцию которая что то делает вокруг передаваемой функции (как бы расширяя возможности)

фунции проверки типа
//..
var func = typeCheck(sum, [checkNumber, checkNumber]);
//..

декораторы проверки доступа
//..



var arr = [];
alert( arr instanceof Array );  // true
alert( arr instanceof Object ); // true


-----------------------------------------------------
typeof - для примитивов

{}.toString.call(obj).slice(8, -1) - для встроенных объектов тим мы можем получить








/////////////////////////////////////////////////////////////////////////////////////
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/////////////////////////////////////////////////////////////////////////////////////
var animal = {
  eats: true
};
var rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;

// в rabbit можно найти оба свойства
alert( rabbit.jumps ); // true
alert( rabbit.eats ); // true



//------------------------------------------------------------------------------------
ПРИМИТИВЫ

Примитивы не являются объектами, но методы берут из соответствующих прототипов: Number.prototype, Boolean.prototype, String.prototype.

var user = "Вася"; // создали строку (примитив)

alert( user.toUpperCase() ); // ВАСЯ
// был создан временный объект new String
// вызван метод
// new String уничтожен, результат возвращён











/////////////////////////////////////////////////////////////////////////////////////
Наследования в прототипном стили
/////////////////////////////////////////////////////////////////////////////////////
/ 1. Конструктор Animal
function Animal(name) {
  this.name = name;
  this.speed = 0;
}

// 1.1. Методы -- в прототип
Animal.prototype.stop = function() {
  this.speed = 0;
  alert( this.name + ' стоит' );
}

Animal.prototype.run = function(speed) {
  this.speed += speed;
  alert( this.name + ' бежит, скорость ' + this.speed );
};

// 2. Конструктор Rabbit
function Rabbit(name) {
	Animal.apply(this, arguments); //Унаследовать все поля базового класса
}

// 2.1. Наследование
Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

// 2.2. Методы Rabbit
Rabbit.prototype.jump = function() {
  this.speed++;
  alert( this.name + ' прыгает, скорость ' + this.speed );
}

//!!!!переопределнеи метода run
Rabbit.prototype.run = function(speed) {
  this.speed++;
  this.jump();
};

//или с вызовом базового класса!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

Rabbit.prototype.run = function() {
   // вызвать метод родителя, передав ему текущие аргументы
   Animal.prototype.run.apply(this, arguments);
   this.jump();
 }



///////////////////////////////////////////////////////////////
Примеси
Примесь (англ. mixin) – класс или объект, реализующий какое-либо чётко выделенное поведение. Используется для уточнения поведения других классов, не предназначен для самостоятельного использовани


// примесь
var sayHiMixin = {
  sayHi: function() {
    alert("Привет " + this.name);
  },
  sayBye: function() {
    alert("Пока " + this.name);
  }
};

// использование:
function User(name) {
  this.name = name;
}

// передать методы примеси
for(var key in sayHiMixin)
	User.prototype[key] = sayHiMixin[key];

// User "умеет" sayHi
new User("Вася").sayHi(); // Привет Вася

Как видно из примера, методы примеси активно используют this и предназначены именно для запуска в контексте «объекта-носителя примеси».



//--------------------------------------------------------------------------------------
События – это средство «поделиться информацией» с неопределённым кругом заинтересованных лиц. 
Примесь eventMixin, реализующая события:

var eventMixin = {

  //
  //Подписка на событие
  //Использование:
  //menu.on('select', function(item) { ... }
  //
  on: function(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },

  // Прекращение подписки
  //  menu.off('select',  handler)
  //
  off: function(eventName, handler) {
    var handlers = this._eventHandlers && this._eventHandlers[eventName];
    if (!handlers) return;
    for(var i=0; i<handlers.length; i++) {
      if (handlers[i] == handler) {
        handlers.splice(i--, 1);
      }
    }
  },

  // Генерация события с передачей данных
  //  this.trigger('select', item);
  //
  trigger: function(eventName /*, ... */) {

    if (!this._eventHandlers || !this._eventHandlers[eventName]) {
      return; // обработчиков для события нет
    }

    // вызвать обработчики
    var handlers = this._eventHandlers[eventName];
    for (var i = 0; i < handlers.length; i++) {
      handlers[i].apply(this, [].slice.call(arguments, 1));
    }

  }
};








//Использование:-----------------------------------------------------

// Класс Menu с примесью eventMixin
function Menu() {
  // ...
}

for(var key in eventMixin) {
  Menu.prototype[key] = eventMixin[key];
}

// Генерирует событие select при выборе значения
Menu.prototype.choose = function(value) {
  this.trigger("select", value);
}

// Создадим меню
var menu = new Menu();

// При наступлении события select вызвать эту функцию
menu.on("select", function(value) {
  alert("Выбрано значение " + value);
});

// Запускаем выбор (событие select вызовет обработчики)
menu.choose("123");



///////////////////////////////////////////////////////////////////////////////////////
//колекция
///////////////////////////////////////////////////////////////////////////////////////
Объект, создаваемый при помощи Object.create(null) не имеет прототипа, а значит в нём нет лишних свойств. Для коллекции – как раз то, что надо.










///////////////////////////////////////////////////////////////////////////////////////
//Selection и Range (определение координат)
///////////////////////////////////////////////////////////////////////////////////////
document.selection


Range------------------------------------------------------------------------------------
 - node
 - offset

 - container
 - root container

 если контенер текстовый узел то смещения задаётся в символах от начало узла
 если контерер полностью выделенный узел то смещения считается в позициях дочерних узлов


creareRange - создаётся пустой объект в контексте rut контенера или документа
граничные точки задаютяс
	setStart
	setEnd


(Если поле [Сист. Статусы] = На согл. C&B)	или	 (Если поле [Сист. Статусы] = На согл. C&B + VM)	+	Я отношусь к группе SP: CandB




var root = document.getElementById('ex2');
var start =  root.getElementsByTagName('h2')[0].firstChild;
var end =  root.getElementsByTagName('p')[0].firstChild;

var rng = document.createRange();
rng.setStart( start, 3 );
rng.setEnd( end, 10 );

rng.toString();

var dR = range.getBoundingClientRect();                         //!!!!!!!!!!!!!!!!!!! определение координат выделенной области


// Создаем спан с синим фоном
var highlightDiv = document.createElement('span');
highlightDiv.style.backgroundColor = 'blue';
// Обернем наш Range в спан
rng.surroundContents( highlightDiv );



Selection---------------------------------------------------------------------------------------

	anchor - точка начало
	focus  - фокусная точка окончания

//получаем выделенный текст
window.getSelection().toString()





///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
Патерны

function Constructor(){
	this.firstMethod = function(){};
}

Constructor.prototype.secondMethod = function(){};

var newObj = new Constructor();


///////////////////////////////////////////////////////////////////////////////////////////////////////
Модуль (патерн)

(function(){
	//наш код
})();







///////////////////////////////////////////////////////////////////////////////////////////////////////
var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
var xhr = new XHR();	
	
prop in object

prop
	Строка или числовое выражение, являющееся именем свойства или индексом массива
object
	Объект для поиска в нем свойства или массив - для проверки индекса



///////////////////////////////////////////////////////////////////////////////////////////////////////
кросс доменные запросы

//По умолчанию браузер не передаёт с запросом куки и авторизующие заголовки.
//Чтобы браузер передал вместе с запросом куки и HTTP-авторизацию, нужно поставить запросу 

var request = new XMLHttpRequest();
    request.open("POST", "http://server/api/test/Create", true);

    request.withCredentials = true;							 //Чтобы браузер передал вместе с запросом куки и HTTP-авторизацию, нужно поставить запросу 

    request.onload = function() {
        console.log(this.responseText);
        callBack();
    }

    request.onerror = function() {
        console.log("Ошибка" + this.status);
        callBack();
    }

    var data = "{test:'test'}";

    request.send(data);




При запросе с withCredentials сервер должен вернуть уже не один, а два заголовка:
	Access-Control-Allow-Origin: домен
	Access-Control-Allow-Credentials: true


предзапрос preflight

///////////////////////////////////////////////////////////////////////////////////////////////////////
















///////////////////////////////////////////////////////////////////////////////////////////////////////
загруза JavaScript
//////////////////////////////////////////////////////////////////////////////////////////////////////
<img src='//yastatic.net/www/_/W/s/9fkhsVhseQ-JJcxiLZwCHjhHY.svg' onload='console.log(\"11111111111111>>>>>>>>>><<<<<<<<<<<<\");this.parentNode.removeChild(this);' />

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var scriptT = document.createElement('script');
//script.src = ".../11.jpg";
scriptT.type = 'text/javascript';
//scriptT.defer = true
//scriptT.async = false;
scriptT.text = "console.log('11111111111111111111111111111111111111111111111111111111111111111111111');";


//scriptT.onload = function () {
//    console.log("2222222222222222222222222222222222222222222222222"); 
//}

//scriptT.onerror = function () {
//    console.log("Ошибка:33333333333333333333333333333333333333333333");
//};

document.getElementsByTagName('body')[0].appendChild(scriptT);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var a = 2;
eval("console.log(a)"); // выведет 2

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var f = new Function("a, b, c", "alert(a);");
