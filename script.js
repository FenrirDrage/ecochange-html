function selectItem(item, event) {
    event.preventDefault(); // Prevent the default link behavior

    // Remove the 'selected' class from all menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('selected'));

    // Add the 'selected' class to the clicked menu item
    const selectedItem = event.target;
    selectedItem.classList.add('selected');

    const topBar = document.getElementById('topbar');
    topBar.textContent = item;

    // Perform DOM layout changes based on the selected item
    const contentContainer = document.getElementById('content-container');
    contentContainer.innerHTML = ''; // Clear the container

    if (item === 'Local') {
        // DOM layout changes for 'Local' item
        // Example: Show specific content or update styles
        const heading = document.createElement('h1');
        heading.textContent = 'teste local';
        contentContainer.appendChild(heading);

    } else if (item === 'Recicle') {
        // DOM layout changes for 'Recicle' item
        // Example: Show specific content or update styles
        const heading = document.createElement('h1');
        heading.textContent = 'recicla-me';
        contentContainer.appendChild(heading);

    } else if (item === 'Cards') {
        // DOM layout changes for 'Cards' item
        // Example: Show specific content or update styles
        const heading = document.createElement('h1');
        heading.textContent = 'CARTÕES';
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');
        const cardLink = document.createElement('a');
        cardLink.href = '';
        cardLink.classList.add('menu-link');
        const card = document.createElement('div');
        card.classList.add('card');
        const cardHeading = document.createElement('h1');
        cardHeading.textContent = '+';
        const cardSubheading = document.createElement('h2');
        cardSubheading.textContent = 'Adicionar Cartão';

        card.appendChild(cardHeading);
        card.appendChild(cardSubheading);
        cardLink.appendChild(card);
        cardContainer.appendChild(cardLink);
        contentContainer.appendChild(heading);
        contentContainer.appendChild(cardContainer);
        document.body.appendChild(contentContainer); // Append to the document body

    } else if (item === 'Ranking') {
        // DOM layout changes for 'Ranking' item
        // Example: Show specific content or update styles
        const heading = document.createElement('h1');
        heading.textContent = 'partida rankeada';
        contentContainer.appendChild(heading);

    } else if (item === 'User') {
        // DOM layout changes for 'User' item
        // Example: Show specific content or update styles
        const heading = document.createElement('h1');
        heading.textContent = 'pokerface';
        contentContainer.appendChild(heading);
    }
}

// Default selection
document.addEventListener('DOMContentLoaded', function() {
    const defaultMenuItem = document.querySelector('.menu-item:nth-child(3)');
    defaultMenuItem.click();
  });