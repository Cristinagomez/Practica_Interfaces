import {Articulo, Ticket, TicketStore} from "./ticket.store.js"

/*
* Crear un ticket nuevo (no funciona)
*/ 

function crear(){
 let dia = document.getElementById("dia").value;
 let mes = document.getElementById("mes").value;
 let año = document.getElementById("año").value;

 let fecha = dia.toString() + "-" + mes.toString() + "-" + año.toString();

 let tienda = document.getElementById("tienda").value;
 let articulo = document.getElementById("articulo").value;
 let cantidad = document.getElementById("cantidad").value;
 let precio = document.getElementById("precio").value;

 console.log(fecha + " " + tienda + " " + articulo + " " + cantidad + " " + precio);

 let ticket = ts.createTicket(tienda, fecha);
 let art = ts.addArticuloToTicket(ticket,articulo,cantidad,precio);
 console.log(ticket);
 console.log(art);

 ts.exportToLocalStorage();
}

let crearB = document.getElementById("crear");

crearB.addEventListener("click", crear);



let ts = new TicketStore();

let totalTickets = ts.size();

console.log(`Hay ${totalTickets}`)

let ticketList = ts.listAllTicket();



