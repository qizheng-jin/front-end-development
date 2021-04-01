var jsonstr ='[{"p":17999.00,"op":"17999.00","cbf":"0","id":"J_100010378153","m":"100000.00"}]';
var obj = JSON.parse(jsonstr);
var price = obj[0].p;
var id = obj[0].id;
// jQuery 写div的innerText, 并且改变颜色
$("#this_div").text("price is " + price + ", ID is " + id).css("color", "blue");// jQuery

// javascript 写div的innerText, 并且改变颜色
var second = document.getElementById("second_div"); //jQuery才用加#或者., js直接用值就行了
second.innerText = "price is " + price + ", ID is " + id;
second.style = "color: red;";