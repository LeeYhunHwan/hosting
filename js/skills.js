window.addEventListener('scroll',function(){
    const area=document.getElementById('skills')
    const scroll=area.getBoundingClientRect().top;
    const percent=document.querySelectorAll('.skill_graph>.graph>div');
    
    // console.log(scroll)

    if(scroll<=134 && scroll>-200){//200 X 범위 조절할것
        for(i=0; i<percent.length; i++){
            percent[i].style.left="0";
        }
    }else if(scroll>134){
        for(i=0; i<percent.length; i++){
            percent[i].style.left="-100%";
        }
    }
})