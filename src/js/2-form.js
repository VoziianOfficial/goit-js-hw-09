const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

let formData = {
  email: "",
  message: ""
};

// Функція сохранения formData в localStorage
function saveFormDataToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// Функція загрузки даних з localStorage в formData та заповнення форми
function loadFormDataFromLocalStorage() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    updateFormFields();
  }
}

// Функція оновления полей форми на основі даних з formData
function updateFormFields() {
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// Слухач подій input для відстеженя зін в формі
form.addEventListener('input', (event) => {
  const { name, value } = event.target;
  if (name in formData) {
    formData[name] = value.trim();
    saveFormDataToLocalStorage();
  }
});

// Слухач подій submit для перевірки полей до відправки форми
form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  // Очистка localStorage та formData після успішної відправки форми
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: "", message: "" };
  updateFormFields();
});

// При завантажені сторінки перевірка localStorage 
loadFormDataFromLocalStorage();
  


// ============================== 2 ==============================




// const STORAGE_KEY = "feedback-form-state";

// const form = document.querySelector(".feedback-form");

// populateForm();

// form.addEventListener("submit", handleFormSubmit);
// form.addEventListener("input", handleFormInput);

// /*
//  * - Скасовуємо стандартну поведінку
//  * - Видаляємо повідомлення зі сховища
//  * - Очищуємо форму
//  */

// function handleFormSubmit(event) {
//   event.preventDefault();

//   localStorage.removeItem(STORAGE_KEY);

//   event.currentTarget.reset();
// }

// /*
//  * - Отримуємо значення поля
//  * - Зберігаємо його у сховище
//  */

// function handleFormInput(event) {
//   const value = event.target.value;
//   const key = event.target.name;

//   let savedFeedbackData = {};

//   try {
//     savedFeedbackData = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   } catch (err) {
//     console.log(err);
//     return;
//   }

//   // якщо в ЛС існують дані (обʼєкт), то ми звертаємось вже до існуючого обʼєкту, та змінюмо/створюємо поля зі значеннями
//   if (savedFeedbackData) {
//     savedFeedbackData[key] = value;
//   } else {
//     // якщо в ЛС немає взагалі даних (обʼєкту), то ми його самостійно створюємо та записуємо туди перший ключ з значенням
//     savedFeedbackData = {
//       [key]: value,
//     };
//   }

//   try {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(savedFeedbackData));
//   } catch (err) {
//     console.log(err);
//     return;
//   }
// }

// /*
//  * - Отримуємо значення зі сховища
//  * - Якщо там щось було, оновлюємо DOM
//  */

// function populateForm() {
//   let savedFeedbackData = {};

//   try {
//     savedFeedbackData = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   } catch (err) {
//     console.log(err);
//     return;
//   }

//   // якщо в ЛС не існує таке значення, то виходимо з фукнції
//   if (!savedFeedbackData) {
//     return;
//   }

//   for (const key in savedFeedbackData) {
//     form.elements[key].value = savedFeedbackData[key];
//   }
// }
