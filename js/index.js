{
	let list=document.querySelectorAll(".neirong .neirong-img1");
	list.forEach(function(ele){
		lunbo(ele);
	});
	function lunbo(ele){
		let list=ele.querySelector(".neirong-img1 .list");
		let list1=ele.querySelectorAll(".neirong-img1 .list1");
		let left=ele.querySelector(".neirong-jiaotou2");
		let right=ele.querySelector(".neirong .neirong-jiaotou3");
		let yuan=ele.querySelectorAll(".neirong .neirong-yuan1");
		let size=list1.length;
		let n=0;
		left.onclick=function(){
			n--;
			if(n<0){
				n==0;
				return;
			}
			list.style.marginLeft=-n*296+"px";
			yuanColor();
			
		}
		right.onclick=function(){
			n++;
			if(n>=size){
				n=size-1;
				return;
			}
			list.style.marginLeft=-n*296+"px";
			yuanColor();
			
		}
		yuan.forEach(function(ele,index){
			console.log(ele);
			ele.onclick=function(){
				list.style.marginLeft=-index*296+"px";
				n=index;
				yuanColor();
			}
		});
		function yuanColor(){
			for(let i=0;i<size;i++){
				yuan[i].classList.remove("neirong-yuan2");
			}
			console.log(n);
			yuan[n].classList.add("neirong-yuan2")
		}
	}
}
{
	let all=document.querySelectorAll(".jiadian");
	all.forEach(function(ele,index){
		let list=ele.querySelectorAll(".jiadian .list");
//		list[0].style.display="block";
		let daohang=ele.querySelectorAll(".jiadian-a");
		for(let i=0;i<daohang.length;i++){
			daohang[i].onmouseover=function(){
				console.log(list[i]);
				for(let j=0;j<daohang.length;j++){
					daohang[j].classList.remove("color");
					list[j].style.display="none";
				}
				daohang[i].classList.add("color");
				list[i].style.display="block";
			}
		}
	});
}
{
	let banner=document.querySelector(".banner");
	let list=document.querySelectorAll(".banner-ul1 li");
	let n=0;
	let yuan=document.querySelectorAll(".banner .banner-yuan li");
	let left=document.querySelector("#banner-jiantou1");
	let right=document.querySelector("#banner-jiantou2");
	console.log(left)
	console.log(right)
	function lunbo(){
		n++;
		if(n==5){
			n=0;
		}
		if(n<0){
			n=4;
		}
		for(let i=0;i<list.length;i++){
			list[i].style.opacity=0;
			yuan[i].classList.remove("style");
		}
		list[n].style.opacity=1;
		yuan[n].classList.add("style");
	}
	let time=setInterval(lunbo,1000);
	banner.onmouseover=function(){
		clearInterval(time);
	}
	banner.onmouseout=function(){
		time=setInterval(lunbo,1000);
	}
	left.onclick=function(){
		n=n-2;
		lunbo();
	}
	right.onclick=function(){
		lunbo();
	}
	yuan.forEach(function(ele,index){
		ele.onclick=function(){
			n=index-1;
			lunbo();
		}
	});
}
