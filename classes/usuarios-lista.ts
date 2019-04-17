import { Usuario } from './usuario';

export class UsuariosLista {
    private lista: Usuario[] = [];

    constructor() {}

    // Agregar un usuario
    public agregar(usuario: Usuario) {
        this.lista.push( usuario );
        console.log( this.lista );
        return usuario;
    }

    // actualizando un usuario
    public actualizarNombre( id: string, nombre: string) {
        for( let usuario of this.lista ) {
            if ( usuario.id === id ) {
                usuario.nombre = nombre;
                break;
            }
        }
        // console.log('======== actualizando usuario =========');
        // console.log(this.lista);
    }

    // obtener lista de usuarios
    public getLista() {
        return this.lista;
    }

    // obtener un usuario
    public getUsuario(id: string) {
        return this.lista.find( usuario => {
            return usuario.id === id
        });
    }

    // Obtener usuario en una sala en particular
    public getUsuariosEnSala( sala: string ) {
        return this.lista.filter( usuario => {
            return this.lista.filter( usuario => usuario.sala === sala );
        });
    }

    // borrar un usuario
    public borrarUsuario(id: string) {
        const tempUsuario = this.getUsuario(id);
        this.lista = this.lista.filter( usuario => usuario.id !== id );
        // console.log(this.lista);
        return tempUsuario;
    }
}