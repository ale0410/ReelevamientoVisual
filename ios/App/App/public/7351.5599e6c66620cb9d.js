"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7351],{7351:(L,a,i)=>{i.r(a),i.d(a,{ListadoFotosPageModule:()=>F});var r=i(4755),d=i(5030),e=i(9972),c=i(5559),o=i(2223);function u(t,n){if(1&t){const s=o.EpF();o.TgZ(0,"ion-item",1),o.NdJ("click",function(){const m=o.CHM(s).$implicit,p=o.oxw();return o.KtG(p.verFoto(m))}),o.TgZ(1,"ion-thumbnail",2),o._UZ(2,"img",3),o.qZA(),o.TgZ(3,"ion-label"),o._uU(4),o.qZA()()}if(2&t){const s=n.$implicit;o.xp6(2),o.Q6J("src",s,o.LSH),o.xp6(2),o.Oqu(s)}}const g=[{path:"",component:(()=>{class t{constructor(s){this.navController=s,this.fotos=[],this.obtenerListadoFotosUsuario()}ngOnInit(){throw new Error("Method not implemented.")}obtenerListadoFotosUsuario(){this.fotos=["ruta_foto_1.jpg","ruta_foto_2.jpg","ruta_foto_3.jpg"]}verFoto(s){this.navController.navigateForward(`/ver-foto/${s}`)}}return t.\u0275fac=function(s){return new(s||t)(o.Y36(e.SH))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-listado-fotos"]],decls:7,vars:1,consts:[[3,"click",4,"ngFor","ngForOf"],[3,"click"],["slot","start"],["alt","Foto",3,"src"]],template:function(s,l){1&s&&(o.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),o._uU(3,"Listado de Fotos"),o.qZA()()(),o.TgZ(4,"ion-content")(5,"ion-list"),o.YNc(6,u,5,2,"ion-item",0),o.qZA()()),2&s&&(o.xp6(6),o.Q6J("ngForOf",l.fotos))},dependencies:[r.sg,e.W2,e.Gu,e.Ie,e.Q$,e.q_,e.Bs,e.wd,e.sr]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[c.Bz.forChild(g),c.Bz]}),t})(),F=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[r.ez,d.u5,e.Pc,f]}),t})()}}]);