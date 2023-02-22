import {Articulo, Ticket, TicketStore} from "./ticket.store.js"






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
    divTicketId2.id="id";
    divTicketId2.innerHTML = ticket.id;

	let divHeaderInputTienda2 = document.createElement('input');
	let divHeaderInputFecha2 = document.createElement('input');
    divHeaderInput.appendChild(divTicketId2);
	divHeaderInput.appendChild(divHeaderInputFecha2);
	divHeaderInput.appendChild(divHeaderInputTienda2);
	
	// Añadir boton edicion
	let divHeaderBotonE2 = document.createElement('BUTTON');
	divHeaderBotonE2.innerHTML = 'SALVAR';
    divHeaderBotonE2.style.color= "white";
    divHeaderBotonE2.style.backgroundColor= "rgb(235, 100, 64)";
    divHeaderBotonE2.style.border= "1px solid rgb(8, 8, 8)";
	divHeaderInput.appendChild(divHeaderBotonE2);
	divHeaderBotonE2.setAttribute('class', 'ticketHeaderInterior');
	divHeaderBotonE2.setAttribute('id-ticket', ticket.id);
    divHeaderBotonE2.addEventListener('click', editarTicketHandler);
    // formatear el header para que los div sean contiguos
    divTicketId2.setAttribute("class", "ticketHeaderInterior prueba");	
    divTicketId2.setAttribute("style", "color:black");
   
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
        var orden = 0;
		for (const a of ticket.articuloList){
			let divArticulo = document.createElement("DIV");
			divArticulo.setAttribute("class", "articulo");
            orden = parseInt(orden) + 1;
			
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

          
            let b_salvar = document.createElement('BUTTON');
            let b_borrar = document.createElement('BUTTON');

           
            b_salvar.textContent = "Salvar";
            b_borrar.textContent = "Borrar";

            b_borrar.setAttribute("orden",orden);
            
            b_salvar.addEventListener('click', salvarHandler);
            b_borrar.addEventListener('click', borrarArticulo);
        
            b_salvar.setAttribute("id-art", a.id);
            b_salvar.id = "salvar";
            b_salvar.setAttribute("id-ticket-art", ticket.id);



            /*Dar estilo a los botones*/
            b_salvar.style.backgroundColor= "rgb(235, 100, 64)";
            b_salvar.style.border= "1px solid rgb(8, 8, 8)";
            b_salvar.style.padding= "10px";
            b_salvar.style.borderRadius= "20px";
            b_salvar.style.color= "white";
            b_salvar.style.margin= "3px";

            b_borrar.style.backgroundColor= "rgb(235, 100, 64)";
            b_borrar.style.border= "1px solid rgb(8, 8, 8)";
            b_borrar.style.padding= "10px";
            b_borrar.style.borderRadius= "20px";
            b_borrar.style.color= "white";
            b_borrar.style.margin= "3px";
 
            divArticulo.appendChild(b_salvar);
            divArticulo.appendChild(b_borrar);

            // Añadir el articulo
			divCuerpo.appendChild(divArticulo);

		}
	}
    // Boton para añadir un artículo.
    let divBotonNuevoArticulo = document.createElement("DIV");
    divBotonNuevoArticulo.classList.add('articulo');
    divBotonNuevoArticulo.style.marginLeft= "42%";
    let b_nuevoArticulo = document.createElement('BUTTON');
    b_nuevoArticulo.style.backgroundColor= "rgb(235, 100, 64)";
    b_nuevoArticulo.style.border= "1px solid rgb(8, 8, 8)";
    b_nuevoArticulo.style.padding= "10px";
    b_nuevoArticulo.style.borderRadius= "20px";
    b_nuevoArticulo.style.color= "white";
    b_nuevoArticulo.style.margin= "3px";
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
    divNavegacion.style.marginLeft= "40%";
   
    // Botón siguiente
    let divBotonSiguiente = document.createElement("DIV");
    let b_siguiente = document.createElement('BUTTON');
    b_siguiente.style.backgroundColor= "rgb(235, 100, 64)";
    b_siguiente.style.border= "1px solid rgb(8, 8, 8)";
    b_siguiente.style.padding= "10px";
    b_siguiente.style.borderRadius= "20px";
    b_siguiente.style.color= "white";
    b_siguiente.style.margin= "3px";
    b_siguiente.textContent = `SIGUIENTE ${navRes.siguiente}`;
    b_siguiente.setAttribute('id-siguiente', `${navRes.siguiente}`);
    
    // Botón anterior
    let divBotonAnterior = document.createElement("DIV");	
    let b_anterior = document.createElement('BUTTON');
    b_anterior.style.backgroundColor= "rgb(235, 100, 64)";
    b_anterior.style.border= "1px solid rgb(8, 8, 8)";
    b_anterior.style.padding= "10px";
    b_anterior.style.borderRadius= "20px";
    b_anterior.style.color= "white";
    b_anterior.style.margin= "3px";
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
    let id = divTicketHeader[0].textContent -1;
    let fecha = divTicketHeader[1].value;
    let tienda = divTicketHeader[2].value;
    

    ticketList[id].fecha = fecha 
    ticketList[id].tienda = tienda
    console.log("ID: " + id + "\nFECHA: " + fecha + "\nTIENDA:" + tienda);
    let ticketModificado = ticketList[id];
    console.log("TICKET MODIFICADO TIENDA: " + ticketModificado.tienda + "\nFECHA: " + ticketModificado.fecha);

	console.log(`ticket id = ${ticketID}`);
    ts.exportToLocalStorage();
    
}

