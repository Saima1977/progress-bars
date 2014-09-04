$(document).ready(function() {
    //PROGRESS BAR
    $(".progress").progressbar({
        value: 0
    });
    $(".progress .ui-widget-header").append("<div id='caption'></div>");

    var currValue = 0, toValue = 0, progressnum;
    progressnum = $('#progressbar-select').val();

    $('#progressbar-select').change(function() {
        progressnum = $('#progressbar-select').val();
        toValue = $('#'+progressnum+' input[name=toVal]').val()/1;
    });    

    //UPDATING PROGRESS BAR WHEN CONTINUE BUTTON CLICKED
    $("#plus25").button().click(function() {
        if(currValue < 0)
        {
            currValue = 0;
            $('#'+progressnum+' input[name=currVal]').val(currValue);
        }        
        currValue = $('#'+progressnum+' input[name=currVal]').val()/1;
        toValue = currValue + 25;
        $('#'+progressnum+' input[name=toVal]').val(toValue);
        $('#'+progressnum+' div#caption').html(toValue+"%");
        animateProgress();
    });
    //DECREASING PROGRESS BAR WHEN GO BACK BUTTON CLICKED
    $("#minus25").button().click(function() {
        if(toValue > 0)
        {
            currValue = $('#'+progressnum+' input[name=currVal]').val();
            toValue = currValue - 25;
            $('#'+progressnum+' input[name=toVal]').val(toValue);
            $('#'+progressnum+' div#caption').html(toValue+"%");
            animateProgress();
        }
    });

    $("#plus10").button().click(function() {
        if(currValue < 0)
        {
            currValue = 0;
            $('#'+progressnum+' input[name=currVal]').val(currValue);
        }
        currValue = $('#'+progressnum+' input[name=currVal]').val()/1;
        toValue = currValue + 10;
        $('#'+progressnum+' input[name=toVal]').val(toValue);
        $('#'+progressnum+' div#caption').html(toValue+"%");
        animateProgress();
    });
    //DECREASING PROGRESS BAR WHEN GO BACK BUTTON CLICKED
    $("#minus10").button().click(function() {
        if(toValue > 0)
        {   
            currValue = $('#'+progressnum+' input[name=currVal]').val();         
            toValue = currValue - 10;
            $('#'+progressnum+' input[name=toVal]').val(toValue);
            $('#'+progressnum+' div#caption').html(toValue+"%");
            animateProgress();
        }
    });

    function animateProgress() {
        
        progressnum = $('#progressbar-select').val();

        if (currValue < toValue) {
            currValue = currValue + 1;
            $('#'+progressnum+' input[name=currVal]').val(currValue);
            $("#"+progressnum).progressbar("value", currValue);
            setTimeout(animateProgress, 3);
        } else if (currValue > toValue) {
            currValue = currValue - 1;
            $('#'+progressnum+' input[name=currVal]').val(currValue);
            $("#"+progressnum).progressbar("value", currValue);
            setTimeout(animateProgress, 3);
        }

        if (toValue > 100) 
        {
            $('#'+progressnum).removeClass("belowMax");
            $('#'+progressnum).addClass("aboveMax");
        } else {
            $('#'+progressnum).removeClass("aboveMax");
            $('#'+progressnum).addClass("belowMax");
        }

    }
});