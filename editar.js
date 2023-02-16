import {Articulo, Ticket, TicketStore} from "./ticket.store.js"

//*******************************************************

let ticketsJSON_todos = `

[
{ "id" : " 1 ", "tienda" : "LIDL" , "fecha" :  "08/01/2023" , 		"articuloList":[{"nombre" :  "Pan barra 2" , "cantidad" : " 0.400 ", "precio" : " 0.700 "}]},
{ "id" : " 2 ", "tienda" : "MERCADONA" , "fecha" :  "3/1/2023" , 	"articuloList":[{"nombre" :  "Pan barra 3" , "cantidad" : " 0.750 ", "precio" : " 1.150 "}]},
{ "id" : " 3 ", "tienda" : "MERCADONA" , "fecha" :  "7/1/2023" , 	"articuloList":[{"nombre" :  "Tomate canario" , "cantidad" : " 1.212 ", "precio" : " 1.720 "}]},
{ "id" : " 4 ", "tienda" : "MERCADONA" , "fecha" :  "12/12/2022" , 	"articuloList":[{"nombre" :  "Pan barra 3" , "cantidad" : " 0.750 ", "precio" : " 1.200 "}]},
{ "id" : " 5 ", "tienda" : "MERCADONA" , "fecha" :  "16/12/2022" , 	"articuloList":[{"nombre" :  "Pate tarrina" , "cantidad" : " 0.100 ", "precio" : " 0.600 "}]},
{ "id" : " 6 ", "tienda" : "LIDL" , "fecha" :  "16/12/2022" , 		"articuloList":[{"nombre" :  "Pan barra 2" , "cantidad" : " 0.400 ", "precio" : " 0.700 "}]},
{ "id" : " 7 ", "tienda" : "LIDL" , "fecha" :  "18/12/2022" , 		"articuloList":[{"nombre" :  "Tomate canario" , "cantidad" : " 1.000 ", "precio" : " 1.690 "}]},
{ "id" : " 8 ", "tienda" : "MERCADONA" , "fecha" :  "19/12/2022" , 	"articuloList":[{"nombre" :  "Pan barra 3" , "cantidad" : " 0.750 ", "precio" : " 1.200 "}]},
{ "id" : " 9 ", "tienda" : "ALDI" , "fecha" :  "29/12/2022" , 		"articuloList":[{"nombre" :  "Tomate ensalada" , "cantidad" : " 1.590 ", "precio" : " 1.714 "}]},
{ "id" : " 10 ", "tienda" : "MERCADONA" , "fecha" :  "31/12/2022" , "articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.250 ", "precio" : " 0.500 "}]},
{ "id" : " 11 ", "tienda" : "MERCADONA" , "fecha" :  "3/12/2022" , 	"articuloList":[{"nombre" :  "Tomate ensalada" , "cantidad" : " 1.012 ", "precio" : " 2.190 "}]},
{ "id" : " 12 ", "tienda" : "ALDI" , "fecha" :  "6/12/2022" , 		"articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.250 ", "precio" : " 0.460 "}]},
{ "id" : " 13 ", "tienda" : "MERCADONA" , "fecha" :  "7/12/2022" , 	"articuloList":[{"nombre" :  "Tomate canario" , "cantidad" : " 0.798 ", "precio" : " 1.790 "}]},
{ "id" : " 14 ", "tienda" : "MERCADONA" , "fecha" :  "31/5/2022" , 	"articuloList":[{"nombre" :  "Pate tarrina" , "cantidad" : " 0.100 ", "precio" : " 0.550 "}]},
{ "id" : " 15 ", "tienda" : "LIDL" , "fecha" :  "29/5/2022" , 		"articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.200 ", "precio" : " 0.420 "}]},
{ "id" : " 16 ", "tienda" : "ALDI" , "fecha" :  "24/5/2022" , 		"articuloList":[{"nombre" :  "Tomate ensalada" , "cantidad" : " 1.138 ", "precio" : " 1.490 "}]},
{ "id" : " 17 ", "tienda" : "ALDI" , "fecha" :  "24/5/2022" , 		"articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.250 ", "precio" : " 0.420 "}]},
{ "id" : " 18 ", "tienda" : "ALDI" , "fecha" :  "21/5/2022" , 		"articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.250 ", "precio" : " 0.370 "}]},
{ "id" : " 19 ", "tienda" : "LIDL" , "fecha" :  "19/5/2022" , 		"articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.200 ", "precio" : " 0.420 "}]},
{ "id" : " 20 ", "tienda" : "LIDL" , "fecha" :  "11/5/2022" , 		"articuloList":[{"nombre" :  "Pan barra" ,        "cantidad" : " 0.200 ", "precio" : " 0.420 "}]},
{ "id" : " 21 ", "tienda" : "MERCADONA" , "fecha" :  "9/5/2022" , 	"articuloList":[{"nombre" :  "Pate tarrina" ,      "cantidad" : " 0.100 ", "precio" : " 0.550 "}]},
{ "id" : " 22 ", "tienda" : "LIDL" , "fecha" :  "6/5/2022" , 		"articuloList":[{"nombre" :  "Pan barra" ,         "cantidad" : " 0.200 ", "precio" : " 0.370 "}]},
{ "id" : " 23 ", "tienda" : "LIDL" , "fecha" :  "17/1/2022" , 		"articuloList":[{"nombre" :  "Pan barra" ,        "cantidad" : " 0.200 ", "precio" : " 0.350 "}]},
{ "id" : " 24 ", "tienda" : "LIDL" , "fecha" :  "16/1/2022" , 		"articuloList":[{"nombre" :  "Pan barra" ,        "cantidad" : " 0.200 ", "precio" : " 0.350 "}]},
{ "id" : " 25 ", "tienda" : "LIDL" , "fecha" :  "4/3/2022" , 		"articuloList":[{"nombre" :  "Yogur natural 8" , "cantidad" : " 1.000 ", "precio" : " 0.990 "}]},
{ "id" : " 26 ", "tienda" : "MERCADONA" , "fecha" :  "19/3/2022" , 	"articuloList":[{"nombre" :  "Pan barra" ,        "cantidad" : " 0.250 ", "precio" : " 0.450 "}]},
{ "id" : " 27 ", "tienda" : "LIDL" , "fecha" :  "23/3/2022" , 		"articuloList":[{"nombre" :  "Pan barra" ,        "cantidad" : " 0.200 ", "precio" : " 0.370 "}]},
{ "id" : " 28 ", "tienda" : "LIDL" , "fecha" :  "27/3/2022" , 		"articuloList":[{"nombre" :  "Yogur natural 8" ,  "cantidad" : " 1.000 ", "precio" : " 0.990 "}]},
{ "id" : " 29 ", "tienda" : "LIDL" , "fecha" :  "20/4/2022" , 		"articuloList":[{"nombre" :  "Pan barra" ,        "cantidad" : " 0.200 ", "precio" : " 0.370 "}]},
{ "id" : " 30 ", "tienda" : "LIDL" , "fecha" :  "3/4/2022" , 		"articuloList":[{"nombre" :  "Yogur natural 8" , "cantidad" : " 1.000 ", "precio" : " 1.190 "}]},
{ "id" : " 31 ", "tienda" : "ALDI" , "fecha" :  "16/4/2022" , 		"articuloList":[{"nombre" :  "Tomate ensalada" , "cantidad" : " 1.300 ", "precio" : " 1.990 "}]},
{ "id" : " 32 ", "tienda" : "LIDL" , "fecha" :  "25/4/2022" , 		"articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.200 ", "precio" : " 0.370 "}]},
{ "id" : " 33 ", "tienda" : "LIDL" , "fecha" :  "8/1/2022" , 		"articuloList":[{"nombre" :  "Yogur natural 8" , "cantidad" : " 1.000 ", "precio" : " 1.390 "}]},
{ "id" : " 34 ", "tienda" : "LIDL" , "fecha" :  "31/10/2022" , 		"articuloList":[{"nombre" :  "Tomate pera" , "cantidad" : " 0.434 ", "precio" : " 1.890 "}]},
{ "id" : " 35 ", "tienda" : "LIDL" , "fecha" :  "29/10/2022" , 		"articuloList":[{"nombre" :  "Pan barra 2" , "cantidad" : " 0.250 ", "precio" : " 0.700 "}]},
{ "id" : " 36 ", "tienda" : "ALDI" , "fecha" :  "30/10/2022" , 		"articuloList":[{"nombre" :  "Tomate pera" , "cantidad" : " 0.444 ", "precio" : " 1.990 "}]},
{ "id" : " 37 ", "tienda" : "LIDL" , "fecha" :  "27/10/2022" , 		"articuloList":[{"nombre" :  "Yogur natural 8" , "cantidad" : " 1.000 ", "precio" : " 1.290 "}]},
{ "id" : " 38 ", "tienda" : "ALDI" , "fecha" :  "24/10/2022" , 		"articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.250 ", "precio" : " 0.440 "}]},
{ "id" : " 39 ", "tienda" : "MERCADONA" , "fecha" :  "25/10/2022" , "articuloList":[{"nombre" :  "Pate tarrina" , "cantidad" : " 0.100 ", "precio" : " 0.550 "}]},
{ "id" : " 40 ", "tienda" : "LIDL" , "fecha" :  "23/10/2022" , 		"articuloList":[{"nombre" :  "Tomate canario" , "cantidad" : " 1.000 ", "precio" : " 1.690 "}]},
{ "id" : " 41 ", "tienda" : "LIDL" , "fecha" :  "23/10/2022" , 		"articuloList":[{"nombre" :  "Yogur natural 8" , "cantidad" : " 1.000 ", "precio" : " 1.290 "}]},
{ "id" : " 42 ", "tienda" : "LIDL" , "fecha" :  "20/10/2022" , 		"articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.200 ", "precio" : " 0.440 "}]},
{ "id" : " 43 ", "tienda" : "ALDI" , "fecha" :  "16/10/2022" , 		"articuloList":[{"nombre" :  "Yogur natural 8" , "cantidad" : " 1.000 ", "precio" : " 1.250 "}]},
{ "id" : " 44 ", "tienda" : "MERCADONA" , "fecha" :  "15/10/2022" , "articuloList":[{"nombre" :  "Pate tarrina" , "cantidad" : " 0.100 ", "precio" : " 0.550 "}]},
{ "id" : " 45 ", "tienda" : "MERCADONA" , "fecha" :  "14/10/2022" , "articuloList":[{"nombre" :  "Tomate ensalada" , "cantidad" : " 0.866 ", "precio" : " 2.090 "}]},
{ "id" : " 46 ", "tienda" : "MERCADONA" , "fecha" :  "13/10/2022" , "articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.250 ", "precio" : " 0.450 "}]},
{ "id" : " 47 ", "tienda" : "LIDL" , "fecha" :  "8/10/2022" , 		"articuloList":[{"nombre" :  "Yogur natural 8" , "cantidad" : " 1.000 ", "precio" : " 1.250 "}]},
{ "id" : " 48 ", "tienda" : "MERCADONA" , "fecha" :  "11/10/2022" , "articuloList":[{"nombre" :  "Tomate ensalada" , "cantidad" : " 0.404 ", "precio" : " 1.990 "}]},
{ "id" : " 49 ", "tienda" : "ALDI" , "fecha" :  "9/10/2022" , 		"articuloList":[{"nombre" :  "Tomate ensalada" , "cantidad" : " 0.392 ", "precio" : " 2.090 "}]},
{ "id" : " 50 ", "tienda" : "MERCADONA" , "fecha" :  "6/10/2022" , 	"articuloList":[{"nombre" :  "Pate tarrina" , "cantidad" : " 0.100 ", "precio" : " 0.550 "}]},
{ "id" : " 51 ", "tienda" : "MERCADONA" , "fecha" :  "5/10/2022" , 	"articuloList":[{"nombre" :  "Tomate ensalada" , "cantidad" : " 0.480 ", "precio" : " 1.990 "}]},
{ "id" : " 52 ", "tienda" : "MERCADONA" , "fecha" :  "4/10/2022" , 	"articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.250 ", "precio" : " 0.450 "}]},
{ "id" : " 53 ", "tienda" : "LIDL" , "fecha" :  "3/10/2022" , 		"articuloList":[{"nombre" :  "Yogur natural 8" , "cantidad" : " 1.000 ", "precio" : " 1.250 "}]},
{ "id" : " 54 ", "tienda" : "ALDI" , "fecha" :  "9/1/2023" , 		"articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.250 ", "precio" : " 0.470 "}]},
{ "id" : " 55 ", "tienda" : "ALDI" , "fecha" :  "1/11/2022" , 		"articuloList":[{"nombre" :  "Tomate ensalada" , "cantidad" : " 0.712 ", "precio" : " 2.190 "}]},
{ "id" : " 56 ", "tienda" : "ALDI" , "fecha" :  "2/11/2022" , 		"articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.250 ", "precio" : " 0.440 "}]},
{ "id" : " 57 ", "tienda" : "MERCADONA" , "fecha" :  "5/11/2022" , 	"articuloList":[{"nombre" :  "Tomate ensalada" , "cantidad" : " 0.416 ", "precio" : " 2.190 "}]},
{ "id" : " 58 ", "tienda" : "LIDL" , "fecha" :  "6/11/2022" , 		"articuloList":[{"nombre" :  "Yogur natural 8" , "cantidad" : " 1.000 ", "precio" : " 1.250 "}]},
{ "id" : " 59 ", "tienda" : "MERCADONA" , "fecha" :  "8/11/2022" , 	"articuloList":[{"nombre" :  "Tomate pera" , "cantidad" : " 1.062 ", "precio" : " 1.890 "}]},
{ "id" : " 60 ", "tienda" : "LIDL" , "fecha" :  "9/11/2022" , 		"articuloList":[{"nombre" :  "Yogur natural 8" , "cantidad" : " 1.000 ", "precio" : " 1.290 "}]},
{ "id" : " 61 ", "tienda" : "MERCADONA" , "fecha" :  "18/11/2022" , "articuloList":[{"nombre" :  "Pate tarrina" , "cantidad" : " 0.100 ", "precio" : " 0.600 "}]},
{ "id" : " 62 ", "tienda" : "MERCADONA" , "fecha" :  "18/11/2022" , "articuloList":[{"nombre" :  "Pan barra 3" , "cantidad" : " 0.750 ", "precio" : " 1.100 "}]},
{ "id" : " 63 ", "tienda" : "MERCADONA" , "fecha" :  "17/11/2022" , "articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.250 ", "precio" : " 0.450 "}]},
{ "id" : " 64 ", "tienda" : "LIDL" , "fecha" :  "13/11/2022" , 	    "articuloList":[{"nombre" :  "Pan barra 2" , "cantidad" : " 0.500 ", "precio" : " 0.700 "}]},
{ "id" : " 65 ", "tienda" : "ALDI" , "fecha" :  "15/11/2022" , 	    "articuloList":[{"nombre" :  "Yogur natural 8" , "cantidad" : " 1.000 ", "precio" : " 1.250 "}]},
{ "id" : " 66 ", "tienda" : "MERCADONA" , "fecha" :  "15/11/2022" , "articuloList":[{"nombre" :  "Pate tarrina" , "cantidad" : " 0.100 ", "precio" : " 0.550 "}]},
{ "id" : " 67 ", "tienda" : "MERCADONA" , "fecha" :  "19/11/2022" , "articuloList":[{"nombre" :  "Tomate canario" , "cantidad" : " 1.354 ", "precio" : " 0.990 "}]},
{ "id" : " 68 ", "tienda" : "MERCADONA" , "fecha" :  "12/11/2022" , "articuloList":[{"nombre" :  "Tomate canario" , "cantidad" : " 1.314 ", "precio" : " 1.490 "}]},
{ "id" : " 69 ", "tienda" : "MERCADONA" , "fecha" :  "12/11/2022" , "articuloList":[{"nombre" :  "Pate tarrina" , "cantidad" : " 0.100 ", "precio" : " 0.550 "}]},
{ "id" : " 70 ", "tienda" : "MERCADONA" , "fecha" :  "23/11/2022" , "articuloList":[{"nombre" :  "Pate tarrina" , "cantidad" : " 0.100 ", "precio" : " 0.600 "}]},
{ "id" : " 71 ", "tienda" : "MERCADONA" , "fecha" :  "4/11/2023" , 	"articuloList":[{"nombre" :  "Pan barra 3" , "cantidad" : " 0.750 ", "precio" : " 1.100 "}]},
{ "id" : " 72 ", "tienda" : "MERCADONA" , "fecha" :  "23/11/2022" , "articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.250 ", "precio" : " 0.450 "}]},
{ "id" : " 73 ", "tienda" : "ALDI" , "fecha" :  "23/11/2022" , 		"articuloList":[{"nombre" :  "Yogur natural 8" , "cantidad" : " 1.000 ", "precio" : " 1.250 "}]},
{ "id" : " 74 ", "tienda" : "MERCADONA" , "fecha" :  "26/11/2022" , "articuloList":[{"nombre" :  "Tomate canario" , "cantidad" : " 1.634 ", "precio" : " 1.290 "}]},
{ "id" : " 75 ", "tienda" : "MERCADONA" , "fecha" :  "25/11/2022" , "articuloList":[{"nombre" :  "Pate tarrina" , "cantidad" : " 0.100 ", "precio" : " 0.600 "}]},
{ "id" : " 76 ", "tienda" : "LIDL" , "fecha" :  "26/11/2022" , 		"articuloList":[{"nombre" :  "Yogur natural 8" , "cantidad" : " 1.000 ", "precio" : " 1.290 "}]},
{ "id" : " 77 ", "tienda" : "ALDI" , "fecha" :  "24/11/2022" , 		"articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.250 ", "precio" : " 0.460 "}]},
{ "id" : " 78 ", "tienda" : "LIDL" , "fecha" :  "29/11/2022" , 		"articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.200 ", "precio" : " 0.440 "}]},
{ "id" : " 79 ", "tienda" : "MERCADONA" , "fecha" :  "30/11/2022" , "articuloList":[{"nombre" :  "Pan barra 3" , "cantidad" : " 0.750 ", "precio" : " 1.200 "}]},
{ "id" : " 80 ", "tienda" : "MERCADONA" , "fecha" :  "30/11/2022" , "articuloList":[{"nombre" :  "Pate tarrina" , "cantidad" : " 0.100 ", "precio" : " 0.600 "}]}
]
`;




