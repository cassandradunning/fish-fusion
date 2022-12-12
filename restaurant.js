/*  Since the restaurant needs to see which fish are available at the 
fishmonger market, it will need to import the function that is exported 
from that module. */

    const { mongerInventory } = require("./fishMonger.js");

/*
- This module must import and invoke the function that is exported by the fish monger module. 
*/
 let chefPick = mongerInventory()

/*
- This module should also define a function that build an HTML version of their daily menu. 

- The function should return the generated HTML string. The function must be named fishMenu. */

   /* 1. Each day, the chef visits the monger and specifies the maximum price she is 
    able to spend per fish.*

    /* 2. If the monger has any fish at that price point or less, the chef buys 50% of 
    the existing inventory.*/
    console.log(`The chef has purchased 50% of the existing inventory:`)

    const chefPurchase = () => {
       // define a new array to push filtered items to
        let chefInventory= []
        // look inside the array restauarantInventory at fish
         for (const fish of chefPick)
        //  if the amount of fish is less than or equal to the price the chef sets
         if (fish.price <= 5.00){
            // the chef will purchase 50% of the amount
         chefInventory.push(fish.amount * .50)
        }
        return chefInventory;
    }
    const purchasedInventory = chefPurchase();
    console.log(purchasedInventory);

    /* 3. The chef then creates 3 different meals per fish - a soup, a grilled dinner, 
    and sandwich. For example, if tuna was bought, the following meals will be on 
    the menu.
        Tuna Soup
        Tuna Sandwich
        Grilled Tuna */

console.log(`Today's menu:`)

const fishMenu = () => {
   console.log(`<h1>Menu</h1>`)
   console.log(` <article class="menu">`)
//    fish out of the entire inventory that the chef picked
   for (const fish of chefPick)
    console.log(
   `<h2>${fish.species}</h2>
    <section class="menu__item"> ${fish.species} Soup</section>
    <section class="menu__item"> ${fish.species} Sandwich</section>
    <section class="menu__item"> Grilled ${fish.species}</section>
    </article>`)
}

const todaysMenu = fishMenu();
console.log(todaysMenu)


    /* 4. Your HTML structure must match the example below. Use the same elements and 
    the same class names. */

