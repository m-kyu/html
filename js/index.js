//main page
let Bn1 = '',Bn2 = '', num=0, lengthBn1, lengthBn2, interval;
$.ajax({
    url:'./js/data.json',
    success:function(data){
        // 첫번째 베너
        lengthBn1=data.mainBn1.length;
        $.each(data.mainBn1,function(k, v){
            Bn1 += `<a href="#">
                        <div style="background-image:url('${v.src}');">
                            <img src="${v.src}" alt="#"/>
                        </div>
                    </a>`;
        });
        $('.s1-img')
        .html(Bn1);

        $('.s1-nav span').eq(3).text(`0${lengthBn1}`);
        let clear = function(){
            clearInterval(interval);
        };
        interval = setInterval(function(){
            clear;
            $('.s1-img a').eq(num).fadeOut(500);
            num++;
            $('.s1-img img').animate({
                opacity:'.4',
                marginBottom:'1%',
                marginLeft:'1%'
            }, 500, function(){
                $(this).animate({
                    opacity:'1',
                    margin:'0',
                },500)
            });
            $('.s1-nav span').eq(0).text(`0${num+1}`);
            $('.s1-nav span span').css({
                'width':`${(num+1)*34}%`
            });
            if(num==lengthBn1)
            num=0;
            $('.s1-img a').eq(num).fadeIn(500);
            $('.s1-nav span').eq(0).text(`0${num+1}`);
            $('.s1-nav span span').css({
                'width':`${(num+1)*34}%`
            });
        }, 5000);

        //두번째 베너 
        $.each(data.mainBn2,function(k, v){
            Bn2 += `<p>
                        <img src="${v.src}" alt="#"/>
                    </p>`;
        })
        $(window).on('scroll',function(){
            if($('html').scrollTop() >= 40){
                
                setTimeout(function(){
                    $('.s2-nav').css({
                        'display':'inline-block'
                    })
                    $('.s2-img').css({
                        'display':'flex'
                    });
                    $('.slide-2').css({
                        'margin':'0'
                    });
                },1000);
            }
            
        })
        let dPos = {x:0, dx:0, dir:'left'};
        let img2Width = 0;
        lengthBn2 = data.mainBn2.length;
        $('.s2-img')
        .html(Bn2)
        .css({
            'width' : `calc(${lengthBn2*100}% + ${lengthBn2*20}px)`
        });
        $('.s2-img p').css({'width':`${100/lengthBn2}%`});
        $('.s2-img').draggable({
            axis: 'x',
            revert: function(){
                dPos.dir = (dPos.x > dPos.dx) ? 'left':'right';
            },
            start:function(e){
                dPos.x=e.pageX;
                img2Width = $('.s2-img').width();
            },
            drag:function(e){
                dPos.dx = e.pageX;
            },
            stop:function(){
                if(dPos.dir=='left'){
                    $('.s2-img').animate({
                        left:`-${img2Width/2}`
                    });
                    $('.s2-nav span').addClass('active');
                }else{
                    $('.s2-img').animate({
                        left:`0`
                    });
                    $('.s2-nav span').removeClass('active');
                }
            }
        });
    }
});

