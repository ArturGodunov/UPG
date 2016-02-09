$(document).ready(function () {

    /*
     * BXSLIDER init
     */
    $('.panel-main').find('.bxslider').bxSlider({
        pager: false,
        minSlides: 3,
        maxSlides: 3,
        //slideWidth: 77,
        //slideMargin: 20,
        slideWidth: 154,
        slideMargin: 40,
        nextText: '',
        prevText: ''
    });

    /*
     * BXSLIDER-TEST init
     */
    $('.panel-main').find('.bxslider-test').bxSlider({
        pager: false,
        nextText: '',
        prevText: ''
    });

    /*
     * MAGNIFIC POPUP init
     */
    $('.form-popup_link').each(function(){
        $(this).magnificPopup({
            type: 'inline',
            preloader: false
        });
    });

    /*
     * CIRCLE DIAGRAM init
     */
    $('.circle-diagram').each(function(){
        var perc = $(this).data('circle-diagram'),
            percNum = parseInt(perc.percent),
            bgFill, frFill;
        if (percNum < 50) {
            bgFill = "#ffdacc";
            frFill = "#ff4800";
        } else if (percNum >= 50 && percNum < 80) {
            bgFill = "#ffebcc";
            frFill = "#f90";
        } else {
            bgFill = "#d7f0dc";
            frFill = "#37b64f";
        }
        $(this).circleDiagram({
            "size": "100",
            "borderWidth": "8",
            "textSize": "36",
            //"size": "50",
            //"borderWidth": "4",
            //"textSize": "18",
            "bgFill": bgFill,
            "frFill": frFill,
            "textColor": frFill
        });
    });

    /*
     * OPEN 'READ MORE'
     */
    $('.more-info').on('click', function(){
         $(this).parents('.news-item').find('.news-item_cont').slideToggle(500);
    });

    /*
     * SELECT SUPER
     */
    $('.select-super').on('click', function(){
        $(this).find('.option_list').toggleClass('show');
    });
    $('.option_item').on('click', function(){
        var val = $(this).text(),
            selSup = $(this).parents('.select-super');
        selSup.find('.select_title').text(val);
        selSup.find('select').val(val);
    });

    /*
     * DATAPICKER init
     */
    $( ".datepicker").each(function(){
        $(this).datepicker({
            dateFormat: "dd.mm.yy",
            dayNamesMin: [ "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс" ],
            monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ]
        });
    });

    /*
     * CHART init
     */
    var lineData = {
        labels: ["01", "02", "03", "04", "05", "06", "07"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [1, 3, 5, 0, 4, 2, 3]
            }
        ]
    };
    var lineOptions = {
        scaleShowGridLines: true,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        bezierCurve: true,
        bezierCurveTension: 0.4,
        pointDot: true,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: true,
        datasetStrokeWidth: 2,
        datasetFill: true,
        responsive: true
    };

    var ctx = document.getElementById("graph").getContext("2d");
    var myNewChart = new Chart(ctx).Line(lineData, lineOptions);


});

