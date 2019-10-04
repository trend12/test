//---------------------------------------------------------------------------------------------------------------------------
//преобразование даты для сервисов WCF

Date.prototype.toMSJSON = function () {
    var date = '/Date(' + this.getTime() + ')/'; //CHANGED LINE
    return date;
};

var dt = ...;
var dt1 = new Date(Date.UTC(dt.getFullYear(), dt.getMonth(), dt.getDate(), dt.getHours(), dt.getMinutes(), dt.getSeconds(), dt.getMilliseconds()));
var wcfDateStr = dt1.toMSJSON();
