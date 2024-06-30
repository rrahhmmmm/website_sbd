// Simulasi pencarian dan penambahan data customer
document.getElementById('customerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const customerId = document.getElementById('customerId').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    const customers = JSON.parse(localStorage.getItem('customers')) || [];

    // Mendeteksi apakah tombol Search atau Add yang ditekan
    const searchBtn = document.getElementById('searchBtn');
    const addBtn = document.getElementById('addBtn');

    if (searchBtn.matches(':focus')) {
        // Tombol Search ditekan
        const customer = customers.find(customer => customer.customerId === customerId);
        if (customer) {
            alert(`Data Customer:\nNama: ${customer.name}\nNomor Telepon: ${customer.phone}`);
        } else {
            alert('Data customer tidak ditemukan.');
        }
    } else if (addBtn.matches(':focus')) {
        // Tombol Add ditekan
        const newCustomer = {
            customerId,
            name,
            phone
        };
        customers.push(newCustomer);
        localStorage.setItem('customers', JSON.stringify(customers));
        alert('Data customer berhasil ditambahkan!');
    }
});
