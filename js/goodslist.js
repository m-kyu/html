//스크롤 베너 타이틀 이벤트
let pos = {y:0, dy:0,state:true}
$(window).on('scroll', function(){
    // 현재 스크롤 값
    pos.y = window.scrollY;
    // 스크롤을 올렸는지 내렸는지 확인
    pos.state = pos.y>pos.dy;
    // 이전 스크롤 값
    pos.dy = pos.y;
    if(pos.state == true){
        $('header').css({
            'display':'none'
        });
    }else{
        $('header').css({
            'display':'block'
        });
    }
});

// item list

let item='', index=0, price='', detail1='', dname='', total=0;
$.ajax({
    url:'./js/data.json',
    success:function(data){
        $.each(data.goodslist1, function(k, v){
            item += `<figure>
                        <a href="goodsdetail.html">
                            <p><img src="${v.thum}" alt=""></p>
                            <h3>${v.name}</h3>
                            <figcaption>￦<span>${v.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></figcaption>
                        </a>
                    </figure>`;
        })
        $('.list-show').html(item);

        total = data.goodslist1.length;
        $('.bar p span').html(total);

        $('.list-show figure').on('click', function(e){
            e.preventDefault();
            localStorage.num = $(this).index();
            location.href = $('.list-show figure a').attr('href');
        });

    }
})



let dPos = {x:0, dx:0, dir:'left'};
let imgWidth;

$('.d-img').draggable({
    axis: 'x',
    revert: function(){
        dPos.dir = (dPos.x > dPos.dx) ? 'left':'right';
    },
    start:function(e){
        dPos.x=e.pageX;
        imgWidth = $('.d-img').width();
    },
    drag:function(e){
        dPos.dx = e.pageX;
    },
    stop:function(){
        if(dPos.dir=='left'){
            $('.d-img').animate({
                left:`-${imgWidth/2}`
            });
            $('.d-nav span').toggleClass('active');
        }else{
            $('.d-img').animate({
                left:`0`
            });
            $('.d-nav span').toggleClass('active');
        }
    }
});

