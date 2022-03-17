$(document).ready( function() {
    $('#save').click( _ => {
        let contact = {
            number : $('#number').val(),
            name : $('#name').val()
        }
        if ( contact.number && contact.name )
            chrome.storage.local.get("contacts", data => {
                contacts = data.contacts;
                contacts.push( contact );
                chrome.storage.local.set({contacts: contacts})
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
            contacts: []
        });
    });
})