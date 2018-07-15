import { RouterModule, Routes } from "@angular/router";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { ProgressComponent } from "./progress/progress.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RsjsComponent } from "./rsjs/rsjs.component";


const appRoutes : Routes= [
    {
        path : "", 
        component: PagesComponent,
        children: [
            {path : "dashboard", component: DashboardComponent, data: {titulo: "Dashboard",mensaje: "Dashboard de la ventana"}},
            {path : "progress", component: ProgressComponent, data: {titulo: "Barra de Progreso",mensaje: "Progeso de la ventana"}},
            {path : "graficas1", component: Graficas1Component, data: {titulo: "Graficas",mensaje: "Graficas de la ventana"}},
            {path : "promesas", component: PromesasComponent, data: {titulo: "Promesas",mensaje: "Uso de Promesas"}},
            {path : "rxjs", component: RsjsComponent, data: {titulo: "RXJS Observables",mensaje: "Uso de observable"}},
            {path : "account-settings", component: AccountSettingsComponent, data: {titulo: "Ajustes del tema",mensaje: "Ajustes del usuario"}},
            {path : "", redirectTo:"/dashboard" , pathMatch: "full" }
            ]
    }]

export const PAGES_ROUTES = RouterModule.forChild(appRoutes) 