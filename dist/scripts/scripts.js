$(document).ready(function () {

    /**
     * Popup Welcom
     * */
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

    /**
     * Custom select
     * don't use tag 'label' - 2 click
     * */
    $('[data-select]').on('click', function() {
        $(this).find('.select_list').toggleClass('show');
    });
    $('[data-select-item]').on('click', function() {
        var text = $(this).text();
        $(this).parents('.label').find('[selected]').val(text);
        $(this).parents('.label').find('.select_pseudo').text(text);
    });

    /**
     * Toggle slide
     * */
    $('[data-configuration-button]').on('click', function() {
        $('[data-configuration-slide]').toggleClass('show');
    });
    $(document).keydown(function(e) {
        if (e.keyCode == 27) { /** Press Esc*/
            $('[data-configuration-slide]').removeClass('show');
        }
    });

   /**
    * Text overflow
    * */
   $('[data-text-overflow]').each(function() {
       var fullText = $(this).text(),
           lastIndex = fullText.lastIndexOf('\\'),
           copyEndText = fullText.slice(lastIndex);
       $(this).text('..' + copyEndText);
   });

    /**
     * Tooltip
     * */
    $('[data-string-tooltip]').tooltip({
        position: {
            my: 'left bottom-15',
            at: 'left top',
            using: function(position, feedback) {
                $(this).css(position);
                $("<div>")
                    .addClass("arrow")
                    .addClass(feedback.vertical)
                    .addClass(feedback.horizontal)
                    .appendTo(this);
            }
        }
    });





});