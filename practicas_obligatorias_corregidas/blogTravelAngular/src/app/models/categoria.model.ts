export class Categoria {
  id: number;
  nombre: string;
  thumbnail: string;

  constructor(id, nombre, thumbnail) {
    this.id = id;
    this.nombre = nombre;
    this.thumbnail = thumbnail;
  }
}
