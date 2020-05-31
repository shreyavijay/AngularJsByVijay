import { Injectable } from '@angular/core';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class ScrollbarService {

  constructor() { }

scrollToNextSection(index: number): void {
  console.log('printing section1 scrollToNthChild', index);
  var scrollToSection = $("div.section:nth-child(" + index + ")").position();
  console.log('printing section1 scrollToNthChild', scrollToSection);
  $("html, body").animate({
    scrollTop: scrollToSection.top
  }
    , 1000);  
  $(document).ready(function () {

    function scrollToNthChild(index) {
      // console.log('printing section1 scrollToNthChild', index);
      // var scrollToSection = $("div.section:nth-child(" + index + ")").position();
      // console.log('printing section1 scrollToNthChild', scrollToSection);
      // $("html, body").animate({
      //   scrollTop: scrollToSection.top
      // }
      //   , 1000);
    }
    //jQuery methods go here...

    $("li.vertical > a").click(function () {
      var selectedItemIndex = $("li.vertical").index($(this).parent()) + 1;
      console.log('Index of ', selectedItemIndex);
      scrollToNthChild(selectedItemIndex);
    });




  });

}

}
