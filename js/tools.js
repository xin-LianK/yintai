
//alert(1);
// 求数组中的最大值
function getMax(arr){
	var max=arr[0];  //声明一个变量  把数组的第一个值付给了max
	for (var i=1;i<arr.length;i++){   //for循环  也是遍历
		if (max<arr[i]) {      // 判断数组中的每个数和max比较大小 如果>max
			max=arr[i]         //把最大的值给了max 通过for循环接着比较
		}
	}
	return max;                    //返回max的值
}

// 删除数组中的指定元素
function delVal(arr,val){     // 形参 第一个你需要修改的数组
	                              //   第二个 你要删除的值 比如99
	var arr2=[];             // var 声明一个新的数组arr2
	// var j=0;
	for (var i in arr){        //这里就是遍历 用for循环 for in  都行
		                          //这一步就是把你需要修改的 也就是
		                          //第一个数组arr  里面的没一个值都拿出来
		if(arr[i]!=val){          //比较 相同的数删除 删除写不出来 所以
			                      //这里用不等于 就不用删除了 直接写出来
			// arr2[j]=arr[i];
			// j++;
			arr2[arr2.length]=arr[i];  //当i等于1时 就把arr1 也就是第二个
			                           //数值赋给arr2  前提条件不等于
		}
	}
	return arr2;
}

// 删除数组中的重复元素
function delRep(arr){
	var arr2=[arr[0]];   //声明一个数组arr2 此时已经给新数组里第一个值
	                     //等于原来函数的第一个值  因为后面要做比较 第一
	                     //值前面什么都没有 肯定不会重复啊
	for (var i=1;i<arr.length;i++){  //也是取arr中的每一个数值
		var a=true;        //1.默认给a赋值为真
		for (var j=0;j<arr2.length;j++){ //这就是取arr2中的值
			                             //取出来才能和arr作比较
			if (arr[i]==arr2[j]) { //把arr中的值给了arr2 等于的时候说明重
				                   //复了
				a=false;          //执行条件语句 a=false
			}                  //注意：当a=false的话下面的if就不会执行了
		}
		if (a) {   // 此时a默认为真  执行判断条件
			arr2[arr2.length]=arr[i];  //就可以把第一个数组的下标为i的值
			                           //赋给arr2
		}
	}
	return arr2;
}


// 给数组末尾添加一个或者多个数  返回添加后数组长度
function Push(){    // 很明显是在原来数组的基础上去变化
	var arrs=arguments[0];  //根据上图可知arrs相当于原来数组 因为他们
	                      //的地址一样，所以指向的地址里面有原来数组值
	                      //arguments[0]就是你添加的数组里的第一个数值
	for (var i=1;i<arguments.length;i++){  //取出你需要添加的数组中的
		                                   //每一个值
		                                   //上面已经有了第一值
		                                   //所以此时的i=1
		arrs[arrs.length]=arguments[i];  //把你取出的值给了arrs
	}
	return arr.length;
}


// 给数组开头添加一个或者多个数  返回添加后数组长度
// function unshift(){
// 	var oldVal=[];
// 	var arrs=argumengts[0];
// 	for (var i=1;i<arrs.length;i++){
// 		oldVal[oldVal.length]=arr[i];
// 	}
// 	oldVal=0;
// 	for (var i=0;i<arguments.length;i++){
// 		arrs[arrs.length]=arguments[i];
// 	}
// 	for (var i=0;i<oldVal.length){
// 		arguments[arguments.length]=oldVal[i];
// 	}
// 	return arr.length;
// }

// 删除数组末尾一个值  并返回被删除值
function delEnd(arr){
	var end=arr[arr.length-1];
	arr.length=arr.length-1
	return end;
}
// // 删除数组开头一个值  兵返回被删除值       未完成
// function delStart(arr){
// 	var start=arr[0];
// 	var newArry=[];
// 	for(var i=1;i<arr.length;i++){
// 		newArry[newArry.length]=arr[i]
// 	}
// 	arr.length=0;
// 	for(var i=0;i<newArry.length;i++){
// 		arr[arr.length]=newArry[i];
// 	}
// 	return start;
// }

