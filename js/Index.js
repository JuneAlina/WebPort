alert('@ 이 웹 페이지는 Google Chrome 브라우저, 1920*1080화면에 최적화되어있습니다. @');

$(function(){
    
    var $window01 = $('.whynot');
    var $window02 = $('#window02 span01');
    var $dt = $('.designtools');
    var $pro = $('#window04');
    
    var $offset = 400;

    var $window02OST = $window02.offset().top - $offset;
    var $dtOST = $window02OST + 300;
    var $proOST = $window02OST + 1000;
    
    $(window).scroll(function(){
        
        if($(this).scrollTop() >= 0){
            $('.whynot').addClass('animate');      
           }
        
        if($(this).scrollTop() > $window02OST){
            $('#window02 span01').addClass('animate');  
            $('#window02 span02').addClass('animate'); 
           }
        
        if($(this).scrollTop() > $dtOST){
            $('.designtools').addClass('animate'); 
            $('.Coding').addClass('animate');  
             $('.Lang').addClass('animate'); 
            $('#window03 h8').addClass('animate'); 
           }
        
        if($(this).scrollTop() > $proOST){
            $('#pr01').addClass('animate'); 
            $('#pr02').addClass('animate');  
             $('#pr03').addClass('animate'); 
            $('#pr04').addClass('animate'); 
            $('#pr0101').addClass('animate'); 
           }
    });
    
    
});

$(function(){
  $('#pr01').hover(function(){
    $('.pr0101').css({"transform": "translateY(12rem)","animation": "fadeIn 1s forwards ease-in","transition": "0.8s ease-in-out"})
  }, function(){
     $('.pr0101').css({"transform": "translateY(-12rem)","animation": "fadeOut 1s forwards ease-in","transition": "1s ease-in-out"}); 
  });
    
     $('#pr02').hover(function(){
    $('.pr0202').css({"transform": "translateY(12rem)","animation": "fadeIn 1s forwards ease-in","transition": "0.8s ease-in-out"})
  }, function(){
     $('.pr0202').css({"transform": "translateY(-12rem)","animation": "fadeOut 1s forwards ease-in","transition": "1s ease-in-out"}); 
  });
    
     $('#pr03').hover(function(){
    $('.pr0303').css({"transform": "translateY(12rem)","animation": "fadeIn 1s forwards ease-in","transition": "0.8s ease-in-out"})
  }, function(){
     $('.pr0303').css({"transform": "translateY(-12rem)","animation": "fadeOut 1s forwards ease-in","transition": "1s ease-in-out"}); 
  });
    
     $('#pr04').hover(function(){
    $('.pr0404').css({"transform": "translateY(12rem)","animation": "fadeIn 1s forwards ease-in","transition": "0.8s ease-in-out"})
  }, function(){
     $('.pr0404').css({"transform": "translateY(-12rem)","animation": "fadeOut 1s forwards ease-in","transition": "1s ease-in-out"}); 
  });
    
    
    
    
});