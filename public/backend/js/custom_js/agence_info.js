"use strict";
//summernote JS

$(document).ready(function(){

    $.ajaxSetup({

        headers: {

            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')

        }

    });

$('.summernote').summernote({
    height: 200
});
var f = 'bootstrap3';
var c = 'popup';

$(function() {
    $('#f').val(f);
    $('#c').val(c);
});


    $('.fileinput').on('change.bs.fileinput', function(){
        var file_data = $('#img').prop('files')[0];
        var form_data = new FormData();
        form_data.append('file', file_data);

        $.ajax({
            url: '/agence', // point to server-side PHP script
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


    });

    $("#conds").submit(function(e){

        e.preventDefault();


        var name='terms';
        var value = $("textarea[name=termsvaluse]").val();

        $.ajax({

            type:'POST',

            url:'/agence',

            data:{name:name, value:value},

            success:function(data){

                alert(data.success);

            }

        });



    });


    $("#social_form").submit(function(e){
        e.preventDefault();
        var facebook = $("input[name=facebook]").val();
        var twitter = $("input[name=twitter]").val();
        var yt_link = $("input[name=youtube]").val();
        var skype = $("input[name=skype]").val();
        $.ajax({

            type:'POST',

            url:'/agence',

            data:{name:'social', fb_link:facebook,twt_link:twitter,yt_link:yt_link,skype:skype},

            success:function(data){

                alert(data);

            }

        });



    });

    $(function() {


    //defaults
    $.fn.editable.defaults.url = '/agence';

    //editables
    $('#agencename').editable({
        url: '/agence',
        type: 'text',
        pk: 1,
        name: 'agencename',
        title: 'Enter Agence name',
        validate: function(value) {
            if ($.trim(value) == '') return 'This field is required';
        }
    });

    $('#email').editable({
        validate: function(value) {
            if ($.trim(value) == '') return 'This field is required';
        }
    });
    $('#contact').editable({
        validate: function(value) {
            var r = /^\(?([+,0-9]{4})\)?[-. ]?([1-9]{2})[-. ]?([1-9]{3})[-. ]?([0-9]{3})$/;
            if ($.trim(value) == '') {
                return 'This field is required'
            } else if (!r.test($.trim(value))) {
                return 'please enter valid contact no.'
            }
        }
    });
    $('#addr').editable({
        validate: function(value) {
            if ($.trim(value) == '') return 'This field is required';
        }
    });
    $('#city').editable({
        validate: function(value) {
            if ($.trim(value) == '') return 'This field is required';
        }
    });
    $('#pincode').editable({
        validate: function(value) {
            var p = /[0-9]{4}/;
            if ($.trim(value) == '') {
                return 'This field is required'
            } else if (!p.test($.trim(value))) {
                return 'please enter valid pincode no.'
            }
        }
    });
    $('#fax').editable({
        validate: function(value) {
            var r = /^\(?([+,0-9]{4})\)?[-. ]?([1-9]{2})[-. ]?([1-9]{3})[-. ]?([0-9]{3})$/;
            if ($.trim(value) == '') {
                return 'This field is required'
            } else if (!r.test($.trim(value))) {
                return 'please enter valid contact no.'
            }
        }
    });

    $('#url').editable({
        validate: function(value) {
            var u = /(http:\/\/www\.|https:\/\/www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
            if ($.trim(value) == '') {
                return 'This field is required'
            } else if (!u.test($.trim(value))) {
                return 'please enter valid URL.'
            }
        }
    });
    $('#users .editable').on('hidden', function(e, reason) {
        if (reason === 'save' || reason === 'nochange') {
            var $next = $(this).closest('tr').next().find('.editable');
            if ($('#autoopen').is(':checked')) {
                setTimeout(function() {
                    $next.editable('show');
                }, 300);
            } else {
                $next.focus();
            }
        }
    })

});
$(".reset-editable").on('click',function() {
    $(".note-editable").empty();
});
});