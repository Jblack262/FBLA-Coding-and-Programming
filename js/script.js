$('#print').on('click', function() { //This is a function that hides the buttons on the screen so they don't show up when you print your results
    $('#print').hide(), $('#return').hide(); //Hides the 'Print Results' button and the 'Retake the Quiz' button
    window.print(); //Prints the screen
    $('#print').show(), $('#return').show(); //Makes the buttons reappear after the screen has been printed
}
);

$(document).ready(function() {
    $('#score').html('You got a ' + score + ' on the FBLA quiz');
});