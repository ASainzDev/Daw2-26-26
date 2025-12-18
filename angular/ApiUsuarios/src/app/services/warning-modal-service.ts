import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WarningModalService {
  
  _id = signal('');

  image = signal('');

  usuario = signal('');

  modalDisplay = signal('none');

  constructor(){
    
  }


  setId(_id : string){
    this._id.set(_id);
  }

  setImage(image : string){
    this.image.set(image);
  }

  setUsuario(usuario : string){
    this.usuario.set(usuario);
  }

  setDisplayFlex(){

    this.modalDisplay.set('flex');
    
  }

  setDisplayHidden(){
    this.modalDisplay.set('none');
  }
  
}
