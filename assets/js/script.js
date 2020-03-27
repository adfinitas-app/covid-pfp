// CLICK TO EXPAND
// const arrowElem = document.getElementById('arrow-down');
// const contentElem = document.getElementById('click-to-expand');

// arrowElem.addEventListener('click', function() {
//     this.classList.toggle('active');
    
//     if (contentElem.style.maxHeight && contentElem.style.maxHeight !== '0px') {
//         contentElem.style.maxHeight = '0px';
//     } else {
//         contentElem.style.maxHeight = '1000px';
//         contentElem.style.height = 'auto';
//     }
// })

$('.arrow-down').on('click', function() {
    $(this).toggleClass('active');

    const maxHeight = $('.click-to-expand').css('max-height');

    console.log(maxHeight);
    if (maxHeight && maxHeight !== '0px' && maxHeight !== 'none') {
        $('.click-to-expand').css('max-height', '0px')
    } else {
        $('.click-to-expand').css('max-height', '1000px');
        $('.click-to-expand').css('height', 'auto');
    }
});
//CLICK TO EXPAND

//FORM DONATION
function replaceAction(formElement, nb) {
    $('.btn-don-value').text(nb);

    const action = formElement.attr('action');
    const pattern = new RegExp('amount=(.+?)((?=&)|$)');
    const [ oldAmount ] = pattern.exec(action);
    
    const newAction = action.replace(oldAmount, `amount=${parseInt(nb * 100)}`)
    formElement.attr('action', newAction);
}

$('.js-btn-don').on('click', function() {
    $('.js-btn-don').removeClass('active');
    $(this).addClass('active');

    const amount = $(this).data('amount');
    const formElement = $(this).parents('.row').next().children('.form-donate');
    
    replaceAction(formElement, +amount);
});

$('.form-amount').on('input', function() {
    const val = $(this).val();
    
    if (!val)
    return false;
    
    const nb = Number($(this).val());
    
    if (!isNaN(nb)) {
        $('.btn-don-value').text(nb);
        const formElement = $(this).parents('.form-donate')
        
        replaceAction(formElement, nb);
    }
})
//FORM DONATION