//  ===========================================================================
//  Convert RGB integer triples to fractional triplets
//  and place in output text area
//  ===========================================================================

$('button.convert').click(convert);

function convert() {

    // Fade in the output area if it hasn't been already
    if ($('div.outputBlock').hasClass('hidden')) {
        $('div.outputBlock').fadeIn(400);
        $('div.outputBlock').removeClass('hidden');
    }

    // Clear the text area before output so we don't duplicate conversions
    $('textarea.swatchOutput').text('');

    // Here's where the magic happens.
    // First we log each input.swatchInput's name as a variable for output.
    // Then we take the values entered for the colour swatch and split them into
    // a space-delimited array; each item in that array is then divided by 255,
    // rounded off to 3 decimal places, and appended to the text area with the
    // relevant Objective-C prefix for a UIColor element.
    $('input.swatchInput').each(function(){
        var name    =   $(this).parent().find('input.swatchName').val();
        var input   =   $(this).val();
        var colours =   input.split(' ');
        var output  =   new Array((colours[0] / 255).toFixed(3).replace('.000',''), (colours[1] / 255).toFixed(3).replace('.000',''), (colours[2] / 255).toFixed(3).replace('.000',''));
        $('textarea.swatchOutput').append(name + ': colorWithRed:' + output[0] + ' green:' + output[1] + ' blue:' + output[2] + '\n');
    });
}


//  ===========================================================================
//  Swatch input/output text colourisation
//  ===========================================================================

$('input.swatchInput').keyup(colourise);

function colourise() {
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
}


//  ===========================================================================
//  Add another input row
//  ===========================================================================

var inputRow = "<div class='inputBlock'> <label for='swatchName'>Colour name:</label> <input type='text' name='swatchName' class='swatchName'> <label for='swatchInput'>RGB:</label> <input type='text' name='swatchInput' class='swatchInput'> </div>"

$('button.moar').click(function() {
    $('div.theInputs').append(inputRow);
    $('input.swatchInput').keyup(colourise);
});