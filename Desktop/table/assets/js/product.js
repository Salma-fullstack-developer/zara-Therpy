let product =[
   {
    name:"appleiphone",
    price:49800,
    description:"Tech giant Vivo introduced the V40 series of smartphones, which appears to be very close to hitting the local and global markets at the same time. There's no denying that Vivo's V40 will be one of the most advanced smartphones on the market, as it offers the same superior specifications as its predecessors, such as a huge display, powerful processor ",
    image:"assets/image/AppleiPhone16Pro-s.jpg",
    },
    {
      name:"infnix",
      price:69800,
      description:"Tech giant Vivo introduced the V40 series of smartphones, which appears to be very close to hitting the local and global markets at the same time. There's no denying that Vivo's V40 will be one of the most advanced smartphones on the market, as it offers the same superior specifications as its predecessors, such as a huge display, powerful processor ",
      image:"assets/image/InfinixZero40-s.jpg"
    },
{
   name:"oppo",
      price:69800,
      description:"Tech giant Vivo introduced the V40 series of smartphones, which appears to be very close to hitting the local and global markets at the same time. There's no denying that Vivo's V40 will be one of the most advanced smartphones on the market, as it offers the same superior specifications as its predecessors, such as a huge display, powerful processor ",
      image:"assets/image/OppoA3x-s.jpg"
},
{
   name:"sparx",
      price:69800,
      description:"Tech giant Vivo introduced the V40 series of smartphones, which appears to be very close to hitting the local and global markets at the same time. There's no denying that Vivo's V40 will be one of the most advanced smartphones on the market, as it offers the same superior specifications as its predecessors, such as a huge display, powerful processor ",
      image:"assets/image/SparxNeo5Pro-s.jpg"
},
{
   name:"vivo",
      price:69800,
      description:"Tech giant Vivo introduced the V40 series of smartphones, which appears to be very close to hitting the local and global markets at the same time. There's no denying that Vivo's V40 will be one of the most advanced smartphones on the market, as it offers the same superior specifications as its predecessors, such as a huge display, powerful processor ",
      image:"assets/image/VivoV40-s.jpg"
}

    ];
    let x="";
    for(let keys in product){
      x+=`<tr>
<td>${product[keys].name}</td>
<td>${product[keys].price}</td>
<td>${product[keys].description}</td>
<td>img src="${product[keys].image}"></td>
 </tr>`
    }
    document.querySelector("#data").innerHTML
    =x;