// // console.log(window);
// // console.log(document);

// // let element = document.getElementById("demo");
// // element.innerText = "G+"
// // console.log(element);

// let ele = document.getElementById("test");
// // ele.innerText= "<h1>Header</h1>"
// ele.innerHTML = "<h1>Header</h1>"
// console.log(ele);

// //! 
// let ele = document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].innerHTML = "Hello"
// // ele[0].style.backgroundColor = "tomato"
// //! 
// let x= [...ele];
// console.log(x, Array.isArray(x));
// x.map(element =>{
//     element.style.backgroundColor = "orange"
// })
// let ele = document.querySelectorAll("#mru");
// console.log(ele);
// let ele = document.querySelectorAll(".test");
// console.log(ele);

// !
// let ele = document.createElement("h1");
// ele.innerText = "Dynamic creation of html element";
// ele.id = "demo";

// let image = document.createElement("img");
// image.src = "./3606208.jpg";
// console.log(image);
//  document.body.appendChild(ele);
//  document.body.appendChild(image);
// !

// let form = document.querySelector("form");
// let username = document.getElementById("uName");
// let mail = document.getElementById("uMail");
// let pass = document.getElementById("uPass");

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();

//     let uname =  username.value;
//     let umail = mail.value;
//     let upass = pass.value;
//     let userDetails={
//         uname, umail , upass
//     }
//     console.log(userDetails);
//     localStorage.setItem("userData", JSON.stringify(userDetails))
    
    

// })
// !
let form = document.querySelector("form");

let username = document.getElementById("uName");
let password = document.getElementById("uPass");
let check = document.getElementById("check");
 let show = document.getElementById("show");
 let gender = document.getElementsByName("gender");
//  ! hiding  and showing the password values
check.addEventListener("click", event =>{
    //console.log(event.target.checked);
    if(event.target.checked == true){
        password.setAttribute("type","text");
        show.innerText = "Hide password";
    }else{
        password.setAttribute("type","password");
        show.innerText = "Show password";
    }

})


// // console.log(gender);    

form.addEventListener("submit" , event=>{
    event.preventDefault();
    let un = username.value;
    let up = password.value;
    let gen = "";


    for(let i=0;i<=gender.length-1;i++){
        // console.log(gender[i].value);
        // console.log(gender[i].checked);
        if(gender[i].checked == true){
            // console.log(gender[i].value);
            gen = gender[i].value;

        }

    }

    // 
    // 
    // console.log(un , up , gen);

    let userDetails ={
        username:un,
        password:up,
        gender:gen
    }
    console.log(userDetails);
    sessionStorage.setItem("userData" ,
        JSON.stringify(userDetails)
    )
})

