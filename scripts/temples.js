const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const h1Element = document.querySelector('h1');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    h1Element.classList.toggle('hide');
    
});