 $(function (){
        $(".th2").click(function () {
            if($(".th2").hasClass("h")){
                $(this).addClass("h").siblings(".th2").removeClass("h")
            }
            else{
                $(this).addClass("h");
            }
            
    })
    var w_w=$(window).width();
    var i=0;
    var set;
    var len = $(".pic").length;
    $(".ppt").css({ "width": len * w_w });
    $(".pic").css({ "width": w_w });
    
    
    $(window).resize(function(){
         w_w=$(window).width();
         $(".ppt").css({"width":len*w_w});
         $(".pic").css({"width":w_w});
    }) 
    
     
     
    function time(){
   set= setInterval(function(){
        if(i<len-1){
            i++;
        }else{
            i=0;
        }
        $(".so_").eq(i).addClass("hh").siblings(".so_").removeClass("hh");
       $(".pic").eq(i).fadeIn().siblings(".pic").fadeOut(0);
    },3000)
     }
    
     time();
     
     
       $(".huandeng").mouseover(function(){
            clearInterval(set);
        })

        $(".huandeng").mouseleave(function(){
            time();
        })
        
          $(".so_").click(function(){
        i=$(this).index()
      $(".pic").eq(i).fadeIn().siblings(".pic").fadeOut(0);
    $(".so_").eq(i).addClass("hh").siblings(".so_").removeClass("hh");
        $(this).addClass("hh").siblings(".pic").removeClass("hh")
        }) 
        
     
         })
    
