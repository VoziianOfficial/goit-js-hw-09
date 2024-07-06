let formData = {
    email: "", 
    message: ""
  };
  
  const form = document.querySelector(".feedback-form");
  
  function saveFormDataToLocalStorage() {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
  
  function loadFormDataFromLocalStorage() {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
      const savedFormData = JSON.parse(savedData);
      formData.email = savedFormData.email;
      formData.message = savedFormData.message;
      updateFormFields(); 
    }
  }
  
  function updateFormFields() {
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
  
  form.addEventListener('input', (event) => {
    const { name, value } = event.target;
    if (name in formData) {
      formData[name] = value.trim(); 
      saveFormDataToLocalStorage(); 
    }
  });
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    if (formData.email.trim() === '' || formData.message.trim() === '') {
      alert('Fill please all fields');
      return;
    }
    console.log(formData);
  
    localStorage.removeItem('feedback-form-state');
    formData = { email: "", message: "" }; 
    updateFormFields();
  });
  
  loadFormDataFromLocalStorage();
  