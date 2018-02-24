"use strict";
$(document).ready(function() {

    $.ajaxSetup({

        headers: {

            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')

        }

    });


    $(".tags_options").select2({
        tags: true,
        tokenSeparators: [',', ' ']
    });


    $('.datetimepicker4').datetimepicker({

        keepOpen: false,
        useCurrent: false,
        minDate: new Date().setHours(0, 0, 0, 0)
    });
    var date = new Date();
    date.setDate(date.getDate() - 1);
    $('.datetimepicker4').datetimepicker({
        startDate: date
    });
    $('.datetimepicker4').on("dp.change", function(e) {
        $('#add_news_form').bootstrapValidator('revalidateField', 'time_from');
    });

    function validateEditor() {
        // Revalidate the content when its value is changed by Summernote
        $('#add_news_form').bootstrapValidator('revalidateField', 'content');
    };
    $('#add_news_form')
        .bootstrapValidator({
            excluded: [':disabled'],
            fields: {
                title: {
                    validators: {
                        notEmpty: {
                            message: 'The title is required and cannot be empty'
                        }
                    }
                },
                category: {
                    validators: {
                        notEmpty: {
                            message: 'The category is required and cannot be empty'
                        }
                    }
                },
                tags: {
                    validators: {
                        callback: {
                            message: 'The content is required and cannot be empty',
                            callback: function(value, validator, $fild) {
                                var options = validator.getFieldElements('tags').val();
                                return (options != null && options.length >= 1 && options.length <= 10);
                            }
                        }
                    }
                },
                time_from: {
                    validators: {
                        notEmpty: {
                            message: 'The date is required'
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
        }).on('success.form.bv',

        function(e) {
            e.preventDefault();

                var file_data = $('#img').prop('files')[0];
                var title = $("input[name=title]").val();
                var category = $("#categry option:selected").text();
                var tags = $("#activate option:selected").text();
                var time_from = $("input[name=time_from]").val();
                var content = $("#textarea").val();
                var form_data = new FormData();
                form_data.append('title',title)
                form_data.append('file',file_data)
                form_data.append('category',category);
                form_data.append('tags',tags);
                form_data.append('time_from',time_from);
                form_data.append('content',content);
                // form_data.append('image', file_data);
                $.ajax({
                    url:'/add_news',
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


            swal({
                title: "Success.",
                text: "Successfully Submitted",
                type: "success",
                allowOutsideClick: false
            }).then(function() {
               // window.location.href = "admin_addnews.html";
            });
        }



        ).on('summernote.change', function() {
            validateEditor();
            $('#add_news_form').bootstrapValidator('revalidateField', 'content');
        })
        .find('[name="content"]').summernote({
            height: 200
        })
        .change(function(e) {
            alert("sadjsakdj");
            $('#add_news_form').bootstrapValidation('revalidateField', 'tags');
        }).find('[name="tags"]').select2({
            tags: true
        })
        // $('#activate').on('ifChanged', function(event){
        //     $('#add_news_form   ').bootstrapValidator('revalidateField', $('#activate'));
        // });
    $('input[type=reset]').on('click', function() {
        $(".note-editable").empty();
        $(".select2-selection__choice").empty().css("border", "0");
        $('#add_news_form').bootstrapValidator("resetForm");
        if (($(".fill_it").empty()) && ($(".note-editable").empty()) && ($(".select2-selection__choice").empty())) {
            $("input[type=submit]").attr('disabled', 'disabled');
        }
    });
});
