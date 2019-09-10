export interface Mensaje
{
    nombre: String;
    mensaje: String;
    fecha?: Number;
    uid?: String;
}


export interface Residente
{
     id: number,
     nombre: string,
     apellido: string,
     tipodoc: number,
     ndoc: number,
     paisnacimiento: number
}
