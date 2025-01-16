document.querySelector('.message-us form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const gender = document.getElementById('gender').value;
    const message = document.getElementById('message').value;

    console.log(`Name: ${name}, Date: ${date}, Gender: ${gender}, Message: ${message}`);
    
    alert('Message sent successfully!');
    this.reset();
});
