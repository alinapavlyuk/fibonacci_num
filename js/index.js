const num = parseInt(prompt('Enter number of Fibonnaci'));
alert('Loop method:' + fibLoop(num));
alert('With recursion:' + fibRecursion(num));
function fibLoop (num) {
    let a = 1;
    let b = 0;
    let c;
    for(let i=0; i<num; i++) {
        c = a;
        a = a+b;
        b = c;
    }
    return b;
}
function fibRecursion (num) {
    if(num == 0) {
      return 0;
    }else if(num == 1){
      return 1;
    }
    return fibRecursion(num - 1) + fibRecursion(num - 2);
}