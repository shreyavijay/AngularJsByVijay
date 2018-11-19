import { Injectable } from '@angular/core';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class AccordionService {

  constructor() { 

  }

  public initializeAccordion(): void {
    $(document).ready(function () {
      // jQuery methods go here...
      console.log('IExecuted document.ready');
      //Initialize docucment.ready
      $(this).removeClass("active");
    //   $("button.accordion + div.accordion-container").css("display","block");
      $("button.accordion").click(function () {
        $(this).toggleClass("active");
          console.log('Display accordion ',$(this).css("display"));
          $(this).next().toggle().css("display");
          
                //   if($(this).css("display") === "block"){
                //       console.log($(this).next());
                //       $("this").next().toggle();
                //   } else {
                //       $(this).next().toggle().css("display")
                      
                //   }
              
      });
  }); 
  }

}
