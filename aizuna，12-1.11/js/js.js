$(function(){
    var i=50;
    $(".kuang2-1").click(function(){
        if(i==50)
            time_();
    })
    
    
    function time_(){
        var set=setInterval(function(){
            if (i==0){
                clearInterval(set);
                i=5;
                $(".kuang2-1").html("获取验证码");
            }else{
                i--;
                $(".kuang2-1").html(i+"s")
            }
        },1000)
    }


})
$(function(){
    var i=50;
    $(".kuang2-11").click(function(){
        if(i==50)
            time_();
    })
    
    
    function time_(){
        var set=setInterval(function(){
            if (i==0){
                clearInterval(set);
                i=5;
                $(".kuang2-11").html("获取验证码");
            }else{
                i--;
                $(".kuang2-11").html(i+"s")
            }
        },1000)
    }


})
$(function(){
    var i=50;
    $(".kuang2-11_").click(function(){
        if(i==50)
            time_();
    })
    
    
    function time_(){
        var set=setInterval(function(){
            if (i==0){
                clearInterval(set);
                i=5;
                $(".kuang2-11_").html("获取验证码");
            }else{
                i--;
                $(".kuang2-11_").html(i+"s")
            }
        },1000)
    }


})








$(function(){
    $(".right-right").on("click",function(){
       if($(this).hasClass("hh")) {
           $(this).removeClass("hh");
       }else{
           $(this).addClass("hh").siblings(".right-right").removeClass("hh");
       }
    })
})
    
//      var index_check;
//    $(".right-right").eq(0).addClass("hh").siblings(".right-right").removeClass("hh");
//    $(".right-right").click(function(){
//        
//   
//         $(this).eq(0).addClass("hh").siblings(".right-right").removeClass("hh");
//    })
//    
//    
//     
//                    
//})



