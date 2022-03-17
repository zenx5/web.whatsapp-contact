$(document).ready(_=>{
    window.interval = null;
    let contacts = JSON.parse( localStorage.getItem('contacts') ) ?? []

    window.port = chrome.runtime.connect({
        name: Math.floor( Math.random()*99 )+"-"+Math.floor( Math.random()*99 )
    });
    
    window.port.onMessage.addListener( response => {
        console.log(response)
        if ( response.action == 'updateData' ) {
            render( response.contacts );
        }
        if( response.action == 'clear' ) {
            localStorage.removeItem('contacts');
        }else if( response.action == 'add' ) {
            let finded = contacts.find( contact => contact.number == response.number )
            if( ! finded ){
                contacts.push({
                    number: response.number,
                    name: response.name
                })
                localStorage.setItem( 'contacts', JSON.stringify( contacts ) )
            }
        }else if( response.action == 'remove' ) {
            contacts = contacts.filter( contact => contact.number != response.number )
            localStorage.setItem( 'contacts', JSON.stringify( contacts ) )
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

    port.postMessage({
        action: 'getData'
    })

})