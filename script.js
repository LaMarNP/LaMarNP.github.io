function defaultSetting(){
    document.getElementById('body').style = "background-color: #fcf6d7";
    document.getElementById('header1').style = "background-color: #d77e70";
    document.getElementById('header2').style = "background-color: #d77e70";
   }

function dark(){
    document.getElementById('body').style = "background-color: #0b0701; color: #fdfdfe";
    document.getElementById('header1').style = "background-color: #333397";
    document.getElementById('header2').style = "background-color: #333397";
    // document.getElementById('body').style = "color: #fdfdfe";
   }

function light(){
    document.getElementById('body').style = "background-color: #fdfdfc";
    document.getElementById('header1').style = "background-color: #feb082";
    document.getElementById('header2').style = "background-color: #feb082";
   }

//Calculations page
function perimeter(){
    let plength = document.getElementById('plength').value;
    let pwidth = document.getElementById('pwidth').value;
    let Rperimeter = 2*(Number(plength)+Number(pwidth));
    document.getElementById('perimeterResult').innerHTML = Rperimeter;
}

function area(){
    let alength = document.getElementById('alength').value;
    let awidth = document.getElementById('awidth').value;
    let Rarea = Number(alength)*Number(awidth);
    document.getElementById('areaResult').innerHTML = Rarea;
}

function volume(){
    let vlength = document.getElementById('vlength').value;
    let vwidth = document.getElementById('vwidth').value;
    let vheight = document.getElementById('vheight').value;
    let Rvolume = Number(vlength)*Number(vwidth)*Number(vheight);
    document.getElementById('volumeResult').innerHTML = Rvolume;
}


//Form Submission Javascript
document.addEventListener("DOMContentLoaded", function() {
    const usernameInput = document.getElementById('username');
    const userValidation = document.getElementById('uservalidation');
    usernameInput.addEventListener("focus", function() {
        userValidation.innerHTML = "Allowed: Upper/lower case letters, numbers, and _ ";
    });

    document.getElementById('username').addEventListener("input", function() {
			let username = this.value;

	const usermissing = [];

	if(username.length < 4)
	    usermissing.push("4-character minimum")

	if(username.length >12)
	    usermissing.push("12-character limit")

	let validUsername = /^[a-zA-Z0-9_]+$/.test(username);
    if (!validUsername) usermissing.push("Only letters, numbers, and underscores allowed");

	let output = ""

	if (usermissing.length > 0) {
				output = "<strong>Username Missing: </strong>";
				for (let i = 0; i < usermissing.length -1; i++)
					output += usermissing[i] + ", ";
				output += usermissing[usermissing.length -1];
			}
			document.getElementById('uservalidation').innerHTML = output;
    });
});


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('password').addEventListener("input", function() {
			let password = this.value;
			const missing = [];
			if (password.length < 8)
				missing.push("8-character minimum");

			let hasLower = /[a-z]/.test(password);
			if (!hasLower)
				missing.push("lower-case letter");

			let hasUpper = /[A-Z]/.test(password);
			if (!hasUpper)
				missing.push("Upper-case letter");

			let hasNumber = /[0-9]/.test(password);
			if (!hasNumber)
				missing.push("Missing Number");

			let hasSpecial = /[!@#$%]/.test(password);
			if (!hasSpecial)
				missing.push("Special character (!, @, #, $, %)");

			let output = "";

			if (missing.length > 0) {
				output = "<strong> Password Missing: </strong>";
				for (let i = 0; i < missing.length -1; i++)
					output += missing[i] + ", ";
				output += missing[missing.length -1];
			}
			document.getElementById('validation').innerHTML = output;

		    });
		});

document.addEventListener("DOMContentLoaded", function() {
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener("click", sanitization);
function escapeHTML(str){
            return str.replace(/</g, '&lt;')
                      .replace(/>/g, '&gt;')
                      .replace(/&/g, '&amp;')
                      .replace(/"/g, '&quot;')
                      .replace(/'/g, '&apos;');
        }
function sanitization(event) {
    event.preventDefault();
    let form = document.getElementById("commentForm")

     if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

    let userinput = form.querySelectorAll("input, textarea");

    let inputs = [];
    userinput.forEach(input => {
        let sanitizedValue = escapeHTML(input.value);
        inputs.push(sanitizedValue);
    });
    form.reset();
    alert("Comment Sent Successfully");
}
});







