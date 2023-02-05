
console.log('INICIO ticket.store.js');

export class Articulo {
	constructor (id, nombre, cantidad, precio){
		this.id = id;
		this.nombre = nombre;
		this.cantidad = cantidad;
		this.precio = precio;
	}
}

export class Ticket {
	constructor (tienda, fecha){
		this.tienda = tienda;
		this.fecha = fecha;
		this.articuloList = [];
	}
	addArticulo(a){
        this.articuloList.push(a);
    }
	dumpTicket(){
		console.log('Ticket id :',this.id, this.tienda, this.fecha);
	}
}

export class TicketStore {

	constructor (){
		this.next_ticket_id = 0;
		this.next_articulo_id = 0;
		this.ticketList = [];
	}
	// Interna.
	// Contiene el siguiente id de ticket
	init() {
		this.next_ticket_id = 0;
		this.next_articulo_id = 0;
		this.ticketList = [];
	}

		
	/*
		Escribir por la consola un resumen
	*/
	dumpResumen(){
		console.log('');
		console.log('Hay : ' , this.ticketList.length);
		console.log(' next ticket id : ', this.next_ticket_id);
		console.log(' next articulo id : ' , this.next_articulo_id);
		console.log('');
	}
	
	/*
		Volcar por la consola
	*/
	dump(){
		console.log('-------------------------------------------------------------');
		this.dumpResumen();
		for (const t of this.ticketList){
			console.log(' id:',t.id, ' tienda:', t.tienda, ' fecha:', t.fecha);
			for(const a of t.articuloList){
				console.log('      id:', a.id, 'articulo:', a.articulo, 'cantidad:', a.cantidad, 'precio:', a.precio);
			}
		}
		console.log('      -------------------------------------------------------');
	}
	

	/*
		Obtener todos los tickets en formato JSON
		PARAMETERS:
		RETURN:
			Un String con todos los tickets en formato JSON
	*/
	exportToJSON(){
		return JSON.stringify(this.ticketList);
	}
	
	/*
		Crear el array de tickets a partir de un JSON
		PARAMETER:
			El texto en formato JSON
		RETURN:
			true si todo ha ido bien
			false en caso de error
	*/
	loadJSON(texto) {
		this.ticketList = JSON.parse(texto);
		this.ticketList = JSON.parse(texto);
        
		// Buscar el id más alto de ticket y de articulo.
		// 
		let ticketMax = 0;
		let articuloMax = 0;
		for (const t of this.ticketList){
			t.id = +t.id;
			if(ticketMax < t.id){
				ticketMax = t.id;
			}
			for(const a of t.articuloList){
				if(a.hasOwnProperty('id')){
					a.id = +a.id;
				} else {
					articuloMax ++;
					a.id = articuloMax;
				}
				if(articuloMax < a.id){
					articuloMax = a.id;
				}
			}
		}
		this.next_ticket_id = ticketMax;
		this.next_articulo_id = articuloMax;
		this.dump();
	}
	
	/*
		Devuelve un array de tickets donde articulo.nombre
		coincide con el texto pasado como argumento.
		PARAMETERS:
			El texto con el nombre del articulo
		RETURN:
			Un array con todos los tickets seleccionados.
			El array puede estar vacio.
	*/
	searchArticulo (texto) {
        console.log('Buscar : ', texto, ' en ', this.ticketList.length, ' tickets');
        let rList = [];
        for(const t of this.ticketList){
            console.log('   ticket : ', JSON.stringify(t));
            let found = false;
            for(const a of t.articuloList){
                if(a.nombre.includes(texto)){
                    found = true;
                }
            }
            if(true == found){
                rList.push(t);
            }
        }
		return rList;
	}
	
	/*
		Crear un articulo a partir de sus componentes
		PARAMETERS:
			nombre del articulo
			cantidad del articulo
			precio del articulo
		RETURN:
			el objeto articulo creado
			null si no se ha podido crear
	*/
	createArticulo(nombre, cantidad, precio){
		this.next_articulo_id ++;
		let a = new Articulo(this.next_articulo_id, nombre, cantidad, precio);
		if (undefined != a){
			return a;
		} else {
			this.next_articulo_id --;
			return null;
		}
	}
	/*
     * Crear un ticket
     * PARAMETERS:
     *      tienda, fecha
     * RETURN:
     *      el ticket creado
     */ 
	createTicket(tienda, fecha){
        let t = new Ticket(tienda, fecha);
        return t;
	}
	
