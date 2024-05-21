const nav = document.querySelector("div.nav")
const h2Tag = document.querySelector("h2")
const rightTag = document.querySelector("h3.right")
const leftTags = document.querySelectorAll("h3.left")
const imgTag =document.querySelector(".img")

document.addEventListener("scroll", function(){
    const Y = window.scrollY;

    if(Y >= nav.getBoundingClientRect().height){
        nav.classList.add("scrolled");
        h2Tag.style.animation = "0";
    }else{
        nav.classList.remove("scrolled");
        h2Tag.style.animation = "neon 2s infinite";
    }

    const righttop = rightTag.getBoundingClientRect().top;
    const rightbtm = rightTag.getBoundingClientRect().bottom;

    if(righttop < window.innerHeight && rightbtm > 0){
        rightTag.style.animation = `right 1s both`;
    }else{
        rightTag.style.animation = "0"
    }

    leftTags.forEach(left =>{
        let lefttop = left.getBoundingClientRect().top;
        let leftbtm = left.getBoundingClientRect().bottom;

        if(window.innerHeight > lefttop && leftbtm > 0){
            left.style.animation = `left 1s both`
        }else{
            left.style.animation = "0"
        }
    })

  
})
