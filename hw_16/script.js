// Задание
// Сделать страничку-таймер обратного отсчета. На страничке должно быть поле для ввода времени в секундах, кнопка "старт" и обратный отсчет должен начаться при нажатии на кнопку. Отсчет должен быть виден на страничке и обновляться каждую секунду. По окончании отсчета должен появиться тест "время вышло", или по желанию звуковое оповещение, таймер при этом должен остановиться.

const btnStart = document.querySelector('.start_btn');
const input = document.querySelector('.time_input');
const timerDisplay = document.querySelector('.timer_display');
const message = document.querySelector('.message');

btnStart.addEventListener('click', countdownHandler);

function countdownHandler() {
    let time = parseInt(input.value);    

     // Проверка на корректное значение
     if (isNaN(time) || time <= 0) {
        alert("Пожалуйста, введите корректное время в секундах.");
        return;
     }

     message.style.display = 'none'; // Скрыть сообщение о завершении
     timerDisplay.textContent = formatTime(time); // Отображение начального времени

     const intervalId = setInterval(() => {
        time--;

        if (time < 0) {
            clearInterval(intervalId);
            message.style.display = 'block'; // Показать сообщение о завершении
            
           setTimeout(()=>{input.value = '';
            message.style.display = 'none';
           }, 2000)
        } else {
            timerDisplay.textContent = formatTime(time); // Обновление таймера
         
        }
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

