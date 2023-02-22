import {Articulo, Ticket, TicketStore } from './ticket.store.js'
import {drawForm, pintarForm, pintarRes} from "./form.js"


function buscar1(){
    let input = document.getElementById("id-textoBuscar");
    let texto = input.value;
    let reslist = ts.searchArticulo(texto);
    let resDiv = document.getElementById("id-resultados");
    
    reslist.sort((a,b) =>{
        let camposA = a.fecha.split("-");
        let fechaA = new Date(parseInt(camposA[2]),parseInt(camposA[1]) - 1,parseInt(camposA[0]));
        let camposB = b.fecha.split("-");
        let fechaB = new Date(parseInt(camposB[2]),parseInt(camposB[1]) - 1,parseInt(camposB[0]));
        if(fechaA < fechaB) return 1;
        else if(fechaA > fechaB) return -1;
        else return 0;
    })

    resDiv.innerHTML="";
    
    let canvas = document.getElementById("id-grafico");
    const context = canvas.getContext('2d');
    context.clearRect(0,0,canvas.clientWidth, canvas.height);
    
    if(reslist.length == 0){
        console.log('No se ha encontrado nada');
    } else{
        for (const t of reslist){
             pintarRes(t, resDiv);
        }
        for(const t of reslist){
            for(const a of t.articuloList){
                console.log(t.fecha, a.nombre, a.precio);
                
            }
        }
       
    }
}



function buscar2(e){
    let inputBuscar = document.getElementById('id-textoBuscar');
    let textoBuscar = inputBuscar.value;
    let divResultados = document.getElementById('id-resultados');
    console.log("buscar : ", inputBuscar, textoBuscar);
    if(textoBuscar){
        let resBusqueda = ts.searchArticulo(textoBuscar);
        divResultados.innerHTML = `<strong>${textoBuscar}</strong><br><span>Encontrados ${resBusqueda.length}</span>`;
        // for (const t of resBusqueda){
        //     pintarTicketEn(t, divResultados);
        // }
        let rList = [];
        let rLabels = [];
        let rPrecio = [];
        resBusqueda.sort((a,b) =>{
            let camposA = a.fecha.split("-");
            let fechaA = new Date(parseInt(camposA[2]),parseInt(camposA[1]) - 1,parseInt(camposA[0]));
            let camposB = b.fecha.split("-");
            let fechaB = new Date(parseInt(camposB[2]),parseInt(camposB[1]) - 1,parseInt(camposB[0]));
            if(fechaA > fechaB) return 1;
            else if(fechaA < fechaB) return -1;
            else return 0;
        })
        resBusqueda.forEach(t => {
                const tienda = t.tienda;
                const fecha = t.fecha;
                const artList = t.articuloList;
                artList.forEach((a) => {
                        let aux = {tienda:tienda, fecha:fecha, nombre:a.nombre, precio:a.precio};
                        rList.push(aux);
                        rLabels.push(t.fecha);
                        rPrecio.push(a.precio);
                    }
                ); 
            }
        );
       
        divResultados.innerHTML ="";
        console.assert(rLabels.length === rPrecio.length, "ERROR, precio y fechas no tienen la misma longitud!!!.");
    

        new Chart('id-grafico', {
            type:"line",
            data:{
                labels: rLabels,
                datasets:[
                {
                    label: textoBuscar,
                    borderColor: "rgb(235, 100, 64)",
                    backgroundColor: "rgb(206, 229, 208)",
                    data: rPrecio
                }
                ]
            }
        });
    } else {
        console.log('Nada que buscar');
        divResultados.innerHTML = 'Nada que buscar';
    }
}

let b1 = document.getElementById("id-botonBuscar1");
b1.addEventListener("click", buscar1);


let b2 = document.getElementById("id-botonBuscar2");
b2.addEventListener("click", buscar2);





let ts = new TicketStore();


