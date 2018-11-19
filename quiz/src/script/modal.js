$(document).ready(function () {
    var $divModal,$modalPlaceHolder;
    window.openModal = function (event) {
        console.log('parent', event.currentTarget);
        var $modalHtml;
        var headerHtml =
            "<div class='modal'>" + "\n"
            + "<div class='modal-content'>" + "\n"
            + "<div class='modal-header'>Delete Header<span class='close' onclick='closeModal()'>&times;</span></div>" ;            
            // + "<div class='close' onclick='closeModal()'>&times;</div>";

        var deleteHtml =
            "<br>" + "\n"
            + "<p class='answer'>Are you sure you want to Delete? Changes cannot be retrieved later</p>" + "\n"
            + "<br>" + "\n"
            + "<div class='button-group-right'>" + "\n"
            + "<button class='button save-button' onclick='closeModal(this)'>Yes</button>" + "\n"
            + "<button class='button save-button' onclick='closeModal(this)'>No</button>" + "\n"
            + "</div>" + "\n";


        var footerHtml =
            "</div>" + "\n"
            + "</div>" + "\n";


        var editModal = "";
        // $($modalHtml).insertAfter(event);
        // console.log('DeleteModal Data',$modalHtml);
        $modalPlaceHolder = $(event).next();
        var modalName = $modalPlaceHolder.attr("id");
        //Determine Modal to open
        if (modalName.indexOf('deleteModal') > -1) {
            $modalHtml = headerHtml + deleteHtml + footerHtml;
        } else if (modalName.indexOf('editModal') > -1) {
            $modalHtml = headerHtml + editModal + footerHtml;
        }    
        $modalPlaceHolder.html($modalHtml);
        $divModal = $modalPlaceHolder.find("div.modal");
        $divModal.addClass("active");
    }


    window.closeModal = function (event) {

        $divModal.removeClass("active");
    }


});