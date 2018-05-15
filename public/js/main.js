$(document).ready(function(){
    var currentLocation = window.location.href;
    console.log(window.location.href);

    if(currentLocation == "http://localhost:3000/"){
        $(".homeButton").addClass("selected");
    }else if(currentLocation == "http://localhost:3000/bachelor"){
        $(".bachelorButton").addClass("selectedInner"); //here we use selected inner to make it red
        $(".menu__secondary-js").addClass("opened");
    }

    $(".bachelorButton").on('click' , function(){
        currentPage = "/bachelor";
    });
    $(".homeButton").on('click' , function(){
        currentPage = "/";
    });


    $('.open-programs-js ').on('click', function(){
        $('.menu__secondary').toggleClass('opened');
    });
    $('.hamburger').on('click', function(){
        $('.hamburger').toggleClass('is-active');
    });

    $('.open-menu-js').on('click', function(){
        if($('.menu__secondary').hasClass('opened')){
            $('.menu__secondary').toggleClass('opened');
        }
        $('.menu__navigation').toggleClass('opened');
    });


});