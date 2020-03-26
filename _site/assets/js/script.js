// CLICK TO EXPAND
const arrowElem = document.getElementById('arrow-down');
const contentElem = document.getElementById('click-to-expand');

arrowElem.addEventListener('click', function() {
    this.classList.toggle('active');
    
    if (contentElem.style.maxHeight && contentElem.style.maxHeight !== '0px') {
        contentElem.style.maxHeight = '0px';
    } else {
        contentElem.style.maxHeight = '1000px';
        contentElem.style.height = 'auto';
    }
})
//CLICK TO EXPAND

//FORM DONATION
$('.form-amount').on('blur', function() {
    const val = $(this).val();

    if (!val)
        return false;
    
    const nb = Number($(this).val());

    if (!isNaN(nb)) {
        $('.btn-don-value').text(nb);
        const parent = $(this).parents('.form-donate')
        const action = parent.attr('action');
        const pattern = new RegExp('amount=(.+?)((?=&)|$)');
        const [ oldAmount ] = pattern.exec(action);
        
        const newAction = action.replace(oldAmount, `amount=${parseInt(nb * 100)}`)
        parent.attr('action', newAction);
    }
})
//FORM DONATION