document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalOverlay = document.getElementById('loginModal');
    const loginForm = document.getElementById('loginForm');

    // Function to open modal
    const openModal = () => {
        modalOverlay.classList.add('active');
        modalOverlay.setAttribute('aria-hidden', 'false');
        // Set focus to the first input field for better accessibility
        setTimeout(() => {
            document.getElementById('username').focus();
        }, 300);
    };

    // Function to close modal
    const closeModal = () => {
        modalOverlay.classList.remove('active');
        modalOverlay.setAttribute('aria-hidden', 'true');
        // Return focus to the open button
        openModalBtn.focus();
    };

    // Event Listeners
    openModalBtn.addEventListener('click', openModal);
    
    closeModalBtn.addEventListener('click', closeModal);
    
    // Close when clicking outside the modal content
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Handle Escape key for accessibility
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });

    // Handle form submission (prevent default for demo purposes)
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Login functionality would execute here.');
        closeModal();
    });
});
