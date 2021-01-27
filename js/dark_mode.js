// window.addEventListener('load',function(){
//     const darkWrap=document.querySelector('.btn_wrap');
//     const darkbtn=document.querySelector('.btn_wrap .btn');
//     const allD=document.getElementsByTagName('li'),
//           allE=document.querySelectorAll('.dark_p .dark_text'),
//           allF=document.querySelectorAll('#skills .skill_wrap>div');
//     let d=true

//     // const allF=document.querySelectorAll('#skills .skill_wrap>div').style.background="#999"

//     darkWrap.addEventListener('click', function(){
//         if(d==true){
//             document.body.style.background="#000";
//             document.querySelector('.container_bg1').style.background="#222";
//             document.querySelector('.container_bg2').style.background="#333";
//             for(h=0; h<allF.length; h++){
//                 allF[h].style.background="#999";
//             }
//             darkbtn.style.left="50%";
//             for(l=0; l<allD.length; l++){
//                 allD[l].style.color="#ddd";
//             }
//             for(m=0; m<allE.length; m++){
//                 allE[m].style.color="#ddd";
//             }
//             d=false
//         }else if(d==false){
//             document.body.style.background="#fff";
//             darkbtn.style.left="0";
//             document.querySelector('.container_bg1').style.background="#e8e8e8";
//             document.querySelector('.container_bg2').style.background="#dfcbc6";
//             for(h=0; h<allF.length; h++){
//                 allF[h].style.background="#fff";
//             }
//             for(l=0; l<allD.length; l++){
//                 allD[l].style.color="#000";
//             }
//             for(m=0; m<allE.length; m++){
//                 allE[m].style.color="#000";
//             }
//             d=true;
//         }
//     })
// })