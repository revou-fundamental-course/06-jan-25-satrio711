document.getElementById('form-belajar').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const tanggalLahir = document.getElementById('tanggal-lahir').value;
    const jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked').value;
    const pesan = document.getElementById('pesan').value;

    const tableBody = document.getElementById('data-body');
    const newRow = tableBody.insertRow();

    newRow.insertCell(0).textContent = nama;
    newRow.insertCell(1).textContent = tanggalLahir;
    newRow.insertCell(2).textContent = jenisKelamin;
    newRow.insertCell(3).textContent = pesan;

    document.getElementById('form-belajar').reset();
});
