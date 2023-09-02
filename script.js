
const fragment = document.createDocumentFragment();
for (let i = 1; i <= 1000; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `Item ${i}`;
    fragment.appendChild(listItem);
}

const container = document.getElementById('container');
container.appendChild(fragment);
