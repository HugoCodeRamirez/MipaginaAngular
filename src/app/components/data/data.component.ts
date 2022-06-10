
import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/models/contacto';
import { ContactoService } from 'src/app/services/contacto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  listaContactos: Contacto[] = [];

  constructor(private _contactoService: ContactoService) {}

  ngOnInit(): void {
    this.obtenerContactos();
  }

  obtenerContactos() {
    this._contactoService.getContactos().subscribe(
      (data) => {
        console.log(data);
        this.listaContactos = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  eliminarContacto(id: any) {
    Swal.fire({
      title: 'Desea eliminar el contacto?',
      text: 'Esta acción ya no sera reversible',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this._contactoService.deleteContacto(id).subscribe(
          (data) => {
            Swal.fire({
              icon: 'success',
              title: 'Elcontacto se elimino',
            });
          },
          (error) => {
            console.log(error);
          }
        );
      }
    });
  }
}