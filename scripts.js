// scripts.js
document.getElementById('carForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Input qiymatlarini olish
    const carName = document.getElementById('carName').value;
    const carModel = document.getElementById('carModel').value;
    const carYear = document.getElementById('carYear').value;

    // Yangi ro'yxat elementi yaratish
    const li = document.createElement('li');
    li.textContent = `${carName} - ${carModel} - ${carYear}`;

    // Ro'yxatga qo'shish
    document.getElementById('list').appendChild(li);

    // Formani tozalash
    document.getElementById('carForm').reset();
});
