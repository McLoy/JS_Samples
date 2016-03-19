/**
 * Created by User on 19.03.2016.
 */

jQuery('document').ready(function() {
    jQuery('input').on('keyup', function(){
        var summ, time, percent, result;

        summ = parseFloat($('#summ').val());
        time = parseFloat($('#time').val());
        percent = parseFloat($('#percent').val());

        if (isNaN(summ) || isNaN(time) || isNaN(percent)){
            jQuery('#result').html("Enter all values before calculating");
        } else {
        result = (summ * percent / 12 / 100 * time + summ) / time;

        result = result.toFixed(2);
        result = 'Your monthly installment: ' + result + ' $';

        jQuery('#result').html(result);
        }
        //alert(result);
    });
});



