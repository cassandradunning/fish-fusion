/* In this project, you are going to build a purchasing pipeline for a bargain
 fish restaurant in your city.

There are 3 different actors in this system, and you will write functions 
in multiple modules of code to have them share data, and in the end, the 
restaurant will make its final purchases.

Fishing Boat - This is the source of the fish. The boat catches the fish and 
                makes the fresh catch available to purchasers.

Fishmonger - The fishmonger purchases fresh fish off the boat, and head chefs 
            around the city visit every morning to get fish for their daily menus.

Fish Restaurant - The chef at fish restaurant purchases fresh fish from the 
                fishmonger every day. To keep her prices low, she purchases lower 
                cost food and combines them in tasty ways that people might not expect.

*/

const { fishMenu } = require("./restaurant.js")

/* Uncomment this code block when you're ready to test your logic

const menu = fishMenu()
console.log(menu)

*/

