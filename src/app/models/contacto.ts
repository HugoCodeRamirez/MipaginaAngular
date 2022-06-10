export class Contacto{
    _id?: string;
    correo: string;
    nombre: string;
    direccion: string;
    ciudad: string;
    edad: number;

    constructor(correo:string, nombre:string, direccion:string, ciudad:string, edad:number){
        this.nombre = nombre
        this.correo = correo
        this.edad = edad
        this.ciudad = ciudad
        this.direccion = direccion
        
        
    }
}