// 数组排序    冒泡思想
function sort(arr){   //这个就很好理解啊  每一个数值都和其他的设置作
	                  //比较么 如果后面的数比你当前的数大了 俩人换
	                  //一下位置他不就到前面了 依次类推
	var c;     //因为要换位置 所以有一个中间值
	           // 就好比  a=10  b=20  换一下  找个c
	           // 先把a给了c  a空了  c=a=10
	           // 再把b给了a  b空了  a=b=20
	           // 再把c给了b  c空了  b=c=10
	           // a=20 b=10  这不就换了换
	for (i=0;i<arr.length-1;i++){ //取出数组的值和他后边的一一作比较么
		                         // 假如判断到最后了 后面已经没有值了
		                         // 就不要排了啊 直接length-1 就把最
		                         // 后一个排除了么  不判断了  高效
		for (j=i+1;j<arr.length;j++){ //i+1  不就是你取那个值之后紧跟的值
		                              //么 这里不能减1 否则你取得那个值
		                              //就不会和最后一个值作比较了
			if (arr[i]<arr[j]) {  //判断 你取得那个值和之后的值作比较
			  c=arr[i];         //  大的话就换一下位置 那不就到前面了
			  arr[i]=arr[j];
			  arr[j]=c;
			}
		}
	}
}


// 找出字符串中的特定字符串出现的位置，打印出来
// function 
// 	var arr=[];
// 	var index=0;
// 	while(index!=-1){
// 		if (index==0) {
// 			index=str.indexOf("sxuek")
// 		}else{
// 			index=str.indexOf("sxuek",index)
// 		}
// 		if (index!=-1) {
// 			arr[arr.length]=index;
// 			index++;
// 		}
// 	}
// 	alert(arr);


// 解决IE中类名的问题
//            要获取元素类名【string】  插曲元素范围【obj】
function getClass(classname,range){
	var c=document.getElementsByClassName;
	// c[0].style.backgroundColor="pink";
	if (c) {  //当前浏览器是否支持classname获取
		// alert("支持");
		return range.getElementsByClassName(classname);
		// d[0].style.backgroundColor="pink"
	}else{
		// alert("不支持");
		var all=range.getElementsByTagName("*");
		var arr=[];
		//all  [div,div,civ.....]
		for (var i=0;i<all.length;i++){
			// if(charclass(all[i],classname))
			if (all[i].className==classname) {
				arr.push(all[i]);
			}
		}
		return arr;
	}
}

// 检查元素的类名中是否含有
function charclass(tagname,aclass){
	var arr=tagname.split(' ');
	for (var i=0;i<arr.length;i++){
		if (tagname[i]==aclass) {
			return true;
		}
	}
	return false;
}


//简化  
// 获取元素
// ID        #box
// class     .box
// tagname   div
//页面加事件

function $(select,range){
	var range=range||document;
	if(typeof select=="string"){
//		console.dir(1);
		if(select.charAt(0)=="#"){
			return document.getElementById(select.substr(1));
		}
		if(select.charAt(0)=="."){
			return getClass(select.slice(1),range);
		}
		if(/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(select)){
			return range.getElementsByTagName(select)
		}
	}else if(typeof select=="function"){
		window.onload=select;
	}
}

//获取文本内容
//设置文本内容
//text(obj)
function text(obj,Val){
	if(val==undefined){
		if(obj.textContent==undefined){
			return obj.innerText;
		}else{
			return obj.textContent;
		}
	}else{
		if(obj.textContent==undefined){
			obj.innerText=val;
		}else{
			obj.textContent=val;
		}
	}
}

//获取通用样式
                    //属性
function getStyle(obj,attr){
	if(obj.currentStyle==undefined){
		return getComputedStyle(obj,null)[attr];//要点  加中括号
	}else{
		return obj.currentStyle[attr];
	}
}
