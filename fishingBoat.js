/* Fishing Boat

1. The boat has many fish
2. Each fish will represent an obj
3. Each obj of fish will have these properties:
    - species
    - weight
    - price (ranges from $3 to 10/fish)
    - amount (how many of this species were caught today)
    */


// create a func that other modules can invoke to see the day's catch

const boatInventory = () => {
    const fish = [
    { id: 1, species: "Halibut", weight: 6, price: 3.55, amount: 30 },
    { id: 2, species: "Mackerel", weight: 3, price: 4.10, amount: 48 },
    { id: 3, species: "Salmon", weight: 5, price: 3.05, amount: 25 },
    { id: 4, species: "Walleye", weight: 2, price: 9.45, amount: 19 },
    { id: 5, species: "Sunfish", weight: 25, price: 5.18, amount: 1 },
    { id: 6, species: "Orange Roughy", weight: 4, price: 6.95, amount: 37 },
    { id: 7, species: "Tuna", weight: 18, price: 8.66, amount: 5 },
    { id: 8, species: "Puffer", weight: 2, price: 9.84, amount: 52 }
];
return fish;
}

let fish = boatInventory()
console.log(fish);

// Export the function so that other modules can import the function and invoke it.
module.exports = {boatInventory};