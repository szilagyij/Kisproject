// Életkor frissítése
function AgeSlider() {
    const ageSlider = document.getElementById('age');
    const ageLabel = document.getElementById('ageLabel');
    ageLabel.innerText = ageSlider.value;
}

// Jelszó generálás
function PasswordGenerate() {
    const generatePasswordButton = document.getElementById('generatePassword');
    generatePasswordButton.addEventListener('click', () => {
        const passwordLength = 12;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{};:,.<>/?';
        let password = '';
        for (let i = 0; i < passwordLength; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        document.getElementById('password').value = password;
    });
}

PasswordGenerate();

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

});
