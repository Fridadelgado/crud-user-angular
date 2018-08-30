import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Usuarios } from "./usuarios";
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  
  constructor( private http:HttpClient) { 
   console.log("Servicio Usuarios");
  
  }

  public getAllUsers(): Observable<any> {
    return this.http.get("/api" + environment.http.getAllUsers);
  }

  public  getUsersById(id:number):Observable<any>{
    //console.log("/api" + environment.http.getUsersById+id);
    return this.http.get("/api" + environment.http.getUsersById+id);
  }

  public createUser(user: Usuarios):Observable<any> {
    let headers={
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
      }
    return this.http.post("/api"+ environment.http.createUser, JSON.stringify(user), headers);
  }  

  public deleteUser(id:number):Observable<any>{
    console.log("/api" + environment.http.deleteUserById+id);
    
    return this.http.delete("/api" + environment.http.deleteUserById+id);
}

public editUser(id:number, user:Usuarios):Observable<any>{
  console.log(user);
    let headers={
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
      }
    console.log("/api"+environment.http.updateUser+id);
    return this.http.put("/api"+environment.http.updateUser+id, JSON.stringify(user),headers);
    
  }                                                                                                                                                                                                                                                                                                                                                                                                                         

}
