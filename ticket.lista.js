import {Articulo, Ticket, TicketStore } from './ticket.store.js'
import {drawForm, pintarForm, pintarRes} from "./form.js"





let ts = new TicketStore();


var ticketList = ts.listAllTicket();
let lista = document.getElementById("lista");
ticketList.sort((a,b) =>{
  let camposA = a.fecha.split("-");
  let fechaA = new Date(parseInt(camposA[2]),parseInt(camposA[1]) - 1,parseInt(camposA[0]));
  let camposB = b.fecha.split("-");
  let fechaB = new Date(parseInt(camposB[2]),parseInt(camposB[1]) - 1,parseInt(camposB[0]));
  if(fechaA < fechaB) return 1;
  else if(fechaA > fechaB) return -1;
  else return 0;
})

  for (const t of ticketList){
		pintarRes(t,lista);
  }
 