/*
 * Presentar un "formulario" para manipular un ticket
 * 
 * PARAMETERS:
 *		el ticket 
 *		el elemento DIV de la pagina html donde se refleja el ticket.
 * 
 * RETURNS:
 * 
 */

export function ticketForm(ticketID, elemID) {
    let ticket = ts.getTicket(ticketID);

    // if(!ticket || undefined == ticket){
    //     alert(`No existe el ticket ${ticketID}`);
    //     return;
    // }
    let divElem = document.getElementById(elemID);
    divElem.innerHTML = '';

	let divForm = document.createElement('DIV');
	divElem.appendChild(divForm);
	divForm.setAttribute("class", "ticket");
	
	/*
	 * Un ticket tiene un header 
	*/
   
	
    //seguno header para campis input tienda y fecha
    let divHeaderInput = document.createElement("div");
    divHeaderInput.setAttribute("class", "ticketHeader");
    divForm.appendChild(divHeaderInput);

    let divTicketId2 = document.createElement('div');
    divTicketId2.innerHTML = ticket.id;

	let divHeaderInputTienda2 = document.createElement('input');
	let divHeaderInputFecha2 = document.createElement('input');
    divHeaderInput.appendChild(divTicketId2);
	divHeaderInput.appendChild(divHeaderInputFecha2);
	divHeaderInput.appendChild(divHeaderInputTienda2);
	
	// Añadir boton edicion
	let divHeaderBotonE2 = document.createElement('DIV');
	divHeaderBotonE2.innerHTML = 'SALVAR';
	divHeaderInput.appendChild(divHeaderBotonE2);
	divHeaderBotonE2.setAttribute('class', 'ticketHeaderInterior');
	divHeaderBotonE2.setAttribute('id-ticket', ticket.id);
    divHeaderBotonE2.addEventListener('click', editarTicketHandler);
    // formatear el header para que los div sean contiguos
    divTicketId2.setAttribute("class", "ticketHeaderInterior prueba");	
    divTicketId2.setAttribute("style", "color:black");
    //divHeaderInputFecha2.setAttribute("type", "date");	
    // divHeaderInputFecha2.setAttribute("placeholder", "yyyy/mm/dd");
    divHeaderInputTienda2.setAttribute("class", "ticketHeaderInterior");
    divHeaderInputTienda2.setAttribute("style", "color:black");
	divHeaderInputFecha2.setAttribute("class", "ticketHeaderInterior");
    divHeaderInputFecha2.setAttribute("style", "color:black");
	// poner los valores
	divHeaderInputFecha2.value = ticket.fecha;
	divHeaderInputTienda2.value = ticket.tienda;

	/*
	 * El cuerpo del ticket. Los artículos
	*/
	let divCuerpo = document.createElement("DIV");
	divForm.appendChild(divCuerpo);
	
	/*
	 * Añadir los articulos
	 */
	if(ticket.articuloList.length <= 0){
		let p = document.createElement("P");
		p.textContent = "NO TIENE ARTICULOS";
		formTicket.appendChild(p);
	} else {
		for (const a of ticket.articuloList){
			let divArticulo = document.createElement("DIV");
			divArticulo.setAttribute("class", "articulo");
            
			
		    let d_nombre = document.createElement('INPUT');
			let d_cantidad = document.createElement('INPUT');
			let d_precio = document.createElement('INPUT');
			
			d_nombre.setAttribute("class", "draw");
			d_nombre.value = a.nombre;
			d_nombre.setAttribute("art-nombre", a.nombre);
			
			d_cantidad.setAttribute("class", "draw");
			d_cantidad.value = a.cantidad;
			d_cantidad.setAttribute("art-cantidad", a.cantidad);
			
			d_precio.setAttribute("class", "draw");
			d_precio.value = a.precio;
			d_precio.setAttribute("art-precio", a.precio);

			divArticulo.appendChild(d_nombre);
			divArticulo.appendChild(d_cantidad);
			divArticulo.appendChild(d_precio);
            // Añadir los botones para gestionar el articulo

            let b_editar = document.createElement('BUTTON');
            let b_restaurar = document.createElement('BUTTON');
            let b_salvar = document.createElement('BUTTON');
            let b_borrar = document.createElement('BUTTON');

            b_editar.textContent = "E";
            b_restaurar.textContent = "R";
            b_salvar.textContent = "S";
            b_borrar.textContent = "B";

            b_editar.addEventListener('click', editarHandler);
            b_restaurar.addEventListener('click', restaurarHandler);
            b_salvar.addEventListener('click', salvarHandler);
            b_borrar.addEventListener('click', borrarHandler);
        
            b_salvar.setAttribute("id-art", a.id )
            b_salvar.setAttribute("id-ticket-art", ticket.id )

            divArticulo.appendChild(b_editar);
            divArticulo.appendChild(b_restaurar);
            divArticulo.appendChild(b_salvar);
            divArticulo.appendChild(b_borrar);

            // Añadir el articulo
			divCuerpo.appendChild(divArticulo);

		}
	}
    // Boton para añadir un artículo.
    let divBotonNuevoArticulo = document.createElement("DIV");
    divBotonNuevoArticulo.classList.add('articulo')
    let b_nuevoArticulo = document.createElement('BUTTON');
    b_nuevoArticulo.textContent = 'NUEVO ARTICULO';
    divBotonNuevoArticulo.appendChild(b_nuevoArticulo);
    divCuerpo.appendChild(divBotonNuevoArticulo);
    // Poner el manejador
    b_nuevoArticulo.addEventListener('click', nuevoArticuloHandler);

    // ****************************************
	// Añadir la navegación: anterior y siguiente
    // ****************************************
    let navRes = navegacion(ticket);
    let anterior = navRes.anterior;
    let siguiente = navRes.siguiente;

    let divNavegacion = document.createElement("DIV");
    // Botón siguiente
    let divBotonSiguiente = document.createElement("DIV");
    let b_siguiente = document.createElement('BUTTON');
    b_siguiente.textContent = `SIGUIENTE ${navRes.siguiente}`;
    b_siguiente.setAttribute('id-siguiente', `${navRes.siguiente}`);
    // Botón anterior
    let divBotonAnterior = document.createElement("DIV");	
    let b_anterior = document.createElement('BUTTON');
    b_anterior.textContent = `ANTERIOR ${navRes.anterior}`;
    b_anterior.setAttribute('id-anterior', `${navRes.anterior}`)
    divNavegacion.appendChild(b_anterior);
    divNavegacion.appendChild(b_siguiente);
    if(navRes.anterior >= 0){
        b_anterior.addEventListener('click', anteriorHandler);
    }
    if(navRes.siguiente >= 0){
        b_siguiente.addEventListener('click', siguienteHandler);
    }
 
    divCuerpo.appendChild(divNavegacion);
}
// Manejador del boton editar del ticket
function editarTicketHandler(e){
	let elemBoton = e.currentTarget;
	let ticketID = elemBoton.getAttribute('id-ticket');
	console.log(elemBoton)
    let divTicketHeader = elemBoton.parentNode.childNodes;
    let id = divTicketHeader[0].textContent;
    let fecha = divTicketHeader[1].value;
    let tienda = divTicketHeader[2].value;
    

    ticketList[id].fecha = fecha 
    ticketList[id].tienda = tienda
    console.log("ID: " + id + "\nFECHA: " + fecha + "\nTIENDA:" + tienda);
    let ticketModificado = ticketList[id];
    console.log("TICKET MODIFICADO \NTIENDA: " + ticketModificado.tienda + "\nFECHA: " + ticketModificado.fecha);

	console.log(`ticket id = ${ticketID}`);
}

