let arr = ["yousma","arwa" ,"sana","hira","aniqa" ];
let x =""
let div=document.getElementById("array");
for(let i=0; i<arr.length; i++ ){
    x+="<p style='font-size:33px;font-family:serif;color:white; text-transform: capitalize;   background-color:rgb(95, 9, 116); border: 10px 5px 5px 5px brown solid;border-radius:10px ; text-align:center;'>"+arr[i]+"</p>";
}

div.innerHTML=x; 