function minEatingSpeed(piles,h){
    let minSpeed =1;
    let maxSpeed= Math.max(...piles);

    while(minSpeed <maxSpeed){
        // Calculate the midSpeed
        let midSpeed = Math.floor(minspeed + maxSpeed)/2;
        let hours =0;

        for(let pile of piles){
            // Calculate the number of hours needed to eat each pile at midSpeed
            hours += Math.ceil(pile/midSpeed);
         }// If the total hours needed is less than or equal to h, try a slower speed
         if(hours <= h){
            maxSpeed = midSpeed;
         } else {
                        // Otherwise, try a faster speed
            minSpeed = midSpeed +1;
         }

    }
    return minSpeed;
}