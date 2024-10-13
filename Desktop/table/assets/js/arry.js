let arr = ["yousma","arwa" ,"sana","hira","aniqa" ];
let x =""
let div=document.getElementById("array");
for(let i=0; i<arr.length; i++ ){
    
    x+="<p>"+arr[i]+"</p>";
}

div.innerHTML=x; 