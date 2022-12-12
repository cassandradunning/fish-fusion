/* Since the fish monger needs to see what the fresh catch of the day is,
it will need to import the function that is defined in the fishing boat module. 
You use the require() function to grab what another module exported. */

const { boatInventory } = require("./fishingBoat.js");

/* This module must import and invoke the function that is exported by the 
fishing boat module. This module should also define and export its own function 
that generates its own inventory that restaurants can use to purchase fish for 
their daily menus. The returned inventory should be an array of objects.

The exported function must be named mongerInventory.
*/

/*MONGER INVENTORY from the fishingBoat
1. Each day, the fishmonger buys exactly 10 of each inexpensive (see below) fish 
caught by the fishing boat. If any of the fishing boat's fish quantity is less 
than 10, the fish monger does not buy it.

2. The fishmonger does not buy any fish from the boat that is priced higher than 
$7.50 per fish. */

//define & connect to boatInventory
let inventory = boatInventory();
//console.log(inventory);

// To print the header:
console.log(`The fishmonger purchased these fish, from the boat inventory:`)

//define func
        const mongerInventory = () => {
            //  define a new array to push filtered items to
            const filteredFish = []
            //create a nested loop to iterate off of the price and amount in the boatInventory array
                for (const fish of inventory)
                //  if the amount is less than 10, then do not buy
                //  if the price is higher than 7.5 do not buy
                if (fish.amount >= 10 && fish.price < 7.5){
                    // change the amount for each fish to 10
                    fish.amount = 10;
                    // adds the filtered amount to the beginning of new array filteredFish
                filteredFish.push(fish)
                }
                // return the array filteredFish
                return filteredFish;
            
        }

       const fishBought = mongerInventory()
       console.log(fishBought);
        
       module.exports={mongerInventory}

/* Restaurant Chef from Monger Inventory
3. The fishmonger lets the chef of a restaurant specify what their maximum budget 
is per fish. For example, a chef can tell the monger that she can only spend $5.00 
per fish. The function should then return only fish that cost $5.00 or less. */
console.log(`The chef purchased these fish, from the fish monger's inventory:`)

        const chefInventory = () => {
            // define a new array to push filtered items to
            const restaurantFish =[]
            for (const fish of inventory)
            // if the price is 5 or less then buy
            if(fish.price <= 5.00){
                restaurantFish.push(fish)
            }
                return restaurantFish;
            
        }
    
           const chefFish = chefInventory()
           console.log(chefFish)

        // module.exports={chefInventory}

/* 4. Each fish object provided by the fish monger should have a quantity of 10 
instead of the original quantity from the fishing boat. */

// already has an updated inventory of 10, bc we filtered it