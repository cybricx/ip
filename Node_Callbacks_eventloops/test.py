import requests

url = 'http://localhost:3000'

def add_item_to_inventory(item_name):
    response = requests.post(f'{url}/addItem', json={'itemName': item_name})
    print(response.text)

def get_inventory():
    response = requests.get(f'{url}/getInventory')
    print("Inventory:")
    inventory_data = response.json()
    for item_id, item_name in inventory_data.items():
        print(f"ID: {item_id}, Item: {item_name}")

def delete_item_by_id(item_id):
    response = requests.delete(f'{url}/deleteItem/{item_id}')
    print(response.text)

while True:
    print("\nInventory Management Menu:")
    print("1. Add Item to Inventory")
    print("2. Get Inventory")
    print("3. Delete Item by ID")
    print("4. Exit")
    choice = input("Enter your choice: ")

    if choice == '1':
        item_name = input("Enter the item name: ")
        add_item_to_inventory(item_name)
    elif choice == '2':
        get_inventory()
    elif choice == '3':
        item_id = int(input("Enter the item ID to delete: "))
        delete_item_by_id(item_id)
    elif choice == '4':
        break
    else:
        print("Invalid choice. Please try again.")
