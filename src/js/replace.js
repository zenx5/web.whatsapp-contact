$(document).ready(_=>{
    window.interval = null;
    let contacts = JSON.parse( localStorage.getItem('contacts') ) ?? []

    window.port = chrome.runtime.connect({
        name: Math.floor( Math.random()*99 )+"-"+Math.floor( Math.random()*99 )
    });
    
    window.port.onMessage.addListener( response => {
        if ( response.action == 'updateData' ) {
            contacts = response.contacts
            render( response.contacts );
        }
    });
    
    function render( contacts ){
        if( $(".zoWT4 span").length != 0 ) {
            $(".zoWT4 span").each( function(index) {
                let title = $(this).attr('title');
                let finded = contacts.find( contact => contact.number.replace(/[+ -]/g,"") == title.replace(/[+ -]/g,"") ) //.replace(/[+ -]/g,"")
                if( finded ){
                    $(this).text( finded.name )
                }
            })
        }
        
        
    }

    setInterval( _ => {
        port.postMessage({
            action: 'getData'
        })
    }, 5000 )
})