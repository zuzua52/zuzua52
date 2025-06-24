function changeImage(imageId, direction, images) {
    // Получаем текущую картинку
    const imgElement = document.getElementById(imageId);
    let currentIndex = images.indexOf(imgElement.src);

    // Рассчитываем новый индекс
    let newIndex = currentIndex + direction;

    // Если индекс выходит за пределы, делаем его цикличным
    if (newIndex < 0) {
        newIndex = images.length - 1; // Если влево, переходим к последнему изображению
    } else if (newIndex >= images.length) {
        newIndex = 0; // Если вправо, переходим к первому изображению
    }

    // Обновляем источник изображения
    imgElement.src = images[newIndex];
}