	/*
		Devuelve un Ticket por el id
		PARAMETERS:
			El id del ticket
		RETURN:
			El ticket
			null en caso de error
	*/
	getTicket(id) {
		// TODO: corregir
		let t = ticketList[id];
		return t;
	}


	/*
	 * Devuelve un articulo de un ticket a partir del id
	 * PARAMETERS:
	 *		el ticket
	 *		el id del articulo
	 * RETURN:
	 *		el articulo de este ticket con el id
	 *		undefined si el ticket no tiene ese articulo
	*/
	getArticulo(ticket, id){
		let art = ticket.articuloList.find(a => a.id == id);
		return art;
	}

	/*
	 *	Modificar los datos de un articulo
	 	PARAMETERS:
			id del articulo a cambar
			nombre, nuevo nombre del articulo
			cantidad, nueva cantidad del articulo
			precio, nuevo precio
		RETURN:
			booleano, que es false en caso de error
	 */
	setArticulo(id, nombre, cantidad, precio){

	}

	/*
		Añadir un nuevo articulo a un ticket a partir
		de los componentes del articulo
		PARAMETERS:
			nombre del articulo
			cantidad del articulo
			precio del articulo
		RETURN:
			el objeto articulo que se ha creado y añadido al ticket
			null si hay errores
	*/
	addArticuloToTicket(ticket, nombreArticulo, cantidad, precio){
		this.next_articulo_id ++;
		let a = new Articulo(this.next_articulo_id, nombreArticulo, cantidad, precio);
		if (undefined != a){
			let t = ticket.addArticulo(a);
			if (null != t){
				return a;
			} else {
				return null;
			}
		} else {
			return null;
		}
	}
	
	/*
     * Lista de articulos de un ticket
     * PARAMETER:
     *      el id del ticket
     * RETURN:
     *      un array con los articulos
     */
    articulos(ticket){
        return ticket.articuloList;
    }

	/*
		Retira un articulo de un ticket
		PARAMETERS:
			El ticket
			El articulo
		RETURN:
			El objeto ticket actualizado
			null si hay errores
	*/
	removeArticuloFromTicket(ticket, articuloID){
        console.log(`Eliminar el articulo ${articuloID} del ticket ${ticket.id}`);
		// buscar el articulo
		// si el articulo existe, retirarlo del ticket
		//        y ELIMINAR EL ARTICULO
		// si no existe devolver error.
		const pos = ticket.articuloList.findIndex(a => {
				console.log(`    ${a.id} == ${articuloID}`);
                return a.id == articuloID;
                                            });
        if(pos >= 0){
            console.log('Articulo encontrado ', pos);
            ticket.articuloList.splice(pos, 1);
            console.log('Articulo eliminado');
        } else {
            console.log('No existe el articulo en el ticket');
        }
	}

		
	/*
		Añade un ticket a la lista de tickets
		PARAMETERS:
			El ticket
		RETURN:
			true si todo ha ido bien
			false si ha habido algun error
	*/
	addTicket(ticket) {
		this.next_ticket_id++;
		ticket.id = this.next_ticket_id;
		this.ticketList.push(ticket);
	}
	/*
		Quita un ticket de la lista de tickets
		PARAMETERS:
			El ticket
		RETURN:
			true si todo ha ido bien
			false si ha habido algun error
	*/
	removeTicket(ticket) {
        const pos = this.ticketList.findIndex(t => {t.id == ticket.id});
        console.log(`ticket ${ticket.id} en la posicion ${pos}`);
        this.ticketList.splice(pos, 1);
	}
	
	/*
     * Devuelve el numero de tickets 
     * RETURN:
     *      entero con el numero de tickets
     * 
     */
	size(){
        return this.ticketList.length;
    }
	/*
		Devuelve un array con todos los tickets
		PARAMETERS:
			no tiene
		RETURN:
			El array con todos los tickets
			
	*/
	listAllTicket() {
		return this.ticketList;
	}
}

console.log('cargado ticket.store.js');

