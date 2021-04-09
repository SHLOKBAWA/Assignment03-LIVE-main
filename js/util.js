function doValidate_frmAddFriend() {
    var form=$("#frmAddFriend");
    form.validate({
        rules: {
            txtName1: {
                required: true,
                minlength: 2
            },
            txtFullName1: {
                required: true,
                rangelength: [2, 20]
            },
            txtDateofBirth1:
                {
                    required: true,
                    agecheck: true
                }

        },
        messages:{

            txtName1: {
                required: "You must specify name",
                minlength: "Name mut be at least 2 characters long"
            },
            txtFullName1: {
                required:"You must specify full name",
                rangelength: "Full name must be 2-20 characters long."
            },
            txtDateofBirth1:
                {
                    required: "true",
                    agecheck: true
                }

        }
    });            // Json-Object.

    Jquery.validator.addMethod("agecheck",
        function (value, element)
        {

        },
        "Our custom age checker.");
    function doValidate_frmExtra()
    {
        var form=$("#frmExtra");
        form.validate({
            rules:
                {
                    txtPassword: {
                        required: true,
                        passwordCheck: true,
                        minlength: 8
                    }
                }
        })
    }
    return form.valid();

}