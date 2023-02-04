addEventListener('scroll', (event) => {});
onscroll = (event) => { };


function myScrollHandler(event) {
    $(document).ready(function(){
        $(window).scroll(function(){
            if(this.scrollY > 5) {
                console.log("sticky")
                $('.navitab').addClass("sticky");
            }
            else {
                console.log("no sticky")
                $('.navitab').removeClass("sticky");
            }
        });
        $('.opt-btn').click(function() {
            $('.navitab .opt').toggleClass("active");
            $('.opt-btn i').toggleClass("active");
        });
    
        $('.carousel').owlCarousel({
            margin: 20,
            loop: true,
            autoplayTimeOut: 2000,
            autoplayHoverPause: true,
            responsive: {
                0:{
                    items: 1,
                    nav: false
                },
                600:{
                    items: 2,
                    nav: false
                },
                1000:{
                    items: 3,
                    nav: false
                }
            }
        });
    });
}
addEventListener("ionScroll", myScrollHandler);
console.log("loaded")





