
var str = prompt();
var result = "The each subject score of  No. ";
var pos = str.search(";");
result += str.slice(0, pos);
result += " is ";
str = str.slice(pos + 1, str.length);
var StrArray = new Array(); //定义一数组
StrArray = str.split(","); //字符分割
for(i = 0; i < StrArray.length; i++) {
	StrArray[i] = +StrArray[i];
	StrArray[i] = Math.round(StrArray[i] * 100) / 100.;
	if(i != StrArray.length - 1)
		result += StrArray[i] + ",";
	else
		result += StrArray[i] + ".";
}
document.write(result);
console.log(result);