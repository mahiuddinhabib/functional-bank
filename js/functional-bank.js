// deposit button 
document.getElementById('deposit-button').addEventListener('click',function() {
    const depositInput = document.getElementById('deposit-input');
    const depositInputStr = depositInput.value;
    const depositInputNum =parseFloat(depositInputStr);

    const depositField = document.getElementById('deposit-field');
    const depositFieldStr = depositField.innerText;
    const depositFieldNum = parseFloat(depositFieldStr);

    const balanceField = document.getElementById('balance-field');
    const balanceFieldStr = balanceField.innerText;
    const balanceFieldNum = parseFloat(balanceFieldStr);
    
    depositField.innerText = depositInputNum + depositFieldNum;
    balanceField.innerText = balanceFieldNum + depositInputNum;

    depositInput.value = '';
});

// withdraw button 
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputStr = withdrawInput.value;
    const withdrawInputNum =parseFloat(withdrawInputStr);

    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldStr = withdrawField.innerText;
    const withdrawFieldNum = parseFloat(withdrawFieldStr);

    const balanceField = document.getElementById('balance-field');
    const balanceFieldStr = balanceField.innerText;
    const balanceFieldNum = parseFloat(balanceFieldStr);

    withdrawField.innerText = withdrawInputNum + withdrawFieldNum;
    balanceField.innerText = balanceFieldNum - withdrawInputNum;

    withdrawInput.value = '';
});