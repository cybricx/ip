const express = require('express');
const app = express();
const port = 3000;

const inventory = {}; // Inventory database (simple object).
let idCounter = 1; // Initialize ID counter.

app.use(express.json()); // Parse JSON in request body.

// Event Loop: Server listens for incoming requests.
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Callback to add an item to the inventory with an ID.
function addItemToInventory(itemName, callback) {
  const itemId = idCounter++; // Assign an ID to the item.
  inventory[itemId] = itemName; // Add the item to the inventory.
  callback(`"${itemName}" with ID ${itemId} has been added to the inventory.`);
}

// Callback to get the inventory with IDs.
function getInventory(callback) {
  callback(inventory);
}

// Callback to delete an item from the inventory by ID.
function deleteItemFromInventory(itemId, callback) {
  if (inventory[itemId]) {
    const itemName = inventory[itemId];
    delete inventory[itemId];
    callback(`"${itemName}" with ID ${itemId} has been removed from the inventory.`);
  } else {
    callback(`Item with ID ${itemId} not found in the inventory.`);
  }
}

// Handle POST request to add an item to the inventory.
app.post('/addItem', (req, res) => {
  const itemName = req.body.itemName;
  addItemToInventory(itemName, (result) => {
    // Callback: Send a response acknowledging that the item has been added.
    res.send(result);
  });
});

// Handle GET request to get the inventory with IDs.
app.get('/getInventory', (req, res) => {
  getInventory((result) => {
    // Callback: Send the inventory data as a response.
    res.json(result);
  });
});

// Handle DELETE request to delete an item from the inventory by ID.
app.delete('/deleteItem/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  deleteItemFromInventory(itemId, (result) => {
    // Callback: Send a response about item deletion.
    res.send(result);
  });
});
