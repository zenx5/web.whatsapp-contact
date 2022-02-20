chrome.runtime.onInstalled.addListener( () => {
    console.log( "Installed" );
    chrome.storage.local.set({
        action : '',
        number : '',
        name: ''
    });
});

chrome.runtime.onConnect.addListener( function(port) {
    console.log( "Connected!!" );

    chrome.storage.onChanged.addListener( changes => {
        if( changes.action.newValue != ''){
            port.postMessage({
                action: changes.action.newValue,
                number: changes.number.newValue, 
                name: changes.name.newValue
            });
        }
    })
});