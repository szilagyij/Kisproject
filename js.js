
function AgeSlider(){
    const ageSlider = document.getElementById('age');
    const ageLabel = document.getElementById('ageLabel');
    ageSlider.addEventListener('input', () => {
        ageLabel.innerText = ageSlider.value;
    });

}
let isSecondClick = false;
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

function RegBtn() {
    const regbtn = document.getElementById('regbtn');
    regbtn.addEventListener('click', () => {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const profession = document.getElementById('profession');
        const age = document.getElementById('age');
        const password = document.getElementById('password');

        if (name.value === '') {
            name.style.borderColor = 'red';
        } else {
            name.style.borderColor = '';
        }

        if (email.value === '') {
            email.style.borderColor = 'red';
        } else {
            email.style.borderColor = '';
        }

        if (profession.value === '') {
            profession.style.borderColor = 'red';
        } else {
            profession.style.borderColor = '';
        }

        if (age.value === '') {
            age.style.borderColor = 'red';
        } else {
            age.style.borderColor = '';
        }

        if (password.value === '') {
            password.style.borderColor = 'red';
        } else {
            password.style.borderColor = '';
        }

        if (name.value !== '' && email.value !== '' && profession.value !== '' && age.value !== '' && password.value !== '') {
            console.log(name.value, email.value, profession.value, age.value, password.value);
        } else {
            alert('Kérlek töltse ki az összes mez t!');
        }
    });
}

