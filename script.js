//1.display num in text box
function displayNum(num){
    result.value+=num
    }
    
    
    //2.clear text box
    
    function clearBox(){
        result.value=''
    }
    
    //3.evaluate expresion
    
    function evaluateExp(){
        //--------method1-----
        // exp=result.value;//6*6
        // output=eval(exp)//eval expression in js
        // result.value=output;
    
    
        //----------method2----
    
        result.value=eval(result.value)
    }
    
    // 4.remove last item from list
    
    function removeButton(){
        result.value=result.value.slice(0,-1)
    }