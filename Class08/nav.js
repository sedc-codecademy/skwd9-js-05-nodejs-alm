const purchaseSection = document.querySelector('.purchase');
const inventorySection = document.querySelector('.inventory');
const customersSection = document.querySelector('.customers');

const nav = document.querySelector('#navigation-list');

nav.addEventListener('click', (e) => {
    const location = e.target.id;
    if (location.startsWith('link')) {

        if (location === 'link-purchase'){
            purchaseSection.classList.remove('hide');
            inventorySection.classList.add('hide');
            customersSection.classList.add('hide');
        }
        if (location === 'link-inventory'){
            purchaseSection.classList.add('hide');
            inventorySection.classList.remove('hide');
            customersSection.classList.add('hide');
        }
        if (location === 'link-customers'){
            purchaseSection.classList.add('hide');
            inventorySection.classList.add('hide');
            customersSection.classList.remove('hide');
        }
    }
});