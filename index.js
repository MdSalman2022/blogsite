//nav item
const sign = document.querySelector(".login")
const regis = document.querySelector(".reg")

//popup button
const login = document.querySelector(".logbtn")
const regbt = document.querySelector(".popup2 .regbtn")

let auth = document.querySelector(".auth")
//popup item
let name = document.querySelector(".name")
const pass = document.querySelector(".pas")
let name2 = document.querySelector(".name2")
const pass2 = document.querySelector(".pas2")

const logo = document.querySelector(".logo")
const hm = document.querySelector("#home")

logo.addEventListener("click", function(e){
  e.preventDefault();
  content.style.display = "block"
  document.documentElement.scrollTop = 0;


})
hm.addEventListener("click", function(e){
  e.preventDefault();
  content.style.display = "block"
  document.documentElement.scrollTop = 0;


})

sign.addEventListener("click", function(e){
  e.preventDefault();
  document.querySelector(".popup").style.display = "flex";
})
document.querySelector(".close").addEventListener("click", function(e){
  e.preventDefault();
  document.querySelector(".popup").style.display = "none";
})


regis.addEventListener("click", function(e){
  e.preventDefault();
  document.querySelector(".popup2").style.display = "flex";
})

const closebt =document.querySelector(".popup2 .close") 
closebt.addEventListener("click", function(e){
  e.preventDefault();
  document.querySelector(".popup2").style.display = "none";
})

login.addEventListener("click", function(e){
  e.preventDefault();  
  if(name.value == ""){
    name.style.border = "1px solid red"
    name.placeholder = "Please Enter Your Username"
  }
  else if(pass.value == ""){
    pass.style.border = "1px solid red"
    pass.placeholder = "Please Enter Your Password"
  }
  else{
  document.querySelector(".popup").style.display = "none";
  name = name.value
  name2 = name
  console.log(name);
  console.log(name2);
  
  auth.innerHTML= `<li><a href="" class="login auth">${name} <i class="fa-solid fa-user"></i> </a></li>`

  comments.style.display="block"


}
})
let email = document.querySelector(".email")
let phn = document.querySelector(".phn")
regbt.addEventListener("click", function(e){
  e.preventDefault();  
  if(name2.value == ""){
    name2.style.border = "1px solid red"
    name2.placeholder = "Please Enter Your Username"
  }
  else if(pass2.value == ""){
    pass2.style.border = "1px solid red"
    pass2.placeholder = "Please Enter Your Password"
  }
  else if(email.value == ""){
    email.style.border = "1px solid red"
    email.placeholder = "Please Enter Your Email"
  }
  else if(phn.value == ""){
    phn.style.border = "1px solid red"
    phn.placeholder = "Please Enter Your Phone Number"
  }
  else{
  document.querySelector(".popup2").style.display = "none";
  name2 = name2.value

  name = name2
  console.log(name);
  console.log(name2);
  auth.innerHTML= `<li><a href="" class="auth">${name2} <i class="fa-solid fa-user"></i> </a></li>`
  console.log(auth);
  
  comments.style.display="block"
}
})

const link = document.querySelectorAll(".link");
const content = document.querySelector(".content")
const pcontent = document.querySelector(".post-content")
const comment = document.querySelectorAll(".comm");
const comments = document.querySelector(".comment");

link.forEach(item => {
  item.addEventListener('click', event => {
    console.log("hello");
      content.style.display = "none"
      pcontent.style.display = "block"
      document.documentElement.scrollTop = 0;
  })
})


comment.forEach(function(comment) {
comment.addEventListener("click", function(e){
  e.preventDefault();
  document.documentElement.scrollTop = 0;
  document.querySelector(".popup2").style.display = "flex";
  regbt.addEventListener("click", function(e){
    e.preventDefault();    
    document.documentElement.scrollTop = 2000;
    pcontent.style.display = "block"
    comments.style.display="block"
  })
})
})
// comment section 

const textarea = document.querySelector("textarea")
const resbtn = document.querySelector(".resbtn")
const canbtn = document.querySelector(".canbtn")
const myres = document.querySelector(".myresponse")

resbtn.addEventListener("click", function(e){
    e.preventDefault();
    console.log(textarea.value);
    myres.innerHTML = `<p><i class="fa-solid fa-user"></i> <span>${name2}</span></p>
    <p>${textarea.value}</p>
    <br>`
  })  







// love section 

// const love = document.querySelectorAll(".love")
const love = document.querySelector(".love")
let count = document.querySelector(".count")

love.addEventListener("click", function(e){
  e.preventDefault();
  love.classList.toggle("col");
  if(love.classList.contains("col")){
    let sum = parseInt(count.innerHTML);
    count.innerHTML = ++sum
  }
  else{    
  let sum = parseInt(count.innerHTML);
  count.innerHTML = --sum
  }
})
const heart = document.querySelectorAll(".heart")
let count2 = document.querySelector(".count2")

heart.forEach(function(heart) {
  heart.addEventListener('click',function(e){
    e.preventDefault();
    heart.classList.toggle("col");
    if(heart.classList.contains("col")){
      let sum = parseInt(count2.innerHTML);
      count2.innerHTML = ++sum
    }
    else{    
    let sum = parseInt(count2.innerHTML);
    count2.innerHTML = --sum
    }
  })
})

const viewBlog = document.querySelector(".viewBlog")
const blogcontent = document.querySelector(".blog-content")

viewBlog.addEventListener("click", function(e){
  e.preventDefault();

      content.style.display = "none"
      blogcontent.style.display = "block"
      document.documentElement.scrollTop = 0;
})



const blink = document.querySelectorAll(".blink");

blink.forEach(items => {
  items.addEventListener('click', function(e){
    e.preventDefault();
    // console.log("hello");
      blogcontent.innerHTML = ""
      pcontent.style.display = "block"
      document.documentElement.scrollTop = 0;
  })
})


const tlink = document.querySelectorAll(".tlink");
const catpage = document.querySelector(".category-page")
const tag = document.querySelector(".tag")
const tags = document.querySelector(".tags")

tlink.forEach(item => {
  item.addEventListener('click', function(e){
    e.preventDefault();
      blogcontent.innerHTML = ""
      catpage.style.display = "block"
      let tagline = tag.innerText
      let taglist = item.innerText

      tagline = taglist
      tag.innerHTML = "#"+tagline
      // tagline = this.tlink.innerText 
      console.log(tagline);
      console.log(taglist);

      document.documentElement.scrollTop = 0;
  })
})

window.addEventListener("scroll", function(){
  let navbar = document.querySelector("navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
})
























// const btn = document.querySelector(".btn")
// const einput = document.querySelector(".einput")


// btn.addEventListener("click", function(e){
//   e.preventDefault();
//   einput = einput.value;
//   console.log(einput);
// })


// post.forEach(item => {
//   item.addEventListener('click', event => {
//     console.log("hello");
//       content.innerHTML = ""
//       pcontent.style.display = "block"
//       document.documentElement.scrollTop = 0;
//   })
// })


// love.forEach(function(love) {
//   love.addEventListener('click',function(e){
//     e.preventDefault();
//     love.classList.toggle("col");
//     if(love.classList.contains("col")){
//       let sum = parseInt(count.innerHTML);
//       count.innerHTML = ++sum
//     }
//     else{    
//     let sum = parseInt(count.innerHTML);
//     count.innerHTML = --sum
//     }
//   })
// })