// Manejadores de los botones
function editarHandler(e){


    console.log("editarHandler");
}

function restaurarHandler(e){
    console.log("restaurarHandler");
}

function salvarHandler(e){    
    let elemBoton = e.currentTarget;
    let articuloID = elemBoton.getAttribute("id-art");
    let ticketID = elemBoton.getAttribute("id-ticket-art");
    let inputsArticulo = elemBoton.parentNode.childNodes;

    let nombreArt = inputsArticulo[0].value;
    let cantidadArt = inputsArticulo[1].value;
    let precioArt = inputsArticulo[2].value;

    console.log("ID: "+ articuloID +"\nNOMBRE: " + nombreArt + "\nCANTIDAD: " + cantidadArt + "\nPRECIO:" + precioArt);
    let articuloEdit = ts.getArticulo(ts.getTicket(ticketID),articuloID );
    console.log(articuloEdit);
    let newIdArt = articuloEdit.id;
    let newNombreArt = articuloEdit.nombre = nombreArt;
    let newCantidadArt = articuloEdit.cantidad = cantidadArt;
    let newPrecioArt = articuloEdit.precio = precioArt;
    
    console.log("ID: "+ newIdArt +"\nNOMBRE: " + newNombreArt + "\nCANTIDAD: " + newCantidadArt + "\nPRECIO:" + newPrecioArt);

    console.log("salvarHandler");
}

