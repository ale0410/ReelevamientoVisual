"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2632],{2632:(F,c,t)=>{t.r(c),t.d(c,{TuPaginaPageModule:()=>C});var u=t(4755),m=t(5030),i=t(9972),l=t(5559),p=t(5861),P=t(7072),o=t(2223),d=t(1085),f=t(3385);function h(n,s){if(1&n){const e=o.EpF();o.TgZ(0,"ion-col",2)(1,"ion-icon",3),o.NdJ("click",function(){const r=o.CHM(e).$implicit,A=o.oxw();return o.KtG(A.viewImage(r.url))}),o.qZA(),o.TgZ(2,"p"),o._uU(3),o.qZA()()}if(2&n){const e=s.$implicit;o.xp6(3),o.Oqu(e.description)}}function T(n,s){if(1&n&&(o.TgZ(0,"ion-item"),o._UZ(1,"ion-img",4),o.TgZ(2,"ion-label"),o._uU(3),o.qZA()()),2&n){const e=s.$implicit;o.xp6(1),o.Q6J("src",e.url),o.xp6(2),o.Oqu(e.description)}}const v=[{path:"",component:(()=>{class n{constructor(e,a,g){this.firestore=e,this.afAuth=a,this.modalController=g,this.afAuth.onAuthStateChanged(r=>{r&&(this.user=r,this.getUserPhotos(r.uid))}),this.getImages()}ngOnInit(){throw new Error("Method not implemented.")}getImages(){this.firestore.collection("imagenes").valueChanges().subscribe(e=>{this.images=e})}viewImage(e){var a=this;return(0,p.Z)(function*(){return(yield a.modalController.create({component:P.l,componentProps:{imagen:e}})).present()})()}getUserPhotos(e){this.firestore.collection("fotos",a=>a.where("userId","==",e)).valueChanges().subscribe(a=>{this.userPhotos=a})}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(d.ST),o.Y36(f.zQ),o.Y36(i.IN))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-tu-pagina"]],decls:6,vars:2,consts:[["size","6",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["size","6"],["name","image",3,"click"],[3,"src"]],template:function(e,a){1&e&&(o.TgZ(0,"ion-content")(1,"ion-grid")(2,"ion-row"),o.YNc(3,h,4,1,"ion-col",0),o.qZA()(),o.TgZ(4,"ion-list"),o.YNc(5,T,4,2,"ion-item",1),o.qZA()()),2&e&&(o.xp6(3),o.Q6J("ngForOf",a.images),o.xp6(2),o.Q6J("ngForOf",a.userPhotos))},dependencies:[u.sg,i.wI,i.W2,i.jY,i.gu,i.Xz,i.Ie,i.Q$,i.q_,i.Nd]}),n})()}];let Z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[l.Bz.forChild(v),l.Bz]}),n})(),C=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[u.ez,m.u5,i.Pc,Z]}),n})()}}]);