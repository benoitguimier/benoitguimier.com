$("#header").load("../header.html");

$("#header").load("header.html");

$("#apropos").load("../header-description.html");

$("#apropos").load("header-description.html");


$(document).ready(function () {
    if ($(window).width() >= 1090) {

        var headerHeight = $("#header").outerHeight(true);

        $("#listeprojet").css({
            "margin-top": headerHeight
        });

        $(document).ready(marginTopSecondContainer);
        $(window).on('resize', marginTopSecondContainer);

        // INACTIF
        // Marges page projet 2nd container

        function marginTopSecondContainer() {
            var gridDeuxHeight = $("#premierContainer #FR").outerHeight(true) + "px";
            $("#secondContainer").css("margin-top", "gridDeuxHeight");
        }

        // ACTIF
        // Marges page projet container_12

        var heightH2 = $("h2").outerHeight(true);
        var heightDescriptionProjet = $("#FR").outerHeight(true);
        var MarginTopHeighDescription = heightDescriptionProjet - heightH2 + "px";

        if (heightH2 >= heightDescriptionProjet) {
            $(".container_12").css("margin-top", "3vw");
        } else {
            $(".container_12").css("margin-top", MarginTopHeighDescription);
        }


        var gridDeuxHeight = $("#premierContainer #FR").outerHeight(true) + "px";
        $("#secondContainer").css("margin-top", "gridDeuxHeight");

        // Image index
        $("h1").mouseover(function () {
            $("img").css({
                "opacity": "1"
            });
            $("img").not($(this).parent().find("img")).css({
                "opacity": "0"
            });
        });

        $("h1").mouseout(function () {
            $(this).parent().find("img").css({
                "opacity": "0"
            });

        });

        $(document).mousemove(function (e) {

            var imagePositionX = e.pageX + 15;
            var imagePositionY = e.pageY + 15;
            var bodyHeight = $("body").outerHeight(true);
            var projetHeight = $(".projet").outerHeight(true);
            var bodyHeightMoinsProjetHeight = bodyHeight - projetHeight;
            $("img").css({
                "left": imagePositionX,
                "top": imagePositionY
            });
            if (pageX < bodyHeightMoinsProjetHeight) {

            } else {
                $("img").css({
                    "left": imagePositionX,
                    "top": imagePositionY
                });
            }
        });

    } else {


        var headerHeight = $("#header").outerHeight(true);

        $("#listeprojet").css({
            "margin-top": headerHeight
        });


        var DescriptionProjetTop = $("#description_projet").offset();
        $("#description_projet").css("top", DescriptionProjetTop.top);

    };

});