function borrarHandler(e){
    console.log("borrarHandler");
}

function nuevoArticuloHandler(e){
    console.log("nuevoArticuloHandler");
    let divNuevoArticulo = document.createElement('DIV');
    divNuevoArticulo.setAttribute("class", "articulo");
    let divDelBoton = e.currentTarget.parentNode;
    divNuevoArticulo.style.border="2px solid black";
    let divAbueloDelDivDelBoton = e.currentTarget.parentNode.parentNode;
    divAbueloDelDivDelBoton.insertBefore(divNuevoArticulo, divDelBoton);

    let d_nombre = document.createElement('INPUT');
	let d_cantidad = document.createElement('INPUT');
	let d_precio = document.createElement('INPUT');
    d_nombre.setAttribute("class", "draw");
    d_cantidad.setAttribute("class", "draw");
    d_precio.setAttribute("class", "draw");
    divNuevoArticulo.appendChild(d_nombre);
    divNuevoArticulo.appendChild(d_cantidad);
    divNuevoArticulo.appendChild(d_precio);

    let b_editar = document.createElement('BUTTON');
    let b_restaurar = document.createElement('BUTTON');
    let b_salvar = document.createElement('BUTTON');
    let b_borrar = document.createElement('BUTTON');

    b_editar.textContent = "E";
    b_restaurar.textContent = "R";
    b_salvar.textContent = "S";
    b_borrar.textContent = "B";

    divNuevoArticulo.appendChild(b_editar);
    divNuevoArticulo.appendChild(b_restaurar);
    divNuevoArticulo.appendChild(b_salvar);
    divNuevoArticulo.appendChild(b_borrar);
}

