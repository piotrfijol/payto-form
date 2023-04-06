import '../styles/home-page.scss'

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

