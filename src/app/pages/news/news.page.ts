import { Component, OnInit } from '@angular/core';
import { ScrollDetail } from '@ionic/angular';
declare var $: any;

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  
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
    });
    $.getJSON("https://api.countapi.xyz/hit/formana/visits", function(response) {
    $("#visits").text(response.value);
});
  }
}
