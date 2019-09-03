$(function(){
    // 加入我们--tab切换
    $(".detail-item").eq(0).show();
    $(".job-item").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        var Index = $(this).index();
        $(".job-detail .detail-item").eq(Index).show().siblings().hide();
        
    });
    // 轨道交通展开
    $(".unfold").mouseover(function(){
        $(".nav-box").stop().slideDown();
    });
    $(".unfold").mouseout(function(){
        $(".nav-box").stop().slideUp();
    });
    var isShow = false;
    $(".nav-box").mouseover(function(){
        isShow = true;
        $(this).stop().show();
    });
    $(".nav-box").mouseout(function(){
        if(isShow){
            $(this).stop().slideUp();
            isShow = false;
        }
    });

    //移动端导航点击事件
    $(".nav-btn").click(function(){
        $(this).prev(".nav-2").show();
    });
    $(".push").click(function(){
        $(this).next(".nav-box-2").toggle();
    });
    $(".close-btn").click(function(){
        $(this).parent().hide();
        $(".nav-box-2").hide();
    });

    //移动端加入我们点击展开折叠
})
                    
