export default class Animales {
    constructor(name, edad, comentario, imagen, sonido){
        this._name = name;
        this._edad = edad;
        this._comentario = comentario;
        this._imagen = imagen;
        this._sonido = sonido;

    }

    get name(){
        return this._name;
    }

    get edad(){
        return this._edad;
    }
    get comentario(){
        return this._comentario;
    }
    get imagen(){
        return this._imagen;
    }
    get sonido(){
        return this._sonido;
    }
}