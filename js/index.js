// ../images/shopping-cart.png


function hover(element) {
    element.querySelector('.cart-image').src = './images/shopping-cart-hover.png';
}

function unhover(element) {
    element.querySelector('.cart-image').src = './images/shopping-cart.png';
}

function hoverDetail(element) {
    element.querySelector('.cart-image').src = '../images/shopping-cart-hover.png';
}

function unhoverDetail(element) {
    element.querySelector('.cart-image').src = '../images/shopping-cart.png';
}

