window.onload=function(){
//	banner左边列表
	var banmidleft=$('.ban-mid-left')[0];
	var bianbox=$('.dhli',banmidleft)
	console.log(bianbox)
	for (var i=0;i<bianbox.length;i++){
		xx(bianbox[i]);
	}
	function xx(bianbox){
		var bian=$('.bian',bianbox)[0];		
		hover(bianbox,function(){
			bian.style.display="block";
		},function(){
			bian.style.display="none";
		})
	}
	
	
	
//	顶部开始
	var topmidleft=$('.top-mid-left')[0];
	var topmidleft0=$('.top-mid-left-2',topmidleft);
	var wx=$('.wx',topmidleft);
	for(var i=0;i<topmidleft0.length;i++){
//			hover(box[i]);
			topmidleft0[i].index=i;
			hover(topmidleft0[i],function(){
				wx[this.index].style.display="block"
				topmidleft0[this.index].style.background="#FFFFFF";
			},function(){
				topmidleft0[this.index].style.background="";
				wx[this.index].style.display="none"
			})
	}
	
//	顶部结束
	var xxl=$('.xxl')[0];
	console.dir(xxl)
	var ol=$('ol',xxl)[0]
	hover(xxl,function(){
		ol.style.display="block"
		xxl.style.background="#FFFFFF";
	},function(){
		xxl.style.background="";
		ol.style.display="none"
	})
	
//	楼层开始
	var floor=$(".floor")[0];
	var laders=$("span",floor);  //  楼梯
	var article=$(".con-bot");  //、文章
	var mask=$("div",floor);
	var jian2=$(".jiange2")[0];
	var jian2top=jian2.offsetTop;
//	console.dir(jian2)
	floor.style.display="none";
	for (var i=0;i<mask.length;i++){
		mask[i].style.top=50*i+(i*5)+"px";    //因为给遮罩设置了绝对定位  所以遮罩都挤到了一起  这一步就是让他们分开
		mask[i].style.display="none";
	}
	var arttop=[];
	for (var i=0;i<article.length;i++){
		arttop.push(article[i].offsetTop);
	}
	window.onscroll=function(){
		var top=document.body.scrollTop||document.documentElement.scrollTop;
//		if(top=3000){
//			floor.style.display="block";
//		}
		for (var i=0;i<arttop.length;i++){
			if(top+200>arttop[i]){
				for (var j=0;j<mask.length;j++){
//					mask[i].style.top=50*i+(i*5)+"px";
					mask[j].style.display="none";
				}
					mask[i].style.display="block";
			}
		}
		if(top>jian2top){
			floor.style.display="block";
		}else if(top<jian2top){
			floor.style.display="none";
			
		}
	}
	for (var i=0;i<laders.length;i++){
		laders[i].index=i;
		laders[i].onclick=function(){
			animate(document.body,{scrollTop:arttop[this.index]},500);
			animate(document.documentElement,{scrollTop:arttop[this.index]},500);
		}
	}
//	楼层结束


//	logo动态
	var box3=getClass("ss-mid",document)[0];
	var logo=box3.getElementsByTagName('a');
//	console.dir(logo.length)
	logo[0].style.display='block'
	var l=0;
	setInterval(function(){
		l++;
		if(l==logo.length){l=0}
		for (var i=0;i<logo.length;i++){
			logo[i].style.display="none";
		}
		logo[l].style.display="block";
	},1000)
	
	
//banner轮播图
	var box=getClass("ban-box",document)[0];
	var mid=getClass("img-box",box)[0];
	var as=mid.getElementsByTagName("a");
	var lis=mid.getElementsByTagName("li");
//	console.dir(lis)
	var index=0;
	as[0].style.zIndex="2";
	lis[0].style.backgroundColor="#e5004f";
	var t=setInterval(move,1000)
	function move(){
		index++;
		if(index==as.length){index=0}
		for(var i=0;i<as.length;i++){
			as[i].style.zIndex="0";
			lis[i].style.backgroundColor="";
		}
		as[index].style.zIndex="2";
		lis[index].style.backgroundColor="#e5004f";
	}
	mid.onmouseover=function(){
		clearInterval(t);
	}
	mid.onmouseout=function(){
		t=setInterval(move,1000);
	}
	
	
	for (var i=0;i<lis.length;i++){
		lis[i].inde=i;
//		console.dir(lis.inde)
		lis[i].onmouseover=function(){
			for(var j=0;j<lis.length;j++){
				lis[j].style.backgroundColor="";
				as[j].style.zIndex="0";
			}
			as[this.inde].style.zIndex="2";
			lis[this.inde].style.backgroundColor="#e5004f";
		}
	}
	var box1=getClass("anniu-box",mid)[0];
//	console.dir(box1)
	var btn1=box1.getElementsByClassName("anniu-right")[0];
//	console.dir(btn)
	btn1.onclick=function(){
		move();
	}
	var btn2=box1.getElementsByClassName("anniu-left")[0];
//	console.dir(btn)
	btn2.onclick=function(){
		index--;
		if(index<0){index=as.length-1}
		for(var i=0;i<as.length;i++){
			as[i].style.zIndex="0";
			lis[i].style.backgroundColor="";
		}
		as[index].style.zIndex="2";
		lis[index].style.backgroundColor="#e5004f";
	}
	
//	banner右边移动
	var banLeft=$(".ban-mid-right",box)[0];
	banLeft.onmouseover=function(){
		animate(banLeft,{marginRight:10})
	}
	banLeft.onmouseout=function(){
		animate(banLeft,{marginRight:0})
	}
//	console.dir(banLeft)



	
////	banner上的选项卡
//	var box4=getClass("ban-lists-box",document);
//	var lists1Box=getClass("ban-mid-left",document)[0];
//	var lists1=lists1Box.getElementsByTagName("li");
////	console.dir(lists1)
//	for (var i=0;i<lists1.length;i++){
//		lists1[i].ints=i;
////		console.dir(i)
//		lists1[i].onmouseover=function(){
////			for (var j=0;j<box4.length;j++){
////				box4[j].style.display="none";
////			}
//			box4[this.ints].style.display="block";
//		}
////		for (var j=0;j<box4.length;j++){
////			box4[j].onmouseout=function(){
////				box4[this.ints].style.display="none";
////			}
////		}
//		lists1[i].onmouseout=function(){
//			box4[this.ints].style.display="none";
//		}
//	}
	
	
	
//	选项卡1
	var box2=getClass("box-up",document)[0];
	var dians=box2.getElementsByTagName('div');
//	console.dir(dians)
	var links=box2.getElementsByTagName('a');
//	console.dir(links)
	var tiaos=getClass("box-mid",document);
	var lists=getClass('box-down',document)	
//	console.dir(lists)
//	console.dir(lists[0])
	tiaos[0].style.backgroundColor="#e5004f";
	lists[0].style.display="block";
	links[0].style.fontWeight="bolder";
	dians[0].style.display='block';
	for (var i=0;i<links.length;i++){
		links[i].index=i;   //集合没有属性 所以此时必须加下标

		links[i].onmouseover=function(){
			for (var k=0;k<tiaos.length;k++) {
			tiaos[k].index=k;
				tiaos[k].style.backgroundColor='black';
				tiaos[this.index].style.backgroundColor="#e5004f";
//				tiaos[k].innerHTML='';
//				tiaos[this.index].innerHTML=this.index;	
				links[k].style.fontWeight="normal";
			}
			for (var j=0;j<lists.length;j++){
			lists[j].style.display='none';
			dians[j].style.display='none';
			}
			lists[this.index].style.display="block";
			links[this.index].style.fontWeight="bolder";
			dians[this.index].style.display="block"
		}
	}


//选项卡2
var as1Box=getClass("con-mid-right-top",document)[0];
var as1=as1Box.getElementsByTagName("a");
var as2Box=$('.con-mid-right-mid',document)[0];
var as2=$('.con-mid-right-mid-1',as2Box);
as2[0].style.backgroundColor="#e5004f"
//console.dir(as2Box)
var numBox=getClass("con-mid-right-bot",document);
var dian1s=$('div',as1Box)
dian1s[0].style.display="block"
numBox[0].style.display="block";
//console.dir(numBox)
for (var i=0;i<as1.length;i++){
	as1[i].index=i;
	as1[i].onmouseover=function(){
		for (var j=0;j<numBox.length;j++){
			numBox[j].style.display="none";
			dian1s[j].style.display="none";
			as2[j].style.backgroundColor=""
		}
			numBox[this.index].style.display="block";
			as2[this.index].style.backgroundColor="#e5004f";
			dian1s[this.index].style.display="block"
		}
}


//选项卡小三
var tabBox=getClass("con-bot-two",document);
//console.dir(tabBox)
for (var k=0;k<tabBox.length;k++){
	hell(tabBox[k])
}
//hell(tabBox[0])
//hell(tabBox[1])
function hell(tabBox){
	var tabBox1=$('.con-bot-two-box',tabBox)[0];
//	console.dir(tabBox1)
	var tab=tabBox.getElementsByTagName('a');
	var imgs=$('img',tabBox1);
	var bW=parseInt(getStyle(imgs[0],'width'))
	//box2.style.width=bW*imgs.length+"px";
	//console.dir(tab)
	var anniuBox=$('.con-bot-two-mid',tabBox)[0];
	var anniu1=$('.con-bot-two-mid-left',anniuBox)[0]
//	console.dir(anniu1)
	var anniu2=$('.con-bot-two-mid-right',anniuBox)[0]
	var cil=$('.cilcle',tabBox)[0]
	var cil1=$('div',cil);
	cil1[0].style.backgroundColor="red"
	//console.dir(cil1[0])
	var o=0;
	anniu2.onclick=function(){
		o++;
		if(o==imgs.length){o=imgs.length-1};
		animate(tabBox1,{marginLeft:-bW*o})
		for (var i=0;i<cil1.length;i++){
			cil1[i].style.backgroundColor="#333";
		}
		cil1[o].style.backgroundColor="red";
	}
	anniu1.onclick=function(){
		o--;
		if(o<0){o=0};
		animate(tabBox1,{marginLeft:-bW*o})
		for (var i=0;i<cil1.length;i++){
			cil1[i].style.backgroundColor="#333";
		}
		cil1[o].style.backgroundColor="red";
	}
	tabBox.onmouseover=function(){
		animate(anniu1,{marginLeft:0})
		animate(anniu2,{marginRight:0})
	}
	tabBox.onmouseout=function(){
		animate(anniu1,{marginLeft:-30})
		animate(anniu2,{marginRight:-30})
	}
}



var tabBox3=getClass("con-bot-one",document);
//console.dir(tabBox3)
for (var k=0;k<tabBox3.length;k++){
	holl(tabBox3[k])
}
function holl(tabBox3){
	var tabBox4=$(".con-bot-one-bot-2",tabBox3)[0];
	var tabBox5=$(".con-bot-one-bot-1",tabBox3)[0];
//	console.dir(tabBox5)
	var tabBox6=$(".con-bot-one-bot-3",tabBox3)[0];
	var tab1=$('.yeyp',tabBox4);
//	console.dir(tab1)
	var dw=parseInt(getStyle(tab1[0],"width"))
	tab1[0].style.left=0;
	
//	console.dir(dw)
	var a=0;
	var b=0;
	setInterval(move1,2000)
	function move1(){
		b++;
		if(b==tab1.length){b=0}
		tab1[b].style.left=dw+"px";
		animate(tab1[a],{left:-dw},500);
		animate(tab1[b],{left:0},500);
		a=b;
	}
	tabBox6.onclick=function(){
//		b++;
//		if(b==tab1.length){b=0}
//		tab1[b].style.left=dw+"px";
//		animate(tab1[a],{left:-dw},500);
//		animate(tab1[b],{left:0},500);
//		a=b;
		move1()
	}
	var flag=true;
	tabBox5.onclick=function(){
		if(flag){
			flag=false;
			b--;
			if(b<0){b=tab1.length-1}
			tab1[b].style.left=-dw+"px";
			animate(tab1[a],{left:dw},500);
			animate(tab1[b],{left:0},500);
			a=b;
		}else{
			return false;
		}
		
	}
}




//边框线运动
	var oness=$(".con-bot-three",document)
	console.dir(oness)
//	for (var j=0;j<oness.length;j++){
//		var n=bian(oness);
////		console.dir(n)
//	}
//function bian(oness){
	var e=0;
	for (var j=0;j<oness.length;j++){
	if(e==oness.length){return;}
	var ones =$("a",oness[e]);
	for(var i=0;i<ones.length;i++){
	ones[i].onmouseover=function(){
		animate($('.bt',this)[0],{width:272},1000)
		animate($('.bl',this)[0],{height:182},1000)
		animate($('.br',this)[0],{height:182},1000)
		animate($('.bb',this)[0],{width:272},1000)
	}
	ones[i].onmouseout=function(){
		animate($('.bt',this)[0],{width:0},1000)
		animate($('.bl',this)[0],{height:0},1000)
		animate($('.br',this)[0],{height:0},1000)
		animate($('.bb',this)[0],{width:0},1000)
	}
	}
	e++;
}

}