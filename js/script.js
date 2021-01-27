// scroll event
window.addEventListener('scroll', function(){
    const aboutMe=document.getElementById('aboutMe');
    const aboutMeH=aboutMe.getBoundingClientRect().top;
    const header=document.getElementById('header');
    const nav=document.querySelectorAll('#nav a')
    const mobBtn=document.querySelectorAll(".menu_btn i");
    // const darkMode=document.querySelector('.dark_mode p')

    for(k=0; k<nav.length; k++){
        nav[k].addEventListener('mouseover',function(){
            this.style.color="#ffe100";
        })
        nav[k].addEventListener('mouseout',function(){
            if(aboutMeH<=0){
                this.style.color="#000";
            }else if(aboutMeH>0){
                this.style.color="#fff";
            }
        })
    }

    if(aboutMeH<=80){
       header.style.boxShadow="3px 3px 10px #000";
       header.style.background="#fff";
       for(var j=0; j<nav.length; j++){
            nav[j].style.color="#000";
        }
       for(var i=0; i<mobBtn.length; i++){
           mobBtn[i].style.background="#000";
       }
    //    darkMode.style.color="#000"


    }else if(aboutMeH>80){
        header.style.boxShadow="none";
        header.style.background="transparent";
        for(var j=0; j<nav.length; j++){
            nav[j].style.color="#fff";
        }
        for(var i=0; i<mobBtn.length; i++){
            mobBtn[i].style.background="#fff";
        }
        // darkMode.style.color="#fff"
    }
})

window.onload=function(){
    // mobile_nav
    var mobBtn=document.querySelector('.menu_btn');
    var mobMenu=document.querySelector('.mobile_menu');
    var i=true;

    mobBtn.onclick=function(){
        if(i==true){
            mobBtn.children[0].style.transform="rotate(-405deg)";mobBtn.children[0].style.top="11.5px";
            mobBtn.children[1].style.left="100%";
            mobBtn.children[2].style.transform="rotate(-495deg)";
            mobBtn.children[2].style.top="11.5px"
            mobMenu.style.transition = "all .3s";
            mobMenu.style.height = "150px";
            i=false
        }else if(i==false){
            mobBtn.children[0].style.transform="rotate(0)";
            mobBtn.children[0].style.top="0px";
            mobBtn.children[1].style.left="0px";
            mobBtn.children[2].style.transform="rotate(0)";
            mobBtn.children[2].style.top="23px"
            mobMenu.style.transition = "all .3s";
            mobMenu.style.height = "0px";
            i=true
        }
    }

    // #main effect
    var border1=document.querySelector('.border1');
    var border2=document.querySelector('.border2');
    var border3=document.querySelector('.border3');
    var border4=document.querySelector('.border4');
    var progress;

    function setTimer(){
        progress=setInterval(function(){
        border1.style.left="0";
        border2.style.top="0";
        border3.style.right="0";
        border4.style.bottom="0";
    },1500)}

    function setTimer2(){
        progress=setInterval(function(){
        border1.style.left="-100%";
        border2.style.top="-100%";
        border3.style.right="-100%";
        border4.style.bottom="-100%";
    },6000)}
    setTimer();
    setTimer2();
}