function siguienteHandler(e){
    let btn = e.currentTarget;
    let siguienteID = btn.getAttribute('id-siguiente');
    ticketForm(siguienteID, "id-pagina");
}

function anteriorHandler(e){
    let btn = e.currentTarget;
    let anteriorID = btn.getAttribute('id-anterior');
    ticketForm(anteriorID, "id-pagina");
}
//
// Calcular la navegacion: anterior y siguiente
//
function navegacion(ticket){
    console.log(ticket);
    let tList = ts.listAllTicket();
    var maxId = tList.reduce((a,b)=>a.id>b.id?a:b).id;
    var minId = tList.reduce((a,b)=>a.id<b.id?a:b).id;
    console.log(`maxId=${maxId}, minId=${minId}`);
    let posTicket = tList.indexOf(ticket);
    console.log(`ticket ${ticket}, pos=${posTicket}`);
    console.assert(posTicket >= 0, `Ticket no existe, ticket=${ticket}`);
    let ret = {};
    ret.anterior = -1;
    ret.siguiente = -1;
    if(posTicket >= 0 && posTicket < ts.size()){
        if(posTicket > 0)ret.anterior = tList[posTicket-1].id;
        if(posTicket < ts.size() -1)ret.siguiente = tList[posTicket+1].id;
    }
    return ret;
}



//
// Inicializar el script y la pagina
//
// Se comienza por el primer ticket
//

let ts = new TicketStore();

ts.loadJSON(ticketsJSON_todos);

let totalTickets = ts.size();

console.log(`Hay ${totalTickets}`)

let ticketList = ts.listAllTicket();

console.log(`El primer ticket es id=${ticketList[0].id}`);

ticketForm(ticketList[0].id, "id-pagina");
