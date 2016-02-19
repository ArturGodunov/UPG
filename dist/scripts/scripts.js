$(document).ready(function () {

    //$.colorbox({
    //    href:'popup1.html',
    //    opacity: 1,
    //    overlayClose: false,
    //    escKey: false,
    //    arrowKey: false,
    //    closeButton: false,
    //    onComplete: function(){
    //        setTimeout(function() {
    //            $.colorbox.close();
    //        }, 1500)
    //    }
    //});

    $('.select').on('click', function() {
        var list = $(this).siblings('.select_list');
        list.toggleClass('show');
        list.find('.select_item').on('click', function() {
            var text = $(this).text();
            $(this).parents('.label').find('.select').val(text);
        });
    });

    /**
    * @todo Hide after click on Esc
    * */
    $('[data-configuration-button]').on('click', function() {
        $('[data-configuration-slide]').toggleClass('show');
    });
});