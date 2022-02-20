$(document).ready( function() {
    $('#save').click( _ => {
        chrome.storage.local.set({
            action : 'add',
            number : $('#number').val(),
            name : $('#name').val()
        });
        chrome.storage.local.set({
            action : '',
            number : '',
            name: ''
        });
        $('#number').val('')
        $('#name').val('')
    });
    $('#remove').click( _ => {
        chrome.storage.local.set({
            action : 'remove',
            number : $('#number').val(),
            name: ''
        });
        chrome.storage.local.set({
            action : '',
            number : '',
            name: ''
        });
        $('#number').val('')
        $('#name').val('')
    });
    $('#clear').click( _ => {
        chrome.storage.local.set({
            action : 'clear',
            number : '',
            name : ''
        });
        chrome.storage.local.set({
            action : '',
            number : '',
            name: ''
        });
        $('#number').val('')
        $('#name').val('')
    });
})