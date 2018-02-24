"use strict";
//icheck js
$(document).ready(function() {
    $.ajaxSetup({

        headers: {

            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')

        }

    });
    $('input[type="checkbox"], input[type="radio"]').iCheck({
        checkboxClass: 'icheckbox_minimal-blue',
        radioClass: 'iradio_minimal-blue'
    });
    $('[type="reset"]').click(function() {
        setTimeout(function() {
            $("input").iCheck("update");
        }, 10);
    });
    $('#add_users_form').submit(function (e) {
        e.preventDefault();
        var file_data = $('#img').prop('files')[0];
        var username = $("input[name=username]").val();
        var email = $("input[name=email]").val();
        var contact = $("input[name=phone_number]").val();
        var address = $("input[name=address]").val();
        var city = $("input[name=city]").val();
        var country = $("#select23").val();
        var gender="";
        var radios = document.getElementsByName('gender');

        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                // do whatever you want with the checked radio
                gender=radios[i].value;
                // only one radio can be logically checked, don't check the rest
                break;
            }
        }

        var pincode = $("input[name=pincode]").val();
        var form_data = new FormData();
        form_data.append('username',username)
        form_data.append('file',file_data)
        form_data.append('email',email);
        form_data.append('contact',contact);
        form_data.append('address',address);
        form_data.append('city',city);
        form_data.append('country',country);
        form_data.append('gender',gender);
        form_data.append('pincode',pincode);

        // form_data.append('image', file_data);
        $.ajax({
            url:'/add_user',
            dataType: 'text',  // what to expect back from the PHP script, if anything
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',
            success: function(php_script_response){
                alert(php_script_response); // display response from the PHP script, if any
            }

        });
    }).bootstrapValidator({

        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: 'User name is required'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    emailAddress: {
                        message: 'The valid email address is required'
                    }
                }
            },
            phone_number: {
                validators: {
                    notEmpty: {
                        message: 'Phone number is required'
                    },
                    regexp: {
                        regexp: /^\(?([+,0-9]{4})\)?[-. ]?([1-9]{2})[-. ]?([1-9]{3})[-. ]?([0-9]{3})$/,
                        message: 'Enter valid phone number'
                    }
                }
            },

            gender: {
                validators: {
                    notEmpty: {
                        message: 'gender is required'
                    }
                }
            },
            address: {
                validators: {
                    notEmpty: {
                        message: 'Address is required'
                    }
                }
            },
            city: {
                validators: {
                    notEmpty: {
                        message: 'City is required'
                    }
                }
            },
            pincode: {
                validators: {
                    notEmpty: {
                        message: 'Pin code number is required'
                    },
                    regexp: {
                        regexp: /^(\+?1-?)?(\([0-9]\d{2}\)|[0-9]\d{2})-?[0-9]\d{2}$/,
                        message: 'Enter valid Pin code number'
                    }
                }
            }
        }
    }).on('success.form.bv', function(e) {
        e.preventDefault();
        swal({
            title: "Success.",
            text: "Successfully Submitted",
            type: "success",
            allowOutsideClick: false
        }).then(function() {
       // location.reload();
            reset();
        });
    });
    $('.radio_val').on('ifChanged', function(event) {
        $('#add_users_form').bootstrapValidator('revalidateField', $('.radio_val'));
    });
    //Select 2 country js
    function formatState(state) {
        if (!state.id) {
            return state.text;
        }
        var $state = $(
            '<span><img src="img/countries_flags/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
        );
        return $state;
    }
    $("#select23").select2({
        templateResult: formatState,
        templateSelection: formatState,
        placeholder: "select",
        theme: "bootstrap"
    });
    $('input[type=reset]').on('click', function() {
        $(".select2-selection__rendered").empty();
        $('#add_users_form').bootstrapValidator("resetForm");
    });
});