// Manejadores de los botones


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
    ts.exportToLocalStorage();
}

function borrarArticulo(e){
    let elemBoton = e.currentTarget;
    let idArt = elemBoton.getAttribute("orden");
    let pos = parseInt(idArt) -1;
    let divDelBoton = e.currentTarget.parentNode.childNodes;
    
    let idticket = document.getElementById("id").innerHTML;
    let ticket = ts.getTicket(idticket);
    let art = ticket.articuloList[pos];

    ticket.articuloList.splice(pos, 1);
    
    console.log(art);
    ts.exportToLocalStorage();
}

function nuevoArticuloHandler(e){
    console.log("nuevoArticuloHandler");
    let divNuevoArticulo = document.createElement('DIV');
    divNuevoArticulo.setAttribute("class", "articulo");
    let divDelBoton = e.currentTarget.parentNode;
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

    let b_restaurar = document.createElement('BUTTON');

    b_restaurar.textContent = "Guardar";
    

    b_restaurar.style.backgroundColor= "rgb(235, 100, 64)";
    b_restaurar.style.border= "1px solid rgb(8, 8, 8)";
    b_restaurar.style.padding= "10px";
    b_restaurar.style.borderRadius= "20px";
    b_restaurar.style.color= "white";
    b_restaurar.style.margin= "3px";

 
    divNuevoArticulo.appendChild(b_restaurar);
    
    b_restaurar.addEventListener("click", guardarArticulo);

   
}

function guardarArticulo(e){
   
    let elemBoton = e.currentTarget;
    let idticket = document.getElementById("id").innerHTML;
    
    
    let inputsArticulo = elemBoton.parentNode.childNodes;
    let nombreArt = inputsArticulo[0].value;
    let cantidadArt = inputsArticulo[1].value;
    let precioArt = inputsArticulo[2].value;


    let ticket = ts.getTicket(idticket);
    console.log(ticket)
    ts.addArticuloToTicket(ticket,nombreArt,cantidadArt,precioArt);
  
    ts.exportToLocalStorage();
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



let totalTickets = ts.size();

console.log(`Hay ${totalTickets}`)

let ticketList = ts.listAllTicket();

console.log(`El primer ticket es id=${ticketList[0].id}`);

ticketForm(ticketList[0].id, "id-pagina");
