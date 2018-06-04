import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/settings.service';
import { utils } from 'protractor';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document,
    public _ajustes : SettingsService) { }

  ngOnInit() {

  }

  cambiarTema(tema: string, link: any){

    this.aplicarCheck(link)
    let url = `assets/css/colors/${tema}.css`
    this._document.getElementById("temaPrincipal").setAttribute("href", url)

    this._ajustes.ajustes.tema = tema
    this._ajustes.ajustes.temaUrl = url
    this._ajustes.guardarAjustes()
  }

  aplicarCheck(link: any){
    let selectores : any = document.getElementsByClassName("selector")
    for (let ref of selectores) {
      ref.classList.remove("working")
    }
    link.classList.add("working")
  }
}
