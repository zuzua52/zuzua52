document.getElementById('add-property-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(this); // Собираем данные формы

    try {
        const response = await fetch('/add-property', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (response.ok) {
            document.getElementById('response-message').innerText = result.message;
            this.reset(); // Очистка формы
        } else {
            document.getElementById('response-message').innerText = result.message;
        }
    } catch (error) {
        console.error('Ошибка:', error);
        document.getElementById('response-message').innerText = 'Произошла ошибка при добавлении объекта.';
    }
});
