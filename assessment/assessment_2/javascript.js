
function formvalidation() {

    let name = document.forms["form1"]["fname"].value;
    let lastname = document.forms["form1"]["lname"].value;
    let email = document.forms["form1"]["e-mail"].value;
    let number = document.forms["form1"]["number"].value;
    let birthdate = document.forms["form1"]["date_of_birth"].value
    let city = document.forms["form1"]["city"].value
    let areapin = document.forms["form1"]["area_pin"].value
    let state = document.forms["form1"]["state"].value

    
    if (name == "")
    {

        alert('please enter your first name');
        return false;

    }

    if (lastname == "") {

        alert('please enter your last name')
        return false
    }

    if (email == "") {

        alert('please enter your E-mail')
        return false
    }

    if (number == "") {

        alert('please enter your Mobile number')
        return false
    }

    if (birthdate == ""){

        alert('please enter your birthdate')
        return false
    }

    
    if (city == ""){

        alert('please enter your city')
        return false
    }

    if (areapin == ""){

        alert('please enter your 6-digit areapin')
        return false
    }

    if (state == ""){

        alert('please enter your state')
        return false
    }
    
}
