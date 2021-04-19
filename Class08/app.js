const API_URL = 'http://localhost:3000';

const inventoryList = document.querySelector('#inventory-list');
const inventoryNavigationBtn = document.querySelector('#link-inventory');

const getInventoryItems = () => {
    fetch(`${API_URL}/inventory`)
        .then((response) => response.json())
        .then((result) => {
            renderInventoryItems(result.inventory);
        })
}

const renderInventoryItems = (items) => {
    let inner = '';
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
    })
    inventoryList.innerHTML = inner;
}

inventoryNavigationBtn.addEventListener('click', () => {
    getInventoryItems();
});
