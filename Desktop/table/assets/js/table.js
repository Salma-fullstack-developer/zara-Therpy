let a =parseInt(prompt("enter a int num"));
let b =parseInt(prompt("enter a final num"));
let number=parseInt(prompt("enter a final num"));
document.write("<h1>the table of "+number+" is:</h1>");
document.write("<div id='body'>");
for(let i=1; i<=10;i++)
    for(let i=a; i<=b; i++)
 {
        document.write(number+"x"+i+"="+number*i+"<br>")     
}
document.write("</div>");