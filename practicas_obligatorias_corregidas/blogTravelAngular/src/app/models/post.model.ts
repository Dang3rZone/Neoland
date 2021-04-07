export class Post{
    id: number;
    titulo: string;
    subtitulo: string;
    descripcion: string;
    autor: string;
    pais: string;
    fecha: Date;
    avatar: string;
    imagen: string;
    categoria: string;
    tags: string[];
    destacado: boolean;

    constructor(id,titulo,subtitulo,descripcion,autor,pais,fecha = new Date(),avatar="",imagen="",categoria="blog", tags=[], destacado= false){
        this.id= id;
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.descripcion = descripcion;
        this.autor = autor;
        this.pais = pais;
        this.fecha = fecha;
        this.avatar = avatar;
        this.imagen = imagen;
        this.categoria = categoria;
        this.tags = tags;
        this.destacado = destacado;
    }
}