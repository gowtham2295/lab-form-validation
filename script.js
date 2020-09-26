// Progression 1 
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above 
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails
document.getElementById('submit').addEventListener('click', checkValidate);

function checkValidate() {
    checkUserName();
    checkEmail();
    checkPassword();
}

function checkUserName() {
    var username = document.getElementById('usertext').value;
    var specialChar = /[+\-=\[\]{};':"\\|,.<>\/?!@#$%^&*()_]+/; 
    if (usertext == null || username.length < 8 || username.length > 15
        || username.split('').includes(' ')) {
        alert('Please enter valid Username!')
        return false;
    }
    else if (specialChar.test(username)) {
        alert('Please enter valid Username!')
        return false;
    }
    else {
        return true;
    }
}

// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise

function checkEmail() {
    let mailId = document.getElementById('emailtext').value;
    var specialChar = /[+\-=\[\]{};':"\\|,<>\/?!#$%^&*()]+/; //special characters 
    if (mailId == null) {
        alert('Please enter valid MailID!')
        return false;
    }
    else if (specialChar.test(mailId)) {
        alert('Please enter valid MailID!')
        return false;
    }
    else {
        return true;
    }
}

// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false

function checkPassword() {
    var password = document.getElementById('passwordtext').value;
    if (password.match(/[a-z]/g) && password.match(/[A-Z]/g) && password.match(/[0-9]/g)
        && password.match(/[^a-zA-Z\d]/g)) {
        return true;
    }
    else {
        alert('Please enter valid password!');
        return true;
    }
}
