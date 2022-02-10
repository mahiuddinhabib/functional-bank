//common input function
function getInputValue(inputId){
    const depositInput = document.getElementById(inputId);
    const depositInputStr = depositInput.value;
    const depositInputNum =parseFloat(depositInputStr);
    depositInput.value = '';
    return depositInputNum;
}


// deposit button 
document.getElementById('deposit-button').addEventListener('click',function() {
    const depositValue =getInputValue('deposit-input');

    const depositField = document.getElementById('deposit-field');
    const depositFieldStr = depositField.innerText;
    const depositFieldNum = parseFloat(depositFieldStr);

    const balanceField = document.getElementById('balance-field');
    const balanceFieldStr = balanceField.innerText;
    const balanceFieldNum = parseFloat(balanceFieldStr);
    
    depositField.innerText = depositValue + depositFieldNum;
    balanceField.innerText = balanceFieldNum + depositValue;


});

// withdraw button 
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawValue =getInputValue('withdraw-input');

    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldStr = withdrawField.innerText;
    const withdrawFieldNum = parseFloat(withdrawFieldStr);

    const balanceField = document.getElementById('balance-field');
    const balanceFieldStr = balanceField.innerText;
    const balanceFieldNum = parseFloat(balanceFieldStr);

    withdrawField.innerText = withdrawValue + withdrawFieldNum;
    balanceField.innerText = balanceFieldNum - withdrawValue;
});