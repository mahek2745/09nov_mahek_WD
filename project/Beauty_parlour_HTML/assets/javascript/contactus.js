
$(document).ready(function() {
    $("#form1").validate({
    rules: {
    name : {
    required: true,
    minlength: 3
    },
    email: {
    required: true,
    email: true
    },
    message: {
    required: true,
    message: true
    },
    },
    messages : {
    name: {
    minlength: "Name should be at least 3 characters"
    },
    email: {
    email: "The email should be in the format: abc@domain.tld"
    },
    },
    submitHandler: function(form) {
          form.submit();
        }
    
    });
    });