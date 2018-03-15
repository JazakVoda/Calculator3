
    document.querySelector('.equally').addEventListener('click', function() {
        
        var num = document.getElementById('number').value;
        if(num.includes('/')){
            var operand = num.indexOf('/');
            var num1 = num.substring(0, operand);
            var num2 = num.substring(operand + 1);
            
            num = num1 / num2;
            document.querySelector('.result').value = num;
            
        } else if(num.includes('*')){
            var operand = num.indexOf('*');
            num1 = num.substring(0, operand);
            num2 = num.substring(operand + 1);
            
            num = num1 * num2;
            document.querySelector('.result').value = num;
            
        } else if(num.includes('-')){
            var operand = num.indexOf('-');
            num1 = num.substring(0, operand);
            num2 = num.substring(operand + 1);
            
            num = num1 - num2;
            document.querySelector('.result').value = num;
            
        } else if(num.includes('+')){
            var operand = num.indexOf('+');
            num1 = num.substring(0, operand);
            num2 = num.substring(operand + 1);
            
            num = num1 * 1 + num2 * 1;
            document.querySelector('.result').value = num;
        } else {
            document.querySelector('.result').value = 'Try Again';
        }
        
    });