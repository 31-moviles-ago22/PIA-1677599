

export interface Productos {
    Nombre: string;
    Precio: number;
    Foto: string;
    Id: string;
    Fecha: Date;
    Categoria: string;
}

export interface Clientes{
    uid: string;
    email: string;
    celular: string;
    referencia: string;
    nombre: string;
}

export interface Pedido {
    id: string;
    cliente: Clientes;
    productos: ProductoPedido[];
    precioTotal: number;
    fecha: any;
 }
 
 export interface ProductoPedido {
     producto: Productos;
     cantidad: number;
 }