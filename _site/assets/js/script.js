// CLICK TO EXPAND

$('.arrow-down').on('click', function() {
    $(this).toggleClass('active');
    
    const maxHeight = $('.click-to-expand').css('max-height');
    
    if (maxHeight && maxHeight !== '0px' && maxHeight !== 'none') {
        $('.click-to-expand').css('max-height', '0px')
    } else {
        $('.click-to-expand').css('max-height', '1000px');
        $('.click-to-expand').css('height', 'auto');
    }
});
//CLICK TO EXPAND

//INIT AMOUNT IN URL
const initAmount = $('.btn-gift-once .js-btn-don.active').data('amount');
const initForm = $('.btn-gift-once').next().children('.form-inline').children('.form-donate');
replaceAction(initForm, +initAmount);

const initAmount2 = $('.btn-gift-regular .js-btn-don.active').data('amount');
const initForm2 = $('.btn-gift-regular').next().children('.form-inline').children('.form-donate');

replaceAction(initForm2, +initAmount2);

//INIT AMOUNT IN URL


//FORM DONATION

function replaceAction(formElement, nb) {
    if (!formElement || formElement.length === 0)
        return false;
    
    $('.btn-don-value').text(nb);
    
    addOrModifyQueryParameter(formElement, 'amount', parseInt(nb * 100));
}

$('.js-btn-don').on('click', function() {
    $('.js-btn-don').removeClass('active');
    $(this).addClass('active');
    
    const amount = $(this).data('amount');
    const formElement = $(this).parents('.row').next().children('.form-inline').children('.form-donate');
    
    addOrModifyQueryParameter(formElement, 'free_amount', 0);

    $('input.form-amount').val(amount);
    
    replaceAction(formElement, +amount);
});

$('.form-amount').on('input', function() {
    const val = $(this).val();
    
    if (!val)
    return false;
    
    const nb = Number($(this).val());
        
    if (!isNaN(nb)) {
        $('.btn-don-value').text(nb);
        const formElement = $(this).parents('.form-inline').children('.form-donate');
        
        addOrModifyQueryParameter(formElement, 'free_amount', '1');

        isFreeAmount = true;
        replaceAction(formElement, +nb);
    }
})

//FORM DONATION