$(document).ready(function () {

    window.openModal = function (event) {
        console.log('parent',event.currentTarget);
        var $modalHtml;
        var headerHtml = 
            "<div class='modal'>" + "\n"  
         +  "<div class='modal-content'>" + "\n"   
         +  "<div class='close' onclick='closeModal()'>&times;</div>";
        
        var deleteHtml = 
            "<br>" + "\n"
         +  "<p class='answer'>Are you sure you want to Delete? Changes cannot be retrieved later</p>" + "\n"
         +  "<br>" + "\n"
         +  "<div class='button-group-right'>" + "\n"
         +  "<button class='button save-button' onclick='closeModal()'>Yes</button>" + "\n"
         +  "<button class='button save-button' onclick='closeModal()'>No</button>" + "\n"
         +  "</div>" + "\n";


         var footerHtml = 
            "</div>" + "\n"
         +  "</div>" + "\n";


        $modalHtml = headerHtml + deleteHtml + footerHtml;
        
        $($modalHtml).insertAfter(event);

        console.log('DeleteModal Data',$modalHtml);


        var $divmodal = $(event).next();
        // $divmodal.find("div.modal");
        $divmodal.addClass("active");

 
        // $(".modal").addClass("active");
    }

    window.closeModal = function () {
        $( "" ).remove();
        $modal.toggleClass("modal-content");
        $(".modal").removeClass("active");
    }


});