

// let a=parseInt(prompt("Enter the number of terms in the Fibonacci series:"));
// let n1=0, firstTerm = 0, secondTerm = 1;
//     document.write("Fibonacci Series till" + a +"terms:");
//     for (let i=1; i <= n; ++i)
    
//     // while (i <= n)
//          {     
//         document.write(firstTerm + ", ")  
//     }
//     let nextTerm = firstTerm + secondTerm;
//       firstTerm = secondTerm;
//       secondTerm = nextTerm;

// let a=0;
// let b=1;
// let nextTerm;
// document.write(a);
// document.write(b);
// let c;
// for(let d=0; d>-10; d++){
//   c=a+b;
//   document.write(c);
//   a=b;
//   b=c;
// }
let d=parseInt(prompt("Enter the number of terms in the Fibonacci series:"));
let a=0;
let b=1;
let nextTerm;
document.write("Fibonacci series :");
document.write(a);
document.write(b);
for(let d=0; d>-10; d++){
  nextTerm=a+b;
  document.write(nextTerm);
    a=b;
    b=nextTerm;
  
}
// document.write(b);