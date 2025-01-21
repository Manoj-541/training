// //! function expression
// let x = function (){

// console.log("Function is excuting");

// }
// x();

// // //! IIFE
// // (function(){
// //     console.log("Function is IIFE");

// // })();

// //! Arrow function
// let x = ()=>{
//     console.log("Arrow function");
// }
// x();
// let x = (a , b) =>
//     console.log(a+b);
    
// x(5,6);
// let x=_=>{
//     console.log("HI");
//     console.log("HELLO");
//     console.log("Bye");
    
// }
// x();
//! return function
// function demo(a,b){
//     return a+b;
                          
// };
// let x = demo(5,5);
// console.log(x);

// let y = (a,b) => a+b;
// console.log(y(5,5));

// //! Higher order function
// function hof(a){
//     return a();

// };
// let x = hof(function("the higer order function"){

// });

// ! closure function
function x(){
    let a = 10;
    const b = 20;
    console.log(a ,b);
    function y(){
        let p = "JS";
        var q ="ReactJS";
        console.log(p,q);
        function z(){
            const username = "Manoj";
            console.log(username);
            console.log(a);
            console.log(q);
        }
        z();

} y();
}
x();
