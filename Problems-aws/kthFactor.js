/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    let factors = [];
    let fac = factors.length
    for(let i=1; i<=n; i++) {
        if(n%i === 0) {
            factors.push(i);
        }
    }if(fac < k) {
        return -1;
    }
    return factors[k-1];
};