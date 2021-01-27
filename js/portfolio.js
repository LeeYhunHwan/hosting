window.onload=function(){
    const port_box=document.querySelectorAll('.port_wrap>li');
    const frame=document.querySelectorAll('.portfolio_box');
    // const image=document.querySelector('.portfolio_box img');

    function portBox(){
        // var port_boxAW=document.querySelector('.port_wrap>li').clientWidth; 
        var port_boxAW;

        if (port_box != null) {
            port_boxAW = port_box.clientWidth;
        }

        for(var t=0; t<port_box.length; t++){
            port_box[t].style.height=[port_boxAW]+"px";
        }
    }
    portBox();

    // 포트폴리오 호버 이벤트
    for(j=0; j<frame.length; j++){
        frame[j].addEventListener('mouseover',function(){
            const frameH=this.querySelector('.f_box').clientHeight;
            const mov_image=this.querySelector('img');
            const images=this.querySelector('img').clientHeight;
            const totalH=[frameH]-[images];
            mov_image.style.top=[totalH]+"px";
        })
    }

    for(h=0; h<frame.length; h++){
        frame[h].addEventListener('mouseout',function(){
            const frameH=this.querySelector('.f_box').clientHeight;
            const mov_image=this.querySelector('img');
            const images=this.querySelector('img').clientHeight;
            mov_image.style.top="0px";
    
        })
    }
};

window.addEventListener('click', function(){
    const port_box=document.querySelectorAll('.port_wrap>li');
    const port_boxAW=document.querySelector('.port_wrap>li').clientWidth;
    const frame=document.querySelectorAll('.portfolio_box');
    // const image=document.querySelector('.portfolio_box img');

    for(var i=0; i<port_box.length; i++){
        port_box[i].style.height=[port_boxAW]+"px";
    }

    // json 추가 될때 포트폴리오 호버 이벤트
    for(j=0; j<frame.length; j++){
        frame[j].addEventListener('mouseover',function(){
            const frameH=this.querySelector('.f_box').clientHeight;
            const mov_image=this.querySelector('img');
            const images=this.querySelector('img').clientHeight;
            const totalH=[frameH]-[images];
            mov_image.style.top=[totalH]+"px";
        })
    }
    for(h=0; h<frame.length; h++){
        frame[h].addEventListener('mouseout',function(){
            const frameH=this.querySelector('.f_box').clientHeight;
            const mov_image=this.querySelector('img');
            const images=this.querySelector('img').clientHeight;
            mov_image.style.top="0px";
    
        })
    }
});

window.addEventListener('resize', function(){
    // 박스크기
    const port_box=document.querySelectorAll('.port_wrap>li');
    const port_boxAW=document.querySelector('.port_wrap>li').clientWidth;

    for(var i=0; i<port_box.length; i++){
        port_box[i].style.height=[port_boxAW]+"px";
    }
    
})

window.addEventListener('click', function(){
    const port_box=document.querySelectorAll('.port_wrap>li');
    const port_boxAW=document.querySelector('.port_wrap>li').clientWidth;

    for(var i=0; i<port_box.length; i++){
        port_box[i].style.height=[port_boxAW]+"px";
    }
})