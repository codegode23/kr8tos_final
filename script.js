

function imgSlider(anything){
    document.querySelector('.show-img .mimg').src = anything;

}


//Active Nav Link on scroll

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul a');

window.onscroll = () =>{

    section.forEach(sec =>{

        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });

};


//Filterable Lightbox



$(document).ready(function(){

    $(".buttons").click(function(){

        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter');

        if(filter == 'all'){
            $('.port-art').show(400);
            console.log(filter);
        }else{
            $('.port-art').not('.'+filter).hide(200);
            $('.port-art').filter('.'+filter).show(400);
        }

    });


});




//smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
     speedAsDuration: true
    });