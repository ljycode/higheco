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
        if(window.innerWidth > 767){
            $(".nav-box").stop().slideDown();
        }
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

    // 导航鼠标悬浮添加样式
    var on_index = $(".nav .on").index();
    $(".nav .item").mouseover(function(){
        if(window.innerWidth > 767){
            $(this).addClass("on").siblings().removeClass("on");
        }
    })
    
    $(".nav .item").mouseout(function(){
        if(window.innerWidth > 767){
            switch(on_index) {
                case 1: $(".nav .item").eq(0).addClass("on").siblings().removeClass("on");break;
                case 2: $(".nav .item").eq(1).addClass("on").siblings().removeClass("on");break;
                case 4: $(".nav .item").eq(2).addClass("on").siblings().removeClass("on");break;
                case 5: $(".nav .item").eq(3).addClass("on").siblings().removeClass("on");break;
                case 6: $(".nav .item").eq(4).addClass("on").siblings().removeClass("on");break;
                case 7: $(".nav .item").eq(5).addClass("on").siblings().removeClass("on");break;
            }
        }
    })
        

    //移动端导航点击事件
    $(".nav-btn").click(function(){
        $(this).prev(".nav-2").show();
    });
    $(".push").click(function(){
        if(window.innerWidth <= 767){
            $(this).next(".nav-box-2").toggle();
        }
    });
    $(".close-btn").click(function(){
        $(this).parent().hide();
        $(".nav-box-2").hide();
    });

    //移动端加入我们点击展开折叠
})
                    