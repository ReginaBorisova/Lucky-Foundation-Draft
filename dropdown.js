let dropdowns = document.querySelectorAll('.dropdown');

for (let i = 0; i < dropdowns.length; i++) {

    dropdowns[i].querySelector('a').addEventListener('click', (e) => {

        e.preventDefault();

        let dropdownContent = this.parentNode.querySelector('.dropdown-content');

        if (dropdownContent.style.display === 'block') {

            dropdownContent = 'none';

        } else {

            dropdownContent.style.display = 'block';
            
        }
    });
}