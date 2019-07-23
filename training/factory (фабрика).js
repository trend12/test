// Factory фабрика



//родительский конструктор
function Control() {
}


Control.prototype.render = function (type) {
    document.write("Control: " + this.name + "<br />" + this.control + "<br /><br />");
}

//фабричный метод
Control.create = function (type) {
    var ctor = type;

    //проверить наличие контсрутора для указанного типа объекта
    if (typeof Control[ctor] !== "function") {
        //выбрасываем исключение если контруктор не найден
        throw {
            name: "Error",
            message: "Конструктор " + ctor + " не найден."
        };
    }

    //на этом этапе существование конструктора проверенно
    //Устанавливаем для конструктора в качестве прототипа объект Control.
    //выполняем данную операцию один раз.
    if (typeof Control[ctor].prototype.render !== "function") {
        Control[ctor].prototype = new Control();
    }
}


Control.TextBox = function () {
    this.name = "TextBox";
    this.control = "<input type='text' />";
}

Control.RadioButton = function () {
    this.name = "RadioButton";
    this.control = "<input type='radio' />";
}


//Использование фабрики
var btn = Control.create("Button");
var txt = Control.create("TextBox");


btn.render();
txt.render();
