import { Component, OnInit } from '@angular/core';
import {UsuariosService  } from "../usuarios/usuarios.service";
import { Usuarios } from "../usuarios/usuarios";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  public user: Usuarios;

  constructor(private _usuariosService: UsuariosService) {
    this.user = new Usuarios();
  }
  
  ngOnInit() {
    
  }

  public createUser(user){
   
    this._usuariosService.createUser(this.user)
    .subscribe( user => {
      console.log(user);
     
    });

  }
  

}
