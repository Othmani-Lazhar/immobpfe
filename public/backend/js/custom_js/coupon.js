"use strict";
$(document).ready(function() {

    $.ajaxSetup({

        headers: {

            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $('input[type=reset]').on('click', function() {
        $('#coupon_form').bootstrapValidator("resetForm");
    });
    $('.datetimepicker6').datetimepicker({

        keepOpen: false,
        useCurrent: false,
        minDate: new Date().setHours(0, 0, 0, 0)
    });
    var date = new Date();
    date.setDate(date.getDate() - 1);
    $('.datetimepicker6').datetimepicker({
        startDate: date
    });

    $('.datetimepicker7').datetimepicker({

        keepOpen: false,
        useCurrent: false,
        minDate: new Date()
    });

    $('.datetimepicker6').on("dp.change", function(e) {
        $('.datetimepicker7').data("DateTimePicker").minDate(e.date);
        $('#coupon_form').bootstrapValidator('revalidateField', 'date_start');
    });

    $('.datetimepicker7').on("dp.change", function(e) {
        $('.datetimepicker6').data("DateTimePicker").maxDate(e.date);
        $('#coupon_form').bootstrapValidator('revalidateField', 'date_end');

    });

    function validateEditor() {
        // Revalidate the content when its value is changed by Summernote
        $('#coupon_form').bootstrapValidator('revalidateField', 'content');

    };
    $('#coupon_form')
        .bootstrapValidator({
            excluded: [':disabled'],

            fields: {
                title: {
                    validators: {
                        notEmpty: {
                            message: 'The coupon name is required and cannot be empty'
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
            url:'/add_coupon',
            dataType: 'text',  // what to expect back from the PHP script, if anything
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
                // window.location.href = "admin_coupon.html";

                });

            }

        });


        }).on('summernote.change', function() {
            validateEditor();
            $('#coupon_form').bootstrapValidator('revalidateField', 'content');
        })
        .find('[name="content"]').summernote({
            height: 200
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
        ftable[3].innerHTML = '<input type="text" class="form-control input-small" value="' + fData[3] + '">';
        ftable[4].innerHTML = '<a class="edit btn btn-success" href="">Save</a>';
        ftable[5].innerHTML = '<a class="cancel btn btn-danger" href="">Cancel</a>';
    }

    function saveRow(fTable, frow) {
        var jqInputs = $('input', frow);
        fTable.fnUpdate(jqInputs[0].value, frow, 0, false);
        fTable.fnUpdate(jqInputs[1].value, frow, 1, false);
        fTable.fnUpdate(jqInputs[2].value, frow, 2, false);
        fTable.fnUpdate(jqInputs[3].value, frow, 3, false);
        fTable.fnUpdate('<a class="edit btn btn-primary" href=""><i class="fa fa-fw fa-edit"></i> Edit</a>', frow, 4, false);
        fTable.fnUpdate('<a class="delete btn btn-danger" href=""><i class="fa fa-trash-o"></i> Delete</a>', frow, 5, false);
        fTable.fnDraw();
    }

    function cancelfitnessEditRow(fTable, frow) {
        var jqInputs = $('input', frow);
        fTable.fnUpdate(jqInputs[0].value, frow, 0, false);
        fTable.fnUpdate(jqInputs[1].value, frow, 1, false);
        fTable.fnUpdate(jqInputs[2].value, frow, 2, false);
        fTable.fnUpdate(jqInputs[3].value, frow, 3, false);
        fTable.fnUpdate('<a class="edit btn btn-primary" href=""><i class="fa fa-fw fa-edit"></i>    Edit</a>', frow, 4, false);
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

        var aiNew = fTable.fnAddData(['', '', '', '', '', '']);
        var frow = fTable.fnGetNodes(aiNew[0]);
        editRow(fTable, frow);
        FitnessEditing = frow;
        FitnesNew = true;
    });
    table.on('click', '.delete', function(e) {
        e.preventDefault();
        var frow = $(this).parent().parent('tr')[0];
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

        }).then(function() {

            fTable.fnDeleteRow(frow);
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
            saveRow(fTable, FitnessEditing);
            FitnessEditing = null;
            swal({
                title: "Updated.",
                text: "Successfully Saved",
                type: "success",
                allowOutsideClick: false

            })
        } else {
            editRow(fTable, frow);
            FitnessEditing = frow;
        }
    });
    $("#add-news-reset-editable").click(function() {
        $(".note-editable").empty();
    });
});
