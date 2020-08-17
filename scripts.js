let color = 'purple';
console.log('color');
let number = 10;
console.log('number');
let word = 'cool';

if (color === 'purple') {
    $('.red').css('background-color', 'purple');
};

if (number > 100) {
    $('.yellow').text("whoah, that is a big number.")
} else {
    $('yellow').text("just a regular number, please.");
}

if (word === 'cool') {
    $('.green').text('Power of DOM');
} else if (word !== 'cool') {
    $('.blue').text('Power of DOM');
}