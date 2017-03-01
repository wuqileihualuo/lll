function lazyload(arr,fun){
    var imgs={};
    var len=arr.length;
    var loads=0;
    
    
    for(var i=0;i<len;i++){
        var img=new Image();
        img.onload=function(){
            loads++;
            if(loads==len){
                fun(imgs)
            }
        }
        img.src=arr[i];
       var name = arr[i].split(".")[0];
        imgs[name]=img;
    }
}


function touch(x1, y1, w1, h1, x2, y2, w2, h2){
	if(x1 > x2 + w2 || y1 > y2 + h2 || x1 + w1 < x2 || y1 + h1 < y2){
		return false;
	} else {
		return true;
	}
}