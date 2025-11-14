import { Articulo } from './../interfaces/Articulo';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class BlogService {
  
  
  // Aunque la he cambiado para que sea public, sigue sin actualizarse en la seccion-principal.
  // Supongo que será por la forma en la que hago las cosas. Así que voy a dejarlo como me funcionaba.
  selectedUser : string;

  private arrayArticulos: Articulo[];

  private id : number;

  articuloSeleccionado! : Articulo;

  constructor(){
    this.selectedUser = '';

    

    this.arrayArticulos = [
      {
        id: 1,
        titulo: 'Caballeros Grises, el Escudo de la humanidad',
        url: 'https://latorredelcuervo.com/wp-content/uploads/2023/12/20231221_11-889x500.jpg=',
        contenido:'Nadie ahora vivo puede afirmar que conoce con certeza los orígenes de los Caballeros Grises. El propio Capítulo tiene un solo relato escrito de su fundación, ubicado en su monasterio fortaleza: la Ciudadela de Titán. A partir de esta y otras fuentes legendarias conocidas por muy pocos, se puede reconstruir una historia llena de peligros, un regalo muy valioso y el secreto de un conocimiento que destroza el alma.Se cuenta que durante los últimos días de la Herejía de Horus, se convocó por primera vez a los fundadores de los Caballeros Grises. Mientras el Emperador, sus generales y consejeros preparaban a Terra para el ataque, el Architraidor Horus, el Maestro de la Humanidad contemplaba a amenazas aún mayores. Ciertos mitos de esa época lejana apuntan a que solo el Emperador previó el peligro que representaban el Caos y los habitantes del immaterium: sus daemons y dioses. Estas coalescencias de emociones que surgen en la disformidad, no serían satisfechas con la destrucción de la Humanidad, sino con su corrupción, subyugación y tormento eterno. Las referencias sugieren que el servidor más leal del Emperador, Malcador el Sigilita, recorrió el Imperium devastado por la guerra mientras la Herejía se desataba, siguiendo órdenes del Emperador de buscar individuos cuyos hombros soportasen la carga de salvar el futuro de la Humanidad.',
        fecha: '2024-06-01'
      },
      {
        id: 2,
        titulo: 'Los Templarios Negros y su cruzada eterna',
        url: 'https://spikeybits.com/wp-content/uploads/2024/03/black-templars-hor-wal-1200.png',
        contenido: 'Los Templarios Negros (Black Templars en inglés) son un Capítulo de Marines Espaciales, creado durante la Segunda Fundación a partir de los elementos más fanáticos de los Puños Imperiales, con el beneplácito de Rogal Dorn. Desde su creación, han estado embarcados en una Cruzada permanente contra los enemigos de la Humanidad.Aunque solo quedan los anales más antiguos y apócrifos para contarlo, al llegar la Segunda Fundación, los Puños Imperiales dieron lugar a dos capítulos sucesores. De estos, los Templarios Negros fueron con mucho los más divergentes en doctrinas y creencias. Era un Capítulo que hacía eco de la Gran Cruzada original del Emperador, pues no tenían mundo natal y surcaban las estrellas en flotas incansables de naves por el vacío y eliminaban cada nuevo peligro para la Humanidad a medida que lo encontraban. Como el decreto imperial prohibía a los Marines Espaciales tener mutantes psíquicos como bibliotecarios, los Templarios Negros evitaron usarlos. De hecho, adoptaron este credo de manera tan extrema que el Capítulo sigue mostrándose reticente y cruel incluso en el empleo de psíquicos tan esenciales como Navegantes y Astrópatas. Los Templarios Negros solo juraron de boquilla el aclamado Codex Astartes de Roboute Guilliman, y en cambio eligieron obedecer sus propios sistemas organizativos y códigos heráldicos. ',
        fecha:'2025-11-12'
      },

    ];

    this.id = this.arrayArticulos.length + 1;
  }

  setSelectedUser(user: string){
    this.selectedUser = user;
    console.log('En servicio acabo de cambiar el user por: ', this.selectedUser)
  }

  getSelectedUser(): string {
    return this.selectedUser;
  }

  addArticleCollection(articulo : Articulo){
    this.arrayArticulos.push(articulo);
  }

  getArticlesCollection() : Articulo[]{
    return this.arrayArticulos;
  }

  getActualId() : number{
    return this.id;
  }

  setArticuloSeleccionado(articulo: Articulo) {
    this.articuloSeleccionado = articulo;
  }

  getArticuloSeleccionado() : Articulo{
    return this.articuloSeleccionado;
  }
  
}
