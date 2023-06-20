function selectItem(item, event) {
    event.preventDefault(); // Prevent the default link behavior

    // Remove the 'selected' class from all menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('selected'));

    // Add the 'selected' class to the clicked menu item
    const selectedItem = event.currentTarget;
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

        /*// Fetch data from Firestore and create cards
        db.collection('your_collection_name').get()
        .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            const card = createCard(doc.data());
            contentContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        });*/ //Codigo a alterar para ir buscar a data á firestore

    } else if (item === 'Recicle') {
        // DOM layout changes for 'Recicle' item
        // Example: Show specific content or update styles
        const heading = document.createElement('h1');
        heading.textContent = 'recicla-me';
        contentContainer.appendChild(heading);

        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container', 'grid', 'gap-3');
    
        // Create the cards for each type of "Eco ponto"
        const ecoPontos = [
        'Eco ponto Amarelo',
        'Eco ponto Azul',
        'Eco ponto Verde',
        'Eco ponto Vermelho',
        'Eco ponto Castanho'
        ];

        // Mapping between card names and colors
        const colorMap = {
            'Eco ponto Amarelo': '#f1c40f',
            'Eco ponto Azul': '#3498db',
            'Eco ponto Verde': '#2ecc71',
            'Eco ponto Vermelho': '#e74c3c',
            'Eco ponto Castanho': '#755353'
        };

        //create in DOM the cards
        ecoPontos.forEach(title => {
        const cardLink = document.createElement('a');
        cardLink.href = '';
        cardLink.classList.add('menu-link');
        const card = document.createElement('div');
        card.classList.add('card', 'p-2', 'g-col-6');
        const cardTitle = document.createElement('h3');
        cardTitle.textContent = title;
        card.style.backgroundColor = colorMap[title]; // Set the background color dynamically
    
        card.appendChild(cardTitle);
        cardLink.appendChild(card);
        cardContainer.appendChild(cardLink);

        // Add click event listener to each card
        cardLink.addEventListener('click', function(event) {
        event.preventDefault();

        // Show the modal and populate it with the card title
        const modal = document.getElementById('myModal');
        const modalTitle = modal.querySelector('.modal-title');
        modalTitle.textContent = title;
        modal.style.display = 'block';
        });
      });

    // Get the modal element
    const modal = document.getElementById("myModal");

    // Get the close button element
    const closeButton = modal.querySelector(".close");

    // Function to open the modal
    function openModal(title) {
    const modalTitle = modal.querySelector(".modal-title");
    modalTitle.textContent = title;
    modal.style.display = "block";
    }

    // Function to close the modal
    function closeModal() {
    modal.style.display = "none";
    }

    // Event listener for the close button
    closeButton.addEventListener("click", closeModal);

    // Event listener to close the modal when clicking outside of it
    window.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
    });

    contentContainer.appendChild(cardContainer);

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

    // Reset the scroll position to the top of the content container
  contentContainer.scrollTop = 0;
}

// Default selection
document.addEventListener('DOMContentLoaded', function() {
    const defaultMenuItem = document.querySelector('.menu-item:nth-child(3)');
    defaultMenuItem.click();
  });