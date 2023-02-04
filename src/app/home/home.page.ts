import { Component } from '@angular/core';
import { ScrollDetail } from '@ionic/angular';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    console.log('scroll', ev.detail);
    if(ev.detail.scrollTop > 5) {
      console.log("sticky")
      $('.navitab').addClass("sticky");
    }
    else {
        console.log("no sticky")
        $('.navitab').removeClass("sticky");
    }
  }

  constructor() { }
  ngOnInit(): void {
    console.log("loaded")
    $(document).ready(function() {
      console.log("ready")
      $('.opt-btn').click(function() {
        console.log("hatdog")
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
}
