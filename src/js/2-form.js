const formData = { email: "", message: "" };

const form = document.querySelector(".feedback-form");
const email = document.querySelector("input");
const textarea = document.querySelector("textarea");
const localStorageKey = "feedback-form-state";

function setToLocalStorage(obj, area) {
  area.addEventListener("input", (event) => {
    if (event.target === email) {
      obj.email = event.target.value;
    } else if (event.target === textarea) {
      obj.message = event.target.value;
    }
    localStorage.setItem(localStorageKey, JSON.stringify(obj));
    console.log(obj);
  });
}
setToLocalStorage(formData, email);
setToLocalStorage(formData, textarea);

document.addEventListener("DOMContentLoaded", (event)=>{
    const storageItem = localStorage.getItem(localStorageKey)
    if(storageItem){
        formData.email = JSON.parse(localStorage.getItem(localStorageKey)).email;
        formData.message = JSON.parse(localStorage.getItem(localStorageKey)).message;

        email.value = formData.email
        textarea.value = formData.message
    } 
    //console.log(formData);
})

form.addEventListener("submit", (event)=> {
    event.preventDefault();
    if(formData.email && formData.message){
        console.log(formData);
    } else {
        alert("Fill please all fields");
    }

    localStorage.removeItem(localStorageKey)
    email.value = "";
    textarea.value = "";
    formData.email = "";
    formData.message = "";
})