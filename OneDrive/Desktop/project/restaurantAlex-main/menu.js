// Define an empty array to store food items
// menu.js
const foodItems = [
  {
      name: 'Barbecued Chicken (4)',
      price: '$8.95'
  },
  {
      name: 'Barbecued Beef (4)',
      price: '$9.95'
  },
  {
      name: 'Roast Pork Egg Roll',
      price: '$1.40'
  },
  {
      name: 'Spring Roll',
      price: '$1.40'
  },
  {
      name: 'Wonton Soup',
      price: '$2.25'
  },
  {
      name: 'Egg Drop Soup',
      price: '$2.25'
  },
  // ... add more items as needed
];


const popularItems = [
    "Chicken and Broccoli - $10.55",
    "Boneless Ribs (Sm) - $9.25",
    "Boneless Ribs (Lg) - $15.45",
    "Barbecued Ribs (Sm) - $9.25",
    "Barbecued Ribs (Lg) - $15.45",
    "Fried Pork Dumplings (8) - $7.75",
    "Steamed Pork Dumplings (8) - $7.75",
    "Pork Lo Mein (Large) - $10.45",
    "Sesame Chicken (Small) - $7.65",
    "Sesame Chicken (Large) - $12.95",
    "General Tso's Chicken (Small) - $7.65",
    "General Tso's Chicken (Large) - $12.95",
    "Shrimp and Broccoli - $11.05",
    "Chicken Wings (4) - $6.95"
  ];


// Function to generate and display menu items by category
function generateMenu() {
    const menuContainer = document.getElementById("menu-items");
    const appetizersContainer = document.getElementById("appetizers");
    const mainCourseContainer = document.getElementById("main-course");
    const popularItemsContainer = document.getElementById("popular-items");
  
    foodItems.forEach((item) => {
      const menuItemDiv = document.createElement("div");
      menuItemDiv.classList.add("menu-item");
      menuItemDiv.appendChild(createImageElement(item.image));
      menuItemDiv.appendChild(createNameElement(item.name));
      menuItemDiv.appendChild(createPriceElement(item.price));
  
      if (item.category === "Appetizer") {
        appetizersContainer.appendChild(menuItemDiv);
      } else if (item.category === "Main Course") {
        mainCourseContainer.appendChild(menuItemDiv);
      }
    });
  
    popularItems.forEach((item) => {
      const popularItemDiv = document.createElement("div");
      popularItemDiv.classList.add("popular-item");
      popularItemDiv.textContent = item;
  
      popularItemsContainer.appendChild(popularItemDiv);
    });
  }
  
  // Function to create image element
  function createImageElement(imagePath) {
    const imageElement = document.createElement("img");
    imageElement.src = imagePath;
    imageElement.alt = "Food Image";
    return imageElement;
  }
  
  // Function to create name element
  function createNameElement(name) {
    const nameElement = document.createElement("h3");
    nameElement.textContent = name;
    return nameElement;
  }
  
  // Function to create price element
  function createPriceElement(price) {
    const priceElement = document.createElement("p");
    priceElement.textContent = price;
    return priceElement;
  }
  
  // Call the generateMenu function to populate the menu
  generateMenu();