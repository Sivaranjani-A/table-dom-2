var tables = document.createElement("table")
tables.setAttribute("class","table");
var thead = document.createElement("thead")
thead.setAttribute("class","thead-dark");
var tr1 = document.createElement("tr");

var th = createth("th","scope","col","First");
var th1 = createth("th","scope","col","Middle");
var th2 = createth("th","scope","col","Last");

var tbody = document.createElement("tbody");
var tr2 = document.createElement("tr");

var td = createtd("td","Mark");
var td1 = createtd("td","Otto");
var td2 = createtd("td","@mdo");


tr1.append(th,th1,th2);
thead.append(tr1);
tr2.append(td,td1,td2);
tbody.append(tr2);
tables.append(thead,tbody);
document.body.append(tables);




function createth(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
    }
    function createtd(tagname,content){
        var ele=document.createElement(tagname);        
        ele.innerHTML=content;
        return ele;
        }