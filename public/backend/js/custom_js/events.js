"use strict";
$(document).ready(function() {

    $.ajaxSetup({

        headers: {

            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });




    $('#datetimepicker6').datetimepicker({
        keepOpen: false,
        useCurrent: false,
        minDate: new Date().setHours(0, 0, 0, 0)
    });
    var date = new Date();
    date.setDate(date.getDate() - 1);
    $('#datetimepicker6').datetimepicker({
        startDate: date
    });
    $('#datetimepicker7').datetimepicker({
        keepOpen: false,
        useCurrent: false,
        minDate: new Date().setHours(0, 0, 0, 0)
    });
    $('#datetimepicker6').on("dp.change", function(e) {
        $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
        $('#add_events_form').bootstrapValidator('revalidateField', 'date_start');
    });
    $('#datetimepicker7').on("dp.change", function(e) {
        $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
        $('#add_events_form').bootstrapValidator('revalidateField', 'date_end');
    });

    function validateEditor() {
        // Revalidate the content when its value is changed by Summernote
        $('#add_events_form').bootstrapValidator('revalidateField', 'content');
    };
    $('#add_events_form')
        .bootstrapValidator({
            excluded: [':disabled'],
            fields: {
                title: {
                    validators: {
                        notEmpty: {
                            message: 'The event title is required and cannot be empty'
                        }
                    }
                },
                date_start: {
                    validators: {
                        notEmpty: {
                            message: 'The start date is required and cannot be empty'
                        }
                    }
                },
                date_end: {
                    validators: {
                        notEmpty: {
                            message: 'The end date is required and cannot be empty'
                        }
                    }
                },
                content: {
                    validators: {
                        callback: {
                            message: 'The content is required and cannot be empty'
                        }
                    }
                }
            }
        }).on('summernote.change', function() {
            validateEditor();
            //$('#add_faq').bootstrapValidator('revalidateField', 'content');
        }).on('success.form.bv', function(e) {
        e.preventDefault();

        var file_data = $('#img').prop('files')[0];
        var title = $("input[name=title]").val();
        var time_from = $("input[name=date_start]").val();
        var time_end = $("input[name=date_end]").val();
        var content = $("#textarea").val();
        var form_data = new FormData();
        form_data.append('title',title)
        form_data.append('file',file_data)
        form_data.append('date_from',time_from);
        form_data.append('date_end',time_from);
        form_data.append('content',content);
        $.ajax({
            url:'/add_events',
            dataType: 'text',  // what to expect back from the PHP script, if anything
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',
            success: function(php_script_response){
              //  alert(php_script_response); // display response from the PHP script, if any
            }

        });

        swal({
            title: "Success.",
            text: "Successfully Submitted",
            type: "success",
            allowOutsideClick: false
        }).then(function() {
            // window.location.href = "admin_addnews.html";
        });
        })
        .find('[name="content"]').summernote({
            height: 200
        });
    $('input[type=reset]').on('click', function() {
        $(".note-editable").empty();
        $('#add_events_form').bootstrapValidator("resetForm");
    });
});
