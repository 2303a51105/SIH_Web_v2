const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const forgotLink = document.querySelector('.forgot-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const forgotPasswordForm = document.getElementById('form');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    wrapper.classList.remove('active-forgot');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
    wrapper.classList.remove('active-forgot');
});

forgotLink.addEventListener('click', () => {
    wrapper.classList.add('active-forgot');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
    wrapper.classList.remove('active-forgot');
});

forgotPasswordForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const btn = document.getElementById('button');
    btn.value = 'Sending...';
    const serviceID = 'service_7nvdplr'; // Replace with your EmailJS service ID
    const templateID = 'template_vs350q7'; // Replace with your EmailJS template ID

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'Send Email';
        alert('Please check your mail to reset your password.');
        wrapper.classList.remove('active-forgot');
        wrapper.classList.add('active');
    }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
    });
});
