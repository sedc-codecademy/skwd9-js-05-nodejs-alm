const API_URL = "http://localhost:3000";

const inventoryList = document.querySelector("#inventory-list");
const inventoryNavigationBtn = document.querySelector("#link-inventory");

const submitInventoryItemBtn = document.querySelector("#inventory-submit-btn");
const inventoryTitleInput = document.querySelector("#inventory-name");
const inventoryPriceInput = document.querySelector("#inventory-price");

const getInventoryItems = () => {
  fetch(`${API_URL}/inventory`)
    .then((response) => response.json())
    .then((result) => {
      renderInventoryItems(result.inventory);
    });
};

const renderInventoryItems = (items) => {
  let inner = "";
  items.forEach((item) => {
    inner += `
        <li class="list__inventory-item">
            <div class="list__inventory-item-card">
                <div class="list__inventory-item-card-content">
                    <div class="list__inventory-item-card-title">${item.title}</div>
                    <div class="list__inventory-item-card-price">$${item.price}</div>
                </div>
                <div class="list__inventory-item-actions">
                    <div class="list__inventory-item-card-edit" id=iedt-${item.id}>Edit</div>
                    <div class="list__inventory-item-card-delete" id=idel-${item.id}>Delete</div>
                </div>
            </div>
        </li>
        `;
  });
  inventoryList.innerHTML = inner;
};

const postNewInventoryItem = (item) => {
  fetch(`${API_URL}/inventory`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
};

const deleteInventoryItem = (itemId) => {
  fetch(`${API_URL}/inventory/${itemId}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
};

inventoryNavigationBtn.addEventListener("click", () => {
  getInventoryItems();
});

submitInventoryItemBtn.addEventListener("click", () => {
  const title = inventoryTitleInput.value;
  const price = parseFloat(inventoryPriceInput.value);

  const item = {
    title,
    price,
  };
  postNewInventoryItem(item);
});

inventoryList.addEventListener("click", (e) => {
  e.preventDefault();

  const targetId = e.target.id;
  const id = targetId.substr(5, targetId.length);

  if (targetId.startsWith("idel")) {
    deleteInventoryItem(id);
  }
});
