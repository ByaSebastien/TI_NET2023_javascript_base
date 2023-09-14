const myForm = document.myForm;

function fillForm() {
    myForm.firstname.value = "Gilbert";
    myForm.lastname.value = "L'ancetre";
    myForm.cp.value = "4000";
}

function resetForm() {
    myForm.reset();
}

function submitForm() {
    if (myForm.firstname.value.trim() === '') {
        console.log('Firstname required');
        return;
    }
    if (myForm.firstname.value.trim() === '') {
        console.log('Lastname required');
        return;
    }
    if (isNaN(myForm.cp.value)) {
        console.log('NAN');
        return;
    }
    let cp = Number(myForm.cp.value);
    if (cp < 1000 || cp > 9999) {
        console.log('Invalid');
        return;
    }

    console.log('OK');
}