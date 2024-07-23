
function minEatingSpeed(h){
let l = 1
let max = Math.max(...h)
let min = Math.min(...h)
mid = Math.floor((max + min)/2)

while(l < max){
    let count = 0
    for(let i=1; i<h.length; i++){
        count += Math.ceil(h[i]/mid);
    }
    if(count>h.length){
        l = mid+1;
        console.log(' Koko need to continue eating in ' + mid + ' hours');    
    } else {
        console.log('KOko finished the piles in ' + mid + ' hours');
        max= mid;
    }
}
}

function minEatingSpeed(piles,h){
    let piles = [[3,6,7,11], [30,11,23,4,20], [30,11,23,4,20]];
    piles.forEach((piles)=> {
        let l = 1;
        let max = Math.max(...piles);
        let min = Math.min(...piles);
        mid = Math.floor((max + min)/2);
        
        while(l < max){
            let count = 0;
            for(let i=0; i<piles.length; i++){
                count += Math.ceil(piles[i]/mid);
            }
            if(count>h){
                l = mid+1;
                console.log(' Koko need to continue eating in ' + mid + ' hours');    
            }if(count < h){
                l = mid -1;

            }else {
                console.log('KOko finished the piles in ' + mid + ' hours');
                max= mid;
            }
        }
        
    });
    return mid;
    
}