import {Articulo, Ticket, TicketStore} from "./ticket.store.js"


function añadir(){
    var espacio = document.getElementById("añadido");
    var campo = document.createElement("label");
    campo.innerText = "Artículo";
    var campoI = document.createElement("input");
    campoI.type = "text";
    campoI.id = "articulo";
    campoI.name = "articulo";
    campoI.placeholder = "Artículo";
    var campo2 = document.createElement("label");
    campo2.innerText = "Precio";
    var campoII = document.createElement("input");
    campoII.type = "text";
    campoII.id = "precio";
    campoII.name = "precio";
    campoII.placeholder = "Precio";
    var campo3 = document.createElement("label");
    campo3.innerText = "Cantidad";
    var campoIII = document.createElement("input");
    campoIII.type = "text";
    campoIII.id = "cantidad";
    campoIII.name = "cantidad";
    campoIII.placeholder = "Cantidad";
    espacio.appendChild(campo);
    espacio.appendChild(campoI);
    espacio.appendChild(campo2);
    espacio.appendChild(campoII);
    espacio.appendChild(campo3);
    espacio.appendChild(campoIII);
  }

let añadirB = document.getElementById("añadir");

añadirB.addEventListener("click", añadir);


let ts = new TicketStore();

let totalTickets = ts.size();

console.log(`Hay ${totalTickets}`)

let ticketList = ts.listAllTicket();

console.log(`El primer ticket es id=${ticketList[0].id}`);

ticketForm(ticketList[0].id, "id-pagina");