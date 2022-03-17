chrome.runtime.onInstalled.addListener( () => {
    console.log( "Installed" );
    chrome.storage.local.set({
        action : '',
        number : '',
        name: '',
        contacts: []
    });
    
});

chrome.runtime.onConnect.addListener( function(port) {
    console.log( "Connected!!" );
    chrome.storage.onChanged.addListener( changes => {
        port.postMessage({
            action: 'updateData',
            contacts: changes.contacts.newValue
        });  
    })
    port.onMessage.addListener( response => {
        if ( response.action == 'getData' ) {
            chrome.storage.local.get("contacts", data => {
                console.log(data)
                let contacts = data.contacts;
                port.postMessage({
                    action: 'updateData',
                    contacts: contacts || []
                });
            });
        }
    })
});