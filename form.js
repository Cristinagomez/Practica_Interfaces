import {Articulo, Ticket, TicketStore} from "./ticket.store.js"

export function drawForm(ticket){
	let divForm = document.createElement('DIV');
	document.body.appendChild(divForm);
	divForm.setAttribute("class", "ticket");
	
	/*
	 * Un ticket tiene un header 
	*/
	let divHeader = document.createElement('div');
	divHeader.setAttribute("class", "ticketHeader");
	divForm.appendChild(divHeader);
	let divHeaderTienda = document.createElement('div');
	let divHeaderFecha = document.createElement('div');
	divHeader.appendChild(divHeaderFecha);
	divHeader.appendChild(divHeaderTienda);

	// formatear el header para que los div sean contiguos
	divHeaderTienda.setAttribute("class", "ticketHeaderInterior");
	divHeaderFecha.setAttribute("class", "ticketHeaderInterior");
	// poner los valores
	divHeaderFecha.innerHTML = ticket.fecha;
	divHeaderTienda.innerHTML = ticket.tienda;


	/*
	 * El ticket tiene un cuerpo que se pliega y despliega
	*/
	let divCuerpo = document.createElement("DIV");
	divForm.appendChild(divCuerpo);

	let formTicket = document.createElement("FORM");

	let inputTienda = document.createElement("INPUT");
	inputTienda.setAttribute("class", "tienda");
	inputTienda.setAttribute("type", "text");
    inputTienda.setAttribute("name", "TIENDA");
    inputTienda.setAttribute("value", ticket.tienda);
	
	let inputFecha = document.createElement("INPUT");
	inputFecha.setAttribute("class", "tienda");
	inputFecha.setAttribute("type", "text");
    inputFecha.setAttribute("name", "FECHA");
    inputFecha.setAttribute("value", ticket.fecha);

	divCuerpo.appendChild(divHeader);
	divCuerpo.appendChild(formTicket);
	formTicket.appendChild(inputTienda);
	formTicket.appendChild(inputFecha);
	formTicket.addEventListener('submit', controladorSubmit);
	formTicket.addEventListener('click', acordeon);

	let btn_ticketSave = document.createElement('BUTTON');
	btn_ticketSave.setAttribute('class', 'btn');
	btn_ticketSave.appendChild(document.createTextNode('S'));
	btn_ticketSave.addEventListener('click', controladorTicket);
	formTicket.appendChild(btn_ticketSave);

	let btn_ticketDelete = document.createElement('BUTTON');
	btn_ticketDelete.setAttribute('class', 'btn');
	btn_ticketDelete.appendChild(document.createTextNode('D'));
	formTicket.appendChild(btn_ticketDelete);

	let btn_ticketNuevo = document.createElement('BUTTON');
	btn_ticketNuevo.setAttribute('class', 'btn');
	btn_ticketNuevo.appendChild(document.createTextNode('N'));
	formTicket.appendChild(btn_ticketNuevo);
	
	if(ticket.articuloList.length <= 0){
		let p = document.createElement("P");
		p.textContent = "NO TIENE ARTICULOS";
		formTicket.appendChild(p);
	} else {
		console.log("ticket ", ticket.id);
		for (const a of ticket.articuloList){
			console.log(`            ${a.nombre}`);
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
			
			divForm.appendChild(divArticulo);
			
			let btn_save = document.createElement('BUTTON');
			btn_save.setAttribute('class', 'btn');
			btn_save.textContent = 'S';
			divArticulo.appendChild(btn_save);
			btn_save.addEventListener('click', controladorArticulo);
			
			// Obtener los atributos
			let v_nombre = document.createElement('art-nombre');
			let v_cantidad = document.createElement('art-cantidad');
			let v_precio = document.createElement('art-precio');
			
		}
	}
}

function controladorArticulo(e){
	let p = e.currentTarget.parentElement;
	for(const elem of p.childNodes){
		console.log(elem);
	}
	console.log('NOMBRE   :', p.childNodes[0].value);
	console.log('CANTIDAD :', p.childNodes[1].value);
	console.log('PRECIO   :', p.childNodes[2].value);
}

function controladorSubmit(e){
	alert('submit : ' + e);
	e.preventDefault();
	return false;
}

function controladorTicket(e){
	alert(e);
}

function acordeon(e){
	let t = e.currentTarget.parentElement.childNodes[1];
	// El segundo (index 1) nodo del ticket es el cuerpo.
	if (false == t.classList.contains("abierto")) {
		t.classList.remove("cerrado");
		t.classList.add("abierto");
	  } else { 
		t.classList.remove("abierto");
		t.classList.add("cerrado");
	  }
	
}

export function pintarForm(ticket){
	let divForm = document.createElement('DIV');
	document.body.appendChild(divForm);
	divForm.setAttribute("class", "ticket");
	
	/*
	 * Un ticket tiene un header 
	*/
	let divHeader = document.createElement('div');
	divHeader.setAttribute("class", "ticketHeader");
	divForm.appendChild(divHeader);
	let divHeaderTienda = document.createElement('div');
	let divHeaderFecha = document.createElement('div');
	divHeader.appendChild(divHeaderFecha);
	divHeader.appendChild(divHeaderTienda);

	// formatear el header para que los div sean contiguos
	divHeaderTienda.setAttribute("class", "ticketHeaderInterior");
	divHeaderFecha.setAttribute("class", "ticketHeaderInterior");
	// poner los valores
	divHeaderFecha.innerHTML = ticket.fecha;
	divHeaderTienda.innerHTML = ticket.tienda;

	/*
	 * el header tiene un manejador para plegar y desplegar el cuerpo
	 */
	divHeader.addEventListener("click", acordeon);
	

	/*
	 * El ticket tiene un cuerpo que se pliega y despliega
	*/
	let divCuerpo = document.createElement("DIV");
	divForm.appendChild(divCuerpo);
	divCuerpo.setAttribute("class", "ticketCuerpo cerrado");

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
			
			divCuerpo.appendChild(divArticulo);
		}
	}
}

export function pintarRes(ticket, ediv){
	let divForm = document.createElement('DIV');
	ediv.appendChild(divForm);
	divForm.setAttribute("class", "ticket");
	
	/*
	 * Un ticket tiene un header 
	*/
	let divHeader = document.createElement('div');
	divHeader.setAttribute("class", "ticketHeader");
	divForm.appendChild(divHeader);
	let divHeaderTienda = document.createElement('div');
	let divHeaderFecha = document.createElement('div');
	divHeader.appendChild(divHeaderFecha);
	divHeader.appendChild(divHeaderTienda);

	// formatear el header para que los div sean contiguos
	divHeaderTienda.setAttribute("class", "ticketHeaderInterior");
	divHeaderFecha.setAttribute("class", "ticketHeaderInterior");
	// poner los valores
	divHeaderFecha.innerHTML = ticket.fecha;
	divHeaderTienda.innerHTML = ticket.tienda;
	/*
	 * el header tiene un manejador para plegar y desplegar el cuerpo
	 */
	divHeader.addEventListener("click", acordeon);


	/*
	 * El ticket tiene un cuerpo que se pliega y despliega
	*/
	let divCuerpo = document.createElement("DIV");
	divForm.appendChild(divCuerpo);
	divCuerpo.setAttribute("class", "ticketCuerpo cerrado");

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
			
			divCuerpo.appendChild(divArticulo);
		}
	}
}
