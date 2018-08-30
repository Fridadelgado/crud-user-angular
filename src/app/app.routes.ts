import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import {AgregarComponent} from './components/agregar/agregar.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'agregar', component: AgregarComponent },
    
    
];
export const APP_ROUTING = RouterModule.forRoot(routes);
