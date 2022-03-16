let list = [
    { 
        name: 'Octavio',
        number: '19104469890'
    },
    { 
        name: 'Yoleida',
        number: '584260644067'
    },
    { 
        name: 'Javier',
        number: '584148134140'
    }
];

$(document).ready(function(){
    list.forEach( (element, index) => {
        $("#list")
            .append(`<tr id='row-`+index+`'>
                        <th scope='row'>`+index+`</th>
                        <td class="name"><label class="form-label">`+element.name+`</label></td>
                        <td class="number"><label class="form-label">`+element.number+`</label></td>
                        <td>
                            <button data-id='`+index+`'>Editar</button>
                        </td>
                    </tr>`)
    })
    $("button").click(function(ev){
        let id = $(this).data('id')
        if( $(this).text() == 'Editar' ){
            $(this).text('Guardar')
            let name = $("#row-"+id+" .name").text()
            let number = $("#row-"+id+" .number").text()
            $("#row-"+id+" .name").html(`<input class="form-control" type="text"  value="`+name+`" />`)
            $("#row-"+id+" .number").html(`<input class="form-control" type="text"  value="`+number+`" />`)
        }else{
            $(this).text('Editar')
            let name = $("#row-"+id+" .name input").val()
            let number = $("#row-"+id+" .number input").val()
            list[id].name = name
            list[id].number = number
            $("#row-"+id+" .name").html('<label class="form-label">'+name+'</label>')
            $("#row-"+id+" .number").html('<label class="form-label">'+number+'</label>')
        }
        console.log( list )
    })

})