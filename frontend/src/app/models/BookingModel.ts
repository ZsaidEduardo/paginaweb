export class Booking {

  marca!: string;
  modelo!: string;
  anio!:string;
  color!: string;
  servicio_extra!:string;
  nombre!:string;
  fecha!:string;
  nombre_cliente!:string;
  apellido_cliente!:string;
  email!:string;
  telefono_cliente!:string;
  direccion_cliente!:string;
  ciudad_cliente!:string;
  estado_servico!:string;
  codigo_postal_cliente!:string;
  peticion_cliente!:string;
  descripcion_servicio!:string;
  dirt_charges!:boolean;
  acepto_veicle!:boolean;
  la_tos!:null;
  fecha_servicio!:string;


  // constructor(){
  //     this.imagen = "/assets/images/productos/producto_nuevo.png"
  // }
  constructor(){
    this.marca = ""
    this.modelo = "";
    this.anio = "";
    this.color = "";
    this.servicio_extra="";
    this.nombre="";
    this.fecha="";
    this.nombre_cliente="";
    this.apellido_cliente="";
    this.email="";
    this.telefono_cliente="";
    this.direccion_cliente="";
    this.ciudad_cliente="";
    this.estado_servico="";
    this.codigo_postal_cliente="";
    this.peticion_cliente="";
    this.descripcion_servicio="";
    this.dirt_charges=true;
    this.acepto_veicle=true;
    this.la_tos=null;
    this.fecha_servicio="";


  }



}
