$(document).ready(function(){
    $("#registration_form").validate({
        rules: {
            fname : {
                required: true,
                minlength: 3
                },

            fname : {
                required: true,
                minlength: 3
                    },
            email: {
                required: true,
                email: true
                },

            number: {
                required: true,
                      },

            password: {
                required: true,
                minlength: 8
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