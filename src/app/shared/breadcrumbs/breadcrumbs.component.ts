import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  titulo: string
  descripcion: string

  constructor(private router: Router, 
    private title: Title, private meta: Meta) {
    
    this.getDataRoute().subscribe(data => {
      console.log(data)
      this.titulo = data.titulo
      this.descripcion = data.mensaje

      this.title.setTitle(this.titulo)

      const metaTag : MetaDefinition = {
        name: "descripcion", content: this.descripcion
      }

      this.meta.updateTag(metaTag)
    })
   }

  ngOnInit() {
  }

  getDataRoute(){

   return  this.router.events.pipe(
      filter(evento => {
        return evento instanceof ActivationEnd
      }),
      filter( (evento : ActivationEnd) => {
        return evento.snapshot.firstChild === null
      }),
      map((evento : ActivationEnd)=> {
        return evento.snapshot.data
      })

    )
  }

}
