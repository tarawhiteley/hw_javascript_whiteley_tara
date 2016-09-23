function howdy(name, salutation) {
    console.log(name + ' says ' + salutation + '!');
}

howdy('Tara Whiteley', 'hi');

var numba = function (string) {

    if (string.length < 7) {
        console.log('What a short little word!');
    } else if (string.length > 7) {
        console.log("I'm sorry, but that's too many to count.");
    } else if (string.length === 7) {
        console.log('7, what a perfect choice!');
    }
};

numba('7');
numba('seventy');
numba('university');

function inception(display, favMovie) {
    display(favMovie);
}

function display() {
    console.log(favMovie + ' is a fantastic movie.');
}

display('Sully');
