$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:7
            },
            sname:{
                required:true,
                minlength:4
            },
            emailaddress:{
                required:true,
                email:true
            },
            Password:{
                required:true,
                minlength:5
            },
            day:{
                required:true
                
            },
            month:{
                required:true
                
            },
            year:{
                required:true
                
            },
            gender:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"fname is must",
                minlength:"need least 4 name"
                }
            }
        
    })
})