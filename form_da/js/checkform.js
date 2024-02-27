
$("#registration").validate({
    rules: {
      firstname: "required",
      lastname: "required",
	  message: "required",
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5
      },
      password_confirmation: {
        required: true,
        minlength: 5
      },
	  
	  Color: {
        required: true        
      },
	  checkopt: {
            required: true,
            minlength: 1
          },
	item: 
          {
            required: true
          }
    },

    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      password_confirmation: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      email: "Please enter a valid email address",
	  Color: "Please select a Color<br/>",
	  checkopt: "Please select at least one checkbox",
	  message: "Vui lòng nhập tin nhắn của bạn",
	  item: "Please select at least one Select box"	  
    },
	/* check add error radio, checkbox*/
	errorPlacement: function(error, element) 
        {          
		   if (element.is(":radio") ) 
            {
                error.appendTo(element.parents('.radio-error'));
            }
			else  if (element.is(":checkbox") ) 
            {
                error.appendTo(element.parents('.radio-error'));
            }
            else 
            { // This is the default behavior 
                error.insertAfter(element);
            }	
			
        },						
		
    submitHandler: function(form) {
      form.submit();
    }
 });

