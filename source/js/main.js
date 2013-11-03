$('input.convert').click(convert);

function convert() {
    var input   =   $('input.swatchInput').val();
    var colours =   input.split(' ');
    var output  =   new Array((colours[0] / 255).toFixed(3).replace('.000',''), (colours[1] / 255).toFixed(3).replace('.000',''), (colours[2] / 255).toFixed(3).replace('.000',''));
    $('textarea.swatchOutput').val(output[0] + ' ' + output[1] + ' ' + output[2]);
}

// Swatch input/output text colourisation
$(function(){
    $('input.swatchInput').keyup(function(){
        // Split the input value into a space-delimited array
        var value = $(this).val().split(' ');

        // If the values haven't been typed yet, default to 0
        if (value[0] == null) { value[0] = 0; }
        if (value[1] == null) { value[1] = 0; }
        if (value[2] == null) { value[2] = 0; }

        // Make 'inputColor' an rgb() swatch using the values typed
        inputColour = 'rgb(' + value[0] + ',' + value[1] + ',' + value[2] + ')';

        // Change the input text colour to the colour being typed  
        $(this).css('color', inputColour);
    });
});