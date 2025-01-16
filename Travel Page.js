document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Your message has been sent!');
        form.reset();
    });
});
