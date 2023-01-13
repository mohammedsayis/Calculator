function numberDisplay(n){
    // result.value =result.value+ n
    result.value+=n
}
function clearAll(){
    result.value=0
}
function oprations(){
    // expr = result.value
    // out = eval(expr)
    // result.value=out
    result.value=eval(result.value)
}
function backSpace(){
    expt = result.value 
    result.value = expt.slice(0,-1)
}