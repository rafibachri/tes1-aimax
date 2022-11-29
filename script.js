
fetch('./viewData.json').then(response => {
    return response.json();
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log('its an error');
})

$(document).ready(function () {
    $('#data').DataTable({
        ajax: 'viewData.json',
        // data: 'viewData.json',
        columns: [
            { 'data': 'id'},
            { 'data': 'productID'},
            { 'data': 'productName'},
            { 'data': 'amount'},
            { 'data': 'customerName'},
            { 'data': 'status'},
            { 'data': 'transactionDate'},
            { 'data': 'createBy'},
            { 'data': 'createOn'}
        ]
    });
});

$(document).ready(function () {
    var table = $('#data').DataTable();
    var row = 1;
 
    $('#addRow').on('click', function () {
        table.row.add([row + '.1', row + '.2', row + '.3', row + '.4', row + '.5']).draw(false);
        row++;
    });
    $('#addRow').click();
});

$(document).ready(function () {
    var table = $('#data').DataTable();
 
    $('#data tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } 
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });
 
    $('#delete').click(function () {
        table.row('.selected').remove().draw(false);
    });
});

