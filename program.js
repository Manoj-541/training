//Left angle triangle
// for(let i = 1 ; i <=5; i++){
//     for(let j = 1; j <=5;j++){
//         if(i>=j){
//             document.write("*")

//         }else{
//             document.write("&nbsp")
//         }
//     }
//     document.write("<br>")
// }
//x shape triangle
for(let i = 1 ; i <=5; i++){
       for(let j = 1; j <=5;j++){
            if(i==j || i+j == 6){
                 document.write("*")
    
           }else{
                 document.write("&nbsp;&nbsp;&nbsp;&nbsp")
             }
        }
        document.write("<br>")
    }

