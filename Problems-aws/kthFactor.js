/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    //n%i === 0
    let sorted = ((a,b) => b - a);
    let factor =[];
    for(let i=1; i<=n; i++){
        if(n%i === 0){
            factor.push(i);
        } else{
            continue;
        }
    }
};