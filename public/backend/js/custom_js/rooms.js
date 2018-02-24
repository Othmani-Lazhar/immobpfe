"use strict";
//table js

$(document).ready(function()
{
    $.ajaxSetup({

        headers: {

            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')

        }

    });


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

    $('#fitness-table_new').click(function (e) {
        e.preventDefault();




        if (FitnesNew && FitnessEditing) {

            fTable.fnDeleteRow(FitnessEditing);
            FitnessEditing = null;
            FitnesNew = false;

            return;

        }

        var aiNew = fTable.fnAddData(['', '', '']);
        var frow = fTable.fnGetNodes(aiNew[0]);
        editRow(fTable, frow);
        FitnessEditing = frow;
        FitnesNew = true;
    });
    table.on('click', '.delete', function (e) {
        e.preventDefault();
        var frow = $(this).parent().parent('tr')[0];
        var idroom=$(this).parent().parent('tr').find("td")[0].id;//the "find" gets any <td>s which have an ID property, regardless of its value. So as long as there's only one <td> with an ID within the <tr>, this will work

        var form_data = new FormData();
        form_data.append('id',idroom)

        $.ajax({
            url:'/del_rooms',
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

    });


    table.on('click', '.cancel', function (e) {
        e.preventDefault();

        if (FitnesNew) {
            fTable.fnDeleteRow(FitnessEditing);
            FitnesNew = false;
        } else {
            row(fTable, FitnessEditing);
            FitnessEditing = null;
        }
    });

    table.on('click', '.edit', function (e) {
        e.preventDefault();

        var frow = $(this).parents('tr')[0];

        if (FitnessEditing !== null && FitnessEditing != frow) {

            row(fTable, FitnessEditing);
            editRow(fTable, frow);
            FitnessEditing = frow;
        } else if (FitnessEditing == frow && this.innerHTML == "Save") {
            var id=$(this).parent().parent('tr').find("td")[0].id;
            var title=$(this).parent().parent('tr').find("input")[0];


            var form_data = new FormData();
            form_data.append('id',id)
            form_data.append('title',title.value);

            $.ajax({
                url:'/upd_rooms',
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
    ftable[1].innerHTML = '<a class="edit btn btn-success" href="">Save</i></a>';
    ftable[2].innerHTML = '<a class="cancel btn btn-danger" href="">Cancel</a>';
}

function saveRow(fTable, frow) {
    var jqInputs = $('input', frow);
    fTable.fnUpdate(jqInputs[0].value, frow, 0, false);
    fTable.fnUpdate('<a class="edit btn btn-primary" href=""><i class="fa fa-fw fa-edit"></i> Edit</a>', frow, 1, false);
    fTable.fnUpdate('<a class="delete btn btn-danger" href=""><i class="fa fa-trash-o"></i> Delete</a>', frow, 2, false);
    fTable.fnDraw();
}

function cancelfitnessEditRow(fTable, frow) {
    var jqInputs = $('input', frow);
    fTable.fnUpdate(jqInputs[0].value, frow, 0, false);
    fTable.fnUpdate('<a class="edit btn btn-primary" href=""><i class="fa fa-edit">Edit</i></a>', frow, 1, false);
    fTable.fnDraw();
}
});