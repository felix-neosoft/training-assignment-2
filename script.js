function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    let y = document.forms["myForm"]["contact"].value;
    let z = document.forms["myForm"]["description"].value;
    let p = document.forms["myForm"]["email"].value;
    var mailf = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneno = /^\d{10}$/;
    if (x == "") {
    alert("Name must be filled out");
    return false;
    }
    if (z == "") {
    alert("Query must be filled out");
    return false;
    }
    if(p.match(mailf)){
        if(y.match(phoneno)){
            return true;
        }
        else{
            alert("Contact Number is incorrect format")
            return false;
        }
    }
    else{
        alert("Email is incorrect format")
        return false;
    }
    
    

    
}