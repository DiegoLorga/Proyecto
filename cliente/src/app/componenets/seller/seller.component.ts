import { Component, OnInit } from '@angular/core';
import { Cobros } from 'src/app/Models/Cobros';
import { CobrosService } from './../../services/cobros.service';
import Swal from 'sweetalert2';
declare var $: any;


@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  cobros :  Cobros[] = [];
  cobro: Cobros = new Cobros();
  nuevoCobro: Cobros = new Cobros();
  pageSize = 3;
  p = 1;

  constructor(private cobroService: CobrosService) { }

  ngOnInit(): void {
    {
      this.cobroService.list().subscribe(
        (resusuario: any) => {
          this.cobros = resusuario;
        },
        err => console.error(err)
      );
      }
}

actualizarCobro(idCobro: any) {
  this.cobroService.showOne(idCobro).subscribe((resCobro: any) => {
    this.cobro = resCobro;
    $('#modalModificarCobro').modal();
    $("#modalModificarCobro").modal("open");
  }, err => console.error(err));
}

guardarActualizarCobro() {
console.log("Id de cobro a actualizar:", this.cobro.IdCobro); // Verifica que IdCobro tenga un valor válido
this.cobroService.actualizarCobro(this.cobro).subscribe(() => {
  $('#modalModificarCobro').modal('close');
  this.showAlert('Cobro actualizado correctamente', 'success');
  //this.cdr.detectChanges();
  this.cobroService.list().subscribe((resusuario: any) => {
    this.cobros = resusuario;
})
}, err => {
  console.error(err);
  this.showAlert('Error al actualizar el pago', 'error');
});
}

eliminarCobro(idCobro: any){
  console.log("Click en eliminar un cobro");
  console.log("Identificador del cobro: ",idCobro);
  Swal.fire({
    title: "¿Estás seguro de eliminar este cobro?",
    text: "¡No es posible revertir esta acción!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, quiero eliminarlo!"
  }).then((result) => {
    if (result.isConfirmed) {
      this.cobroService.eliminarCobro(idCobro).subscribe((resCobro: any) =>
      {
       console.log("resCobro: ", resCobro);
       this.cobroService.list().subscribe((resCobro: any) =>
       {
         this.cobros = resCobro;  
         //console.log(resEmpresa);
         console.log(this.cobros)
       },
       err => console.error(err)
       );
      }, 
      err => console.error(err)
      );


      Swal.fire({
        title: "¡Eliminado!",
        text: "Tu cobro ha sido eliminado.",
        icon: "success"
      });
    }
  });

}
updateFechaInicio(event: any) {
  this.nuevoCobro.Fecha_Cobro = event.target.value;
}

updateFechaFinal(event: any) {
  this.nuevoCobro.Fecha_Cobro = event.target.value;
}
showAlert(message: string, type: 'success' | 'error' | 'warning' = 'success') {
  Swal.fire({
    position: 'center',
    icon: type,
    text: message
  });
}

}
