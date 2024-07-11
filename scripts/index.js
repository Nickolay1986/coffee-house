"use strict"
// window.onload = function() {
//   setTimeout(function() {
//     window.scrollTo(0, 0);
//   }, 100);
// };
// const links = document.querySelectorAll('a');
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('mobMenu').addEventListener('click', function () {
        document.querySelector('.head').classList.toggle('open');
        if (document.body.style.overflow !== 'hidden') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
})

const nav = document.querySelector('.nav');
const links = nav.querySelectorAll('li a');

links.forEach(link => {
    link.addEventListener('click', function () {
    document.getElementById('mobMenu').click();
  })
});


let intervalId;
const inactivityTime = 5000; // 5 секунд неактивности

function resetTimer() {
  clearInterval(intervalId);
  intervalId = setInterval(function() {
    // Действие при неактивности на странице
      nextButton.click();
    // Другие действия при неактивности на странице
  }, inactivityTime);
}

function handleActivity() {
  resetTimer();
}


// Получаем ссылку на объект <object>
const objectElement = document.querySelector('.obj');
let nextButton;
let prevButton;
// Внутри содержимого включенного документа
objectElement.addEventListener('load', function() {
  const contentDocument = objectElement.contentDocument;

  // Получаем элемент .next внутри включенного документа
    nextButton = contentDocument.querySelector('.next');
    prevButton = contentDocument.querySelector('.prev');
  // Выполняем клик на элементе .next
    nextButton.addEventListener('click', function() {
        
    handleActivity();
    
    });
    
    prevButton.addEventListener('click', function() {
        
        handleActivity();
        
      });
});













document.addEventListener('mousemove', handleActivity);
document.addEventListener('keydown', handleActivity);
document.addEventListener('scroll', handleActivity);



