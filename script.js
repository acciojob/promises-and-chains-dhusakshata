//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const ageInput = document.getElementById("age");
    const nameInput = document.getElementById("name");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const age = parseInt(ageInput.value);
        const name = nameInput.value;

        if (!age || !name) {
            alert("Please fill out all fields.");
            return;
        }

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (age >= 18) {
                    resolve(`Welcome, ${name}. You can vote.`);
                } else {
                    reject(`Oh sorry ${name}. You aren't old enough.`);
                }
            }, 4000);
        });

        promise
            .then(message => {
                alert(message);
            })
            .catch(errorMessage => {
                alert(errorMessage);
            });
    });
});
