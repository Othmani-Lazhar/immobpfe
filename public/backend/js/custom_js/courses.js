"use strict";
$(document).ready(function() {
    $.ajaxSetup({

        headers: {

            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')

        }

    });


    //summernote JS
    $('.summernote').summernote({
        height: 200
    });
    function validateEditor() {
        // Revalidate the content when its value is changed by Summernote
        $('#course_form').bootstrapValidator('revalidateField', 'content');

    };

    $('#course_form')
        .bootstrapValidator({
            excluded: [':disabled'],

            fields: {
                course_name: {
                    validators: {
                        notEmpty: {
                            message: 'The course name is required and cannot be empty'
                        }
                    }
                },
                course_duration: {
                    validators: {
                        notEmpty: {
                            message: 'The course duration is required and cannot be empty'
                        }
                    }
                },
                course_price: {
                    validators: {
                        notEmpty: {
                            message: 'The course price is required and cannot be empty'
                        }
                    }
                },

                content: {
                    validators: {
                        callback: {
                            message: 'The content is required and cannot be empty',

                        }
                    }
                }
            }
        }).on('success.form.bv', function(e) {
            e.preventDefault();



            var file_data = $('#img').prop('files')[0];
            var course_name = $("input[name=course_name]").val();
            var course_duration = $("input[name=course_duration]").val();
            var course_price = $("input[name=course_price]").val();
            var content = $("#description").val();
            var form_data = new FormData();
            form_data.append('course_name',course_name);
            form_data.append('course_duration',course_duration);
            form_data.append('course_price',course_price);
            form_data.append('file',file_data);
            form_data.append('description',content);

            $.ajax({
                url:'/add_course',
                dataType: 'json',  // what to expect back from the PHP script, if anything
                cache: false,
                contentType: false,
                processData: false,
                data: form_data,
                type: 'post',
                success: function(php_script_response){
                    swal({
                        title: "Success.",
                        text: "Successfully Submitted",
                        type: "success",
                        allowOutsideClick: false

                    }).then(function() {


                    });
                }

            });




        }).on('summernote.change', function() {
            validateEditor();
            //$('#add_faq').bootstrapValidator('revalidateField', 'content');
        })
        .find('[name="content"]').summernote({
            height: 400
        });
    $('input[type=reset]').on('click', function() {
        $(".note-editable").empty();
        $('#course_form').bootstrapValidator("resetForm");
    });

    function row(fTable, frow) {
        var fData = fTable.fnGetData(frow);
        var ftable = $('>td', frow);

        for (var i = 0, iLen = ftable.length; i < iLen; i++) {
            fTable.fnUpdate(fData[i], frow, i, false);
        }

        fTable.fnDraw();
    }

    function editRow(fTable, frow) {
        var fData = fTable.fnGetData(frow);
        var ftable = $('>td', frow);
        ftable[0].innerHTML = '<input type="text" class="form-control input-small" value="' + fData[0] + '">';
        ftable[1].innerHTML = '<input type="text" class="form-control input-small" value="' + fData[1] + '">';
        ftable[2].innerHTML = '<input type="text" class="form-control input-small" value="' + fData[2] + '">';
        ftable[3].innerHTML = '<a class="edit btn btn-success" href="">Save</a>';
        ftable[4].innerHTML = '<a class="cancel btn btn-danger" href="">Cancel</a>';
    }

    function saveRow(fTable, frow) {
        var jqInputs = $('input', frow);
        fTable.fnUpdate(jqInputs[0].value, frow, 0, false);
        fTable.fnUpdate(jqInputs[1].value, frow, 1, false);
        fTable.fnUpdate(jqInputs[2].value, frow, 2, false);
        fTable.fnUpdate('<a class="edit btn btn-primary" href=""><i class="fa fa-fw fa-edit"></i> Edit</a>', frow, 3, false);
        fTable.fnUpdate('<a class="delete btn btn-danger" href=""><i class="fa fa-trash-o"></i> Delete</a>', frow, 4, false);
        fTable.fnDraw();
    }

    function cancelfitnessEditRow(fTable, frow) {
        var jqInputs = $('input', frow);
        fTable.fnUpdate(jqInputs[0].value, frow, 0, false);
        fTable.fnUpdate(jqInputs[1].value, frow, 1, false);
        fTable.fnUpdate(jqInputs[2].value, frow, 2, false);
        fTable.fnUpdate('<a class="edit btn btn-primary" href=""><i class="fa fa-edit"> Edit</i></a>', frow, 3, false);
        fTable.fnUpdate('<a class="edit btn btn-primary" href=""><i class="fa fa-edit"> Edit</i></a>', frow, 3, false);
        fTable.fnDraw();
    }

    var table = $('#fitness-table');

    var fTable = table.dataTable({
        "lengthMenu": [
            [5, 15, 20, -1],
            [5, 15, 20, "All"]
        ],
        // set the initial value
        "pageLength": 5
    });


    var FitnessEditing = null;
    var FitnesNew = false;

    $('#fitness-table_new').click(function(e) {
        e.preventDefault();

        if (FitnesNew && FitnessEditing) {

            fTable.fnDeleteRow(FitnessEditing);
            FitnessEditing = null;
            FitnesNew = false;

            return;

        }

        var aiNew = fTable.fnAddData(['', '', '', '', '']);
        var frow = fTable.fnGetNodes(aiNew[0]);
        editRow(fTable, frow);
        FitnessEditing = frow;
        FitnesNew = true;
    });
    table.on('click', '.delete', function(e) {
        e.preventDefault();
        var frow = $(this).parent().parent('tr')[0];


        var idnew=$(this).parent().parent('tr').find("td")[0].id;//the "find" gets any <td>s which have an ID property, regardless of its value. So as long as there's only one <td> with an ID within the <tr>, this will work

        var form_data = new FormData();
        form_data.append('id',idnew)
        swal({
            title: "Delete?",
            text: "Are you sure want to delete this row",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#33a4d8",
            cancelButtonColor: "#fc7070",
            cancelButtonText: "No",
            closeOnConfirm: false,
            closeOnCancel: false

        }).then(function () {
            fTable.fnDeleteRow(frow);
        });
        $.ajax({
            url:'/del_course',
            dataType: 'json',  // what to expect back from the PHP script, if anything
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

    table.on('click', '.cancel', function(e) {
        e.preventDefault();

        if (FitnesNew) {
            fTable.fnDeleteRow(FitnessEditing);
            FitnesNew = false;
        } else {
            row(fTable, FitnessEditing);
            FitnessEditing = null;
        }
    });

    table.on('click', '.edit', function(e) {
        e.preventDefault();

        var frow = $(this).parents('tr')[0];

        if (FitnessEditing !== null && FitnessEditing != frow) {

            row(fTable, FitnessEditing);
            editRow(fTable, frow);
            FitnessEditing = frow;
        } else if (FitnessEditing == frow && this.innerHTML == "Save") {
            var id=$(this).parent().parent('tr').find("td")[0].id;
            var course_name=$(this).parent().parent('tr').find("input")[0];
            var course_duration=$(this).parent().parent('tr').find("input")[1];
            var course_price=$(this).parent().parent('tr').find("input")[2];

            var form_data = new FormData();
            form_data.append('id',id);
            form_data.append('course_name',course_name.value);
            form_data.append('course_duration',course_duration.value);
            form_data.append('course_price',course_price.value);

            $.ajax({
                url:'/upd_course',
                dataType: 'json',  // what to expect back from the PHP script, if anything
                cache: false,
                contentType: false,
                processData: false,
                data: form_data,
                type: 'post',
                success: function(){


                }

            });

            saveRow(fTable, FitnessEditing);
            FitnessEditing = null;
            swal({
                title: "Updated.",
                text: "Successfully Saved",
                type: "success",
                allowOutsideClick: false

            });


        } else {
            editRow(fTable, frow);
            FitnessEditing = frow;
        }
    });

    $('input[type=reset]').on('click', function() {
        $(".note-editable").empty();

    });
});
