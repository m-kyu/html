let loadAft;
loadAft = function(){
    $('.x').on('click', function(){
        $('body').css({
            'overflow':'auto'
        });
        $('.mobile-menu').removeClass('active');
        $('.bg').removeClass('active');
        $('.menu').removeClass('active');
    })
    $('.bugermenu').on('click',function(){
        $('body').css({
            'overflow':'hidden'
        });
        $('.menu')
        .addClass('active');
        $('.bg').addClass('active');
        $('.mobile-menu')
        .addClass('active');
    })

}
$('body')
.prepend('<header></header>')
.append('<footer></footer>');

$('header').load('incom.html header >div',loadAft);
$('footer').load('incom.html footer >div');

let count=0;
$('.gofixed p').on('click',function(){
    count+=1;
    $('.icon span span').text(count);
});