// JavaScript Document
window.onload=function (){
       var  container =document.getElementById('container');
var list=document.getElementById('list');
var buttons=document.getElementById('buttons').getElementsByTagName('span');
var prev=document.getElementById('prev');
var next=document.getElementById('next');
var index=1;
var timer;
/*点亮小圆点*/
function showButton(){

           for(var i=0;i<buttons.length;i++){
               if(buttons[i].className=='on'){
                   buttons[i].className='';
break;
}
           }
           buttons[index-1].className='on';
}

       /*箭头点击事件**/
function animate(offset){//封装按钮左右点击，传参offset
var newLeft=parseInt(list.style.left)+offset;
var time=200;//位移总时间
var interval=1;//位移间隔
var speed=offset/(time/interval);//每次位移量


function go(){
               if((speed<0 && parseInt(list.style.left)>newLeft) || (speed >0&&parseInt(list.style.left)<newLeft)){
                   list.style.left=parseInt(list.style.left)+speed+'px';

/*定时器*/
setTimeout(go,interval);
}
               else{

                   list.style.left=newLeft+'px';
/* 判断是否滚动到附属图上，滚动到附属图上归位*/
if(newLeft> -980){
                       list.style.left = -4900 + 'px';
}
                   if(newLeft< -4900){
                       list.style.left = -980 + 'px';
}
               }
           }

               go();

}

       function play(){

           timer=setInterval(function (){
               next.onclick();
},4900);
}
       function stop(){
           clearInterval(timer);
}
       next.onclick=function (){
           if(index==5){
               index=1;
}
           else{
               index +=1;
}

                   showButton();
animate(-980);//点击右箭头-980
}
       prev.onclick=function (){
           if(index==1){
               index=5;
}
           else{
               index -= 1;
}

           showButton();
animate(-980);//点击左箭头980
}

       for(var i=0;i<buttons.length;i++){
           //原始值
buttons[i].onclick=function (){
               if(this.className=='on'){
                   return;
}

               var myIndex=parseInt(this.getAttribute('index'));
var offset=-980 *(myIndex -index);
animate(offset);
index=myIndex;
showButton();
}
       }
   container.onmouseover=stop;
container.onmouseout=play;


}