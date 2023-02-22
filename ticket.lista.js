import {Articulo, Ticket, TicketStore } from './ticket.store.js'
import {drawForm, pintarForm, pintarRes} from "./form.js"






let ticketsJSON_todos = `

[
{ "id" : " 1 ", "tienda" : "LIDL" , "fecha" :  "08-01-2023" , 		"articuloList":[{"nombre" :  "Pan barra 2" , "cantidad" : " 0.400 ", "precio" : " 0.700 "}]},
{ "id" : " 2 ", "tienda" : "MERCADONA" , "fecha" :  "3-1-2023" , 	"articuloList":[{"nombre" :  "Pan barra 3" , "cantidad" : " 0.750 ", "precio" : " 1.150 "}]},
{ "id" : " 3 ", "tienda" : "MERCADONA" , "fecha" :  "7-1-2023" , 	"articuloList":[{"nombre" :  "Tomate canario" , "cantidad" : " 1.212 ", "precio" : " 1.720 "}]},
{ "id" : " 4 ", "tienda" : "MERCADONA" , "fecha" :  "12-12-2022" , 	"articuloList":[{"nombre" :  "Pan barra 3" , "cantidad" : " 0.750 ", "precio" : " 1.200 "}]},
{ "id" : " 5 ", "tienda" : "MERCADONA" , "fecha" :  "16-12-2022" , 	"articuloList":[{"nombre" :  "Pate tarrina" , "cantidad" : " 0.100 ", "precio" : " 0.600 "}]},
{ "id" : " 6 ", "tienda" : "LIDL" , "fecha" :  "16-12-2022" , 		"articuloList":[{"nombre" :  "Pan barra 2" , "cantidad" : " 0.400 ", "precio" : " 0.700 "}]},
{ "id" : " 7 ", "tienda" : "LIDL" , "fecha" :  "18-12-2022" , 		"articuloList":[{"nombre" :  "Tomate canario" , "cantidad" : " 1.000 ", "precio" : " 1.690 "}]},
{ "id" : " 8 ", "tienda" : "MERCADONA" , "fecha" :  "19-12-2022" , 	"articuloList":[{"nombre" :  "Pan barra 3" , "cantidad" : " 0.750 ", "precio" : " 1.200 "}]},
{ "id" : " 9 ", "tienda" : "ALDI" , "fecha" :  "29-12-2022" , 		"articuloList":[{"nombre" :  "Tomate ensalada" , "cantidad" : " 1.590 ", "precio" : " 1.714 "}]},
{ "id" : " 10 ", "tienda" : "MERCADONA" , "fecha" :  "31-12-2022" , "articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.250 ", "precio" : " 0.500 "}]},
{ "id" : " 11 ", "tienda" : "MERCADONA" , "fecha" :  "3-12-2022" , 	"articuloList":[{"nombre" :  "Tomate ensalada" , "cantidad" : " 1.012 ", "precio" : " 2.190 "}]},
{ "id" : " 12 ", "tienda" : "ALDI" , "fecha" :  "6-12-2022" , 		"articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.250 ", "precio" : " 0.460 "}]},
{ "id" : " 13 ", "tienda" : "MERCADONA" , "fecha" :  "7-12-2022" , 	"articuloList":[{"nombre" :  "Tomate canario" , "cantidad" : " 0.798 ", "precio" : " 1.790 "}]},
{ "id" : " 14 ", "tienda" : "MERCADONA" , "fecha" :  "31-5-2022" , 	"articuloList":[{"nombre" :  "Pate tarrina" , "cantidad" : " 0.100 ", "precio" : " 0.550 "}]},
{ "id" : " 15 ", "tienda" : "LIDL" , "fecha" :  "29-5-2022" , 		"articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.200 ", "precio" : " 0.420 "}]},
{ "id" : " 16 ", "tienda" : "ALDI" , "fecha" :  "24-5-2022" , 		"articuloList":[{"nombre" :  "Tomate ensalada" , "cantidad" : " 1.138 ", "precio" : " 1.490 "}]},
{ "id" : " 17 ", "tienda" : "ALDI" , "fecha" :  "24-5-2022" , 		"articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.250 ", "precio" : " 0.420 "}]},
{ "id" : " 18 ", "tienda" : "ALDI" , "fecha" :  "21-5-2022" , 		"articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.250 ", "precio" : " 0.370 "}]},
{ "id" : " 19 ", "tienda" : "LIDL" , "fecha" :  "19-5-2022" , 		"articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.200 ", "precio" : " 0.420 "}]},
{ "id" : " 20 ", "tienda" : "LIDL" , "fecha" :  "11-5-2022" , 		"articuloList":[{"nombre" :  "Pan barra" ,        "cantidad" : " 0.200 ", "precio" : " 0.420 "}]},
{ "id" : " 21 ", "tienda" : "MERCADONA" , "fecha" :  "9-5-2022" , 	"articuloList":[{"nombre" :  "Pate tarrina" ,      "cantidad" : " 0.100 ", "precio" : " 0.550 "}]},
{ "id" : " 22 ", "tienda" : "LIDL" , "fecha" :  "6-5-2022" , 		"articuloList":[{"nombre" :  "Pan barra" ,         "cantidad" : " 0.200 ", "precio" : " 0.370 "}]},
{ "id" : " 23 ", "tienda" : "LIDL" , "fecha" :  "17-1-2022" , 		"articuloList":[{"nombre" :  "Pan barra" ,        "cantidad" : " 0.200 ", "precio" : " 0.350 "}]},
{ "id" : " 24 ", "tienda" : "LIDL" , "fecha" :  "16-1-2022" , 		"articuloList":[{"nombre" :  "Pan barra" ,        "cantidad" : " 0.200 ", "precio" : " 0.350 "}]},
{ "id" : " 25 ", "tienda" : "LIDL" , "fecha" :  "4-3-2022" , 		"articuloList":[{"nombre" :  "Yogur natural 8" , "cantidad" : " 1.000 ", "precio" : " 0.990 "}]},
{ "id" : " 26 ", "tienda" : "MERCADONA" , "fecha" :  "19-3-2022" , 	"articuloList":[{"nombre" :  "Pan barra" ,        "cantidad" : " 0.250 ", "precio" : " 0.450 "}]},
{ "id" : " 27 ", "tienda" : "LIDL" , "fecha" :  "23-3-2022" , 		"articuloList":[{"nombre" :  "Pan barra" ,        "cantidad" : " 0.200 ", "precio" : " 0.370 "}]},
{ "id" : " 28 ", "tienda" : "LIDL" , "fecha" :  "27-3-2022" , 		"articuloList":[{"nombre" :  "Yogur natural 8" ,  "cantidad" : " 1.000 ", "precio" : " 0.990 "}]},
{ "id" : " 29 ", "tienda" : "LIDL" , "fecha" :  "20-4-2022" , 		"articuloList":[{"nombre" :  "Pan barra" ,        "cantidad" : " 0.200 ", "precio" : " 0.370 "}]},
{ "id" : " 30 ", "tienda" : "LIDL" , "fecha" :  "3-4-2022" , 		"articuloList":[{"nombre" :  "Yogur natural 8" , "cantidad" : " 1.000 ", "precio" : " 1.190 "}]},
{ "id" : " 31 ", "tienda" : "ALDI" , "fecha" :  "16-4-2022" , 		"articuloList":[{"nombre" :  "Tomate ensalada" , "cantidad" : " 1.300 ", "precio" : " 1.990 "}]},
{ "id" : " 32 ", "tienda" : "LIDL" , "fecha" :  "25-4-2022" , 		"articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.200 ", "precio" : " 0.370 "}]},
{ "id" : " 33 ", "tienda" : "LIDL" , "fecha" :  "8-1-2022" , 		"articuloList":[{"nombre" :  "Yogur natural 8" , "cantidad" : " 1.000 ", "precio" : " 1.390 "}]},
{ "id" : " 34 ", "tienda" : "LIDL" , "fecha" :  "31-10-2022" , 		"articuloList":[{"nombre" :  "Tomate pera" , "cantidad" : " 0.434 ", "precio" : " 1.890 "}]},
{ "id" : " 35 ", "tienda" : "LIDL" , "fecha" :  "29-10-2022" , 		"articuloList":[{"nombre" :  "Pan barra 2" , "cantidad" : " 0.250 ", "precio" : " 0.700 "}]},
{ "id" : " 36 ", "tienda" : "ALDI" , "fecha" :  "30-10-2022" , 		"articuloList":[{"nombre" :  "Tomate pera" , "cantidad" : " 0.444 ", "precio" : " 1.990 "}]},
{ "id" : " 37 ", "tienda" : "LIDL" , "fecha" :  "27-10-2022" , 		"articuloList":[{"nombre" :  "Yogur natural 8" , "cantidad" : " 1.000 ", "precio" : " 1.290 "}]},
{ "id" : " 38 ", "tienda" : "ALDI" , "fecha" :  "24-10-2022" , 		"articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.250 ", "precio" : " 0.440 "}]},
{ "id" : " 39 ", "tienda" : "MERCADONA" , "fecha" :  "25-10-2022" , "articuloList":[{"nombre" :  "Pate tarrina" , "cantidad" : " 0.100 ", "precio" : " 0.550 "}]},
{ "id" : " 40 ", "tienda" : "LIDL" , "fecha" :  "23-10-2022" , 		"articuloList":[{"nombre" :  "Tomate canario" , "cantidad" : " 1.000 ", "precio" : " 1.690 "}]},
{ "id" : " 41 ", "tienda" : "LIDL" , "fecha" :  "23-10-2022" , 		"articuloList":[{"nombre" :  "Yogur natural 8" , "cantidad" : " 1.000 ", "precio" : " 1.290 "}]},
{ "id" : " 42 ", "tienda" : "LIDL" , "fecha" :  "20-10-2022" , 		"articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.200 ", "precio" : " 0.440 "}]},
{ "id" : " 43 ", "tienda" : "ALDI" , "fecha" :  "16-10-2022" , 		"articuloList":[{"nombre" :  "Yogur natural 8" , "cantidad" : " 1.000 ", "precio" : " 1.250 "}]},
{ "id" : " 44 ", "tienda" : "MERCADONA" , "fecha" :  "15-10-2022" , "articuloList":[{"nombre" :  "Pate tarrina" , "cantidad" : " 0.100 ", "precio" : " 0.550 "}]},
{ "id" : " 45 ", "tienda" : "MERCADONA" , "fecha" :  "14-10-2022" , "articuloList":[{"nombre" :  "Tomate ensalada" , "cantidad" : " 0.866 ", "precio" : " 2.090 "}]},
{ "id" : " 46 ", "tienda" : "MERCADONA" , "fecha" :  "13-10-2022" , "articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.250 ", "precio" : " 0.450 "}]},
{ "id" : " 47 ", "tienda" : "LIDL" , "fecha" :  "8-10-2022" , 		"articuloList":[{"nombre" :  "Yogur natural 8" , "cantidad" : " 1.000 ", "precio" : " 1.250 "}]},
{ "id" : " 48 ", "tienda" : "MERCADONA" , "fecha" :  "11-10-2022" , "articuloList":[{"nombre" :  "Tomate ensalada" , "cantidad" : " 0.404 ", "precio" : " 1.990 "}]},
{ "id" : " 49 ", "tienda" : "ALDI" , "fecha" :  "9-10-2022" , 		"articuloList":[{"nombre" :  "Tomate ensalada" , "cantidad" : " 0.392 ", "precio" : " 2.090 "}]},
{ "id" : " 50 ", "tienda" : "MERCADONA" , "fecha" :  "6-10-2022" , 	"articuloList":[{"nombre" :  "Pate tarrina" , "cantidad" : " 0.100 ", "precio" : " 0.550 "}]},
{ "id" : " 51 ", "tienda" : "MERCADONA" , "fecha" :  "5-10-2022" , 	"articuloList":[{"nombre" :  "Tomate ensalada" , "cantidad" : " 0.480 ", "precio" : " 1.990 "}]},
{ "id" : " 52 ", "tienda" : "MERCADONA" , "fecha" :  "4-10-2022" , 	"articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.250 ", "precio" : " 0.450 "}]},
{ "id" : " 53 ", "tienda" : "LIDL" , "fecha" :  "3-10-2022" , 		"articuloList":[{"nombre" :  "Yogur natural 8" , "cantidad" : " 1.000 ", "precio" : " 1.250 "}]},
{ "id" : " 54 ", "tienda" : "ALDI" , "fecha" :  "9-1-2023" , 		"articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.250 ", "precio" : " 0.470 "}]},
{ "id" : " 55 ", "tienda" : "ALDI" , "fecha" :  "1-11-2022" , 		"articuloList":[{"nombre" :  "Tomate ensalada" , "cantidad" : " 0.712 ", "precio" : " 2.190 "}]},
{ "id" : " 56 ", "tienda" : "ALDI" , "fecha" :  "2-11-2022" , 		"articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.250 ", "precio" : " 0.440 "}]},
{ "id" : " 57 ", "tienda" : "MERCADONA" , "fecha" :  "5-11-2022" , 	"articuloList":[{"nombre" :  "Tomate ensalada" , "cantidad" : " 0.416 ", "precio" : " 2.190 "}]},
{ "id" : " 58 ", "tienda" : "LIDL" , "fecha" :  "6-11-2022" , 		"articuloList":[{"nombre" :  "Yogur natural 8" , "cantidad" : " 1.000 ", "precio" : " 1.250 "}]},
{ "id" : " 59 ", "tienda" : "MERCADONA" , "fecha" :  "8-11-2022" , 	"articuloList":[{"nombre" :  "Tomate pera" , "cantidad" : " 1.062 ", "precio" : " 1.890 "}]},
{ "id" : " 60 ", "tienda" : "LIDL" , "fecha" :  "9-11-2022" , 		"articuloList":[{"nombre" :  "Yogur natural 8" , "cantidad" : " 1.000 ", "precio" : " 1.290 "}]},
{ "id" : " 61 ", "tienda" : "MERCADONA" , "fecha" :  "18-11-2022" , "articuloList":[{"nombre" :  "Pate tarrina" , "cantidad" : " 0.100 ", "precio" : " 0.600 "}]},
{ "id" : " 62 ", "tienda" : "MERCADONA" , "fecha" :  "18-11-2022" , "articuloList":[{"nombre" :  "Pan barra 3" , "cantidad" : " 0.750 ", "precio" : " 1.100 "}]},
{ "id" : " 63 ", "tienda" : "MERCADONA" , "fecha" :  "17-11-2022" , "articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.250 ", "precio" : " 0.450 "}]},
{ "id" : " 64 ", "tienda" : "LIDL" , "fecha" :  "13-11-2022" , 	    "articuloList":[{"nombre" :  "Pan barra 2" , "cantidad" : " 0.500 ", "precio" : " 0.700 "}]},
{ "id" : " 65 ", "tienda" : "ALDI" , "fecha" :  "15-11-2022" , 	    "articuloList":[{"nombre" :  "Yogur natural 8" , "cantidad" : " 1.000 ", "precio" : " 1.250 "}]},
{ "id" : " 66 ", "tienda" : "MERCADONA" , "fecha" :  "15-11-2022" , "articuloList":[{"nombre" :  "Pate tarrina" , "cantidad" : " 0.100 ", "precio" : " 0.550 "}]},
{ "id" : " 67 ", "tienda" : "MERCADONA" , "fecha" :  "19-11-2022" , "articuloList":[{"nombre" :  "Tomate canario" , "cantidad" : " 1.354 ", "precio" : " 0.990 "}]},
{ "id" : " 68 ", "tienda" : "MERCADONA" , "fecha" :  "12-11-2022" , "articuloList":[{"nombre" :  "Tomate canario" , "cantidad" : " 1.314 ", "precio" : " 1.490 "}]},
{ "id" : " 69 ", "tienda" : "MERCADONA" , "fecha" :  "12-11-2022" , "articuloList":[{"nombre" :  "Pate tarrina" , "cantidad" : " 0.100 ", "precio" : " 0.550 "}]},
{ "id" : " 70 ", "tienda" : "MERCADONA" , "fecha" :  "23-11-2022" , "articuloList":[{"nombre" :  "Pate tarrina" , "cantidad" : " 0.100 ", "precio" : " 0.600 "}]},
{ "id" : " 71 ", "tienda" : "MERCADONA" , "fecha" :  "4-11-2023" , 	"articuloList":[{"nombre" :  "Pan barra 3" , "cantidad" : " 0.750 ", "precio" : " 1.100 "}]},
{ "id" : " 72 ", "tienda" : "MERCADONA" , "fecha" :  "23-11-2022" , "articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.250 ", "precio" : " 0.450 "}]},
{ "id" : " 73 ", "tienda" : "ALDI" , "fecha" :  "23-11-2022" , 		"articuloList":[{"nombre" :  "Yogur natural 8" , "cantidad" : " 1.000 ", "precio" : " 1.250 "}]},
{ "id" : " 74 ", "tienda" : "MERCADONA" , "fecha" :  "26-11-2022" , "articuloList":[{"nombre" :  "Tomate canario" , "cantidad" : " 1.634 ", "precio" : " 1.290 "}]},
{ "id" : " 75 ", "tienda" : "MERCADONA" , "fecha" :  "25-11-2022" , "articuloList":[{"nombre" :  "Pate tarrina" , "cantidad" : " 0.100 ", "precio" : " 0.600 "}]},
{ "id" : " 76 ", "tienda" : "LIDL" , "fecha" :  "26-11-2022" , 		"articuloList":[{"nombre" :  "Yogur natural 8" , "cantidad" : " 1.000 ", "precio" : " 1.290 "}]},
{ "id" : " 77 ", "tienda" : "ALDI" , "fecha" :  "24-11-2022" , 		"articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.250 ", "precio" : " 0.460 "}]},
{ "id" : " 78 ", "tienda" : "LIDL" , "fecha" :  "29-11-2022" , 		"articuloList":[{"nombre" :  "Pan barra" , "cantidad" : " 0.200 ", "precio" : " 0.440 "}]},
{ "id" : " 79 ", "tienda" : "MERCADONA" , "fecha" :  "30-11-2022" , "articuloList":[{"nombre" :  "Pan barra 3" , "cantidad" : " 0.750 ", "precio" : " 1.200 "}]},
{ "id" : " 80 ", "tienda" : "MERCADONA" , "fecha" :  "30-11-2022" , "articuloList":[{"nombre" :  "Pate tarrina" , "cantidad" : " 0.100 ", "precio" : " 0.600 "}]}
]
`;


let ts = new TicketStore();
if(ts.size() <= 0){
    console.log('No hay tickets. Se crean desde JSON')
    ts.loadJSON(ticketsJSON_todos);
    console.log('Se actualizan localStorage con los tickets')
    ts.exportToLocalStorage();
    console.assert(ts.size() > 0, "Error no se han cargado los tickets")
}

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
 








