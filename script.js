document.addEventListener('DOMContentLoaded', () => {
    const actionButton = document.getElementById('action-btn');
    const qrImage = document.getElementById('qr-image');

    actionButton.addEventListener('click', () => {
        // Демонстрационное изменение данных в QR-коде
        const randomValue = Math.floor(Math.random() * 1000);
        qrImage.src = `https://qrserver.com{randomValue}`;
        
        console.log('QR-код был обновлен с новым значением.');
    });
});
