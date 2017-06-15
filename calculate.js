var str = "a;b;c;d;e;f;g;h;i";

var arr = str.split(";");

console.log(arr);
var text = "";
for (i = 0; i < arr.length; i++) { 
    text += arr[i];
}
console.log(text);
 var res = text.toUpperCase();
 
console.log(res);