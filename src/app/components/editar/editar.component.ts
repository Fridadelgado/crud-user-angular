import { Component, OnInit } from '@angular/core';
import { Usuarios } from "../usuarios/usuarios";
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  public user: Usuarios;
  constructor() { }

  ngOnInit() {
  }

}
