import { Component, OnInit } from '@angular/core';
import {UsuariosService  } from "./usuarios.service";
import { Usuarios } from "./usuarios";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  public user: any[];
  public id:number;
  public edit:boolean[];
  public nuevo: Usuarios;

  constructor(private _usuariosService:UsuariosService) {
    this.nuevo = new Usuarios();
   }

  ngOnInit() {
    this.edit = [];
    this._usuariosService.getAllUsers()
       .subscribe( usuarios => {
         
          usuarios.forEach(user => {
            this.edit[user.id] = false;//settea falso a mis arrays de id's
          });

        this.user = usuarios;
       });

     /*  this._usuariosService.getUsersById(1)
         .subscribe(usuariosId => {
           console.log(usuariosId);
           this.user = usuariosId;
         });*/ 
  }
  
  public deleteUser(id){
      this._usuariosService.deleteUser(id)
      .subscribe(usuarios => {
      //   console.log(usuarios);
      
        this.user = usuarios;
   });
   location.reload();

}
  public editU(id: number){ //metodo para activar div de editar 
    this.user.forEach(usr => {
      this.edit[usr.id]=false;
    });
    this.edit[id]=true;
  }
  public close(){
    this.user.forEach(usr => {
      this.edit[usr.id]=false;
    });
  }


  public editUser(id: number, nuevo: Usuarios){//metodo para editar registro
    
    console.log(this.nuevo);
    this.nuevo.$id = id;
    this._usuariosService.editUser(id, this.nuevo)
    .subscribe(nuevo => {
      
    });
    location.reload();
    
  }
  
  
}