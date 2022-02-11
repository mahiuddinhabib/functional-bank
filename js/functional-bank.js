//common input function
function getInputValue(inputId){
    const input = document.getElementById(inputId);
    const inputStr = input.value;
    const inputNum =parseFloat(inputStr);
    input.value = '';
    return inputNum;
}

//common transaction function
function transaction(transactionId,inputValue){
    const transactionField = document.getElementById(transactionId);
    const transactionFieldStr = transactionField.innerText;
    const transactionFieldNum = parseFloat(transactionFieldStr);
    transactionField.innerText = inputValue + transactionFieldNum;
}

// deposit button 
document.getElementById('deposit-button').addEventListener('click',function() {
    const depositValue =getInputValue('deposit-input');

    transaction('deposit-field',depositValue);

    const balanceField = document.getElementById('balance-field');
    const balanceFieldStr = balanceField.innerText;
    const balanceFieldNum = parseFloat(balanceFieldStr);
    balanceField.innerText = balanceFieldNum + depositValue;


});

// withdraw button 
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawValue =getInputValue('withdraw-input');

    transaction('withdraw-field',withdrawValue);

    const balanceField = document.getElementById('balance-field');
    const balanceFieldStr = balanceField.innerText;
    const balanceFieldNum = parseFloat(balanceFieldStr);
    balanceField.innerText = balanceFieldNum - withdrawValue;
});