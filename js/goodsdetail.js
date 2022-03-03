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
        detail1 = `<p><img src="${data.goodsdetail1[localStorage.num].baner1}" alt="#"></p>
                <p><img src="${data.goodsdetail1[localStorage.num].baner2}" alt="#"></p>`;
        dname = `${data.goodslist1[localStorage.num].name}`;
        price = `${data.goodslist1[localStorage.num].price}`;

        $('.d-img').html(detail1);
        $('.d-title h2').html(dname);
        $('.d-title span').html(price);
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

