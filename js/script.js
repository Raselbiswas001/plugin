$(document).ready( function(){

   // owlcarousel
   $(".owl-carousel").owlCarousel({
      items:5,
      center:true,
      loop:true,
      dots:false,
           responsive:{
        0:{
            items:1,
            
        },
        576:{
            items:3,
            margin:5
        },
        768:{
            items:5,
            margin:10  
        },
         992:{
            items:5,
            margin:10  
        },
        1200:{
            items:5,
            margin:10 
        }
        

    }

   });

       // slick slider
    $('.autoslider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        margin: 20
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]


    
    });



});
