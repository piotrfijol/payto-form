import '../styles/home-page.scss';
import Cleave from 'cleave.js';

// Input toggle

document.querySelectorAll('.input-container').forEach(input => {
    const inputField = input.querySelector('input');
    const labelWrapper = input.querySelector('.label-wrapper'); 

    input.addEventListener('click', (e) => {
        inputField.focus();
    });

    inputField.addEventListener('focus', () => {
        labelWrapper.classList.add('label-wrapper--active');
    });

    inputField.addEventListener('blur', (e) => {
        if(!inputField.value)
            labelWrapper.classList.remove('label-wrapper--active');
    });

});


// Input validation

new Cleave('input[name="card-number"]', {
    creditCard: true
});

new Cleave('input[name="expiry-date"]', {
    date: true,
    datePattern: ['m', 'y']
})

new Cleave('input[name="cvv"]', {
    numeral: true,
    delimiter: '',
})