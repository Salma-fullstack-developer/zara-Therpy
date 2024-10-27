function firstFunction(){
  let uname =document.querySelector ("#uname").value;
  let uqulification =document.querySelector ("#uqulification").value;
  let uworkexptrience =document.querySelector ("#uworkexprience").value;
  let data =document.querySelector("#data");
  let data1 =document.querySelector("#data1");
  let data2 =document.querySelector("#data2");

if(uname&& uqulification && uworkexptrience){
  data.innerHTML=uname;
  data1.innerHTML=uqulification;
  data2.innerHTML=uworkexptrience;
}else{
  alert ("please input data.");
 
  
}
 }
// alert()
