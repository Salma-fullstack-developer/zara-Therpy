let a =parseInt(prompt("enter a int num"));
let b =parseInt(prompt("enter a final num"));
let number=parseInt(prompt("enter a num"));
document.write("<h1>the table of "+number+" is:</h1>");
document.write("<div id='body'>");
document.write("<table border='1'>")
for(let i=a; i<=b;i++)
{
  if(i%2 == 0) {     
        document.write("<tr style='background-color:blue;color:white'><td>"+ number+"</td><td>*</td><td>"+i+"</td><td>=</td><td>"+ number*i+"</td></tr>")  
} else{
        document.write("<tr style='background-color:yellow;color:white'><td>"+ number+"</td><td>*</td><td>"+i+"</td><td>=</td><td>"+ number*i+"</td></tr> <br>")  
}


} 

