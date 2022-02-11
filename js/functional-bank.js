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

// check balanc function
function checkBalance(){
    const balanceField = document.getElementById('balance-field');
    const balanceFieldStr = balanceField.innerText;
    const balanceFieldNum = parseFloat(balanceFieldStr);
    return balanceFieldNum;
}

//balance function
function balance(isAdd,inputValue){
    const balanceField = document.getElementById('balance-field');
    const balanceFieldNum = checkBalance();
    if(isAdd == true){
        balanceField.innerText = balanceFieldNum + inputValue;
    }
    else{
        balanceField.innerText = balanceFieldNum - inputValue;
    }
}

// deposit button 
document.getElementById('deposit-button').addEventListener('click',function() {
    
    const depositValue =getInputValue('deposit-input');
    if(depositValue>0 && typeof depositValue=='number'){
        transaction('deposit-field',depositValue);
        balance(true,depositValue);
    }
    else{
        alert('please enter a valid amount');
    }
});

// withdraw button 
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawValue =getInputValue('withdraw-input');
    
    if(withdrawValue>checkBalance()){
        alert("withdraw amount can't be more than balance")
    }
    else if(withdrawValue>0 && typeof withdrawValue =='number'){
        transaction('withdraw-field',withdrawValue);
        balance(false,withdrawValue);
    }
    else{
        alert('please enter a valid amount');
    }
});