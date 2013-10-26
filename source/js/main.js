$('input.convert').click(convert);

function convert() {
    var input   =   $('input.swatchInput').val();
    var colours =   input.split(' ');
    var output  =   new Array((colours[0] / 255).toFixed(3).replace('.000',''), (colours[1] / 255).toFixed(3).replace('.000',''), (colours[2] / 255).toFixed(3).replace('.000',''));
    $('input.swatchOutput').val(output[0] + ' ' + output[1] + ' ' + output[2]);
}