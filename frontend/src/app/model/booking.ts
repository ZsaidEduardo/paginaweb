export class Booking {

    _id!:string;
    make!: string;
    modelo!: string;
    year!:number;
    color!: string;

    fecha!:string;
    horario!:number;
    //details
    name!:string;
    lastName!:String;
    email!:string;
    phone!:number;
    service!:string;
    city!:string;
    state!:string;
    code!:number;
    cardetails!:string;
    request!:string;

    
    // constructor(){
    //     this.imagen = "/assets/images/productos/producto_nuevo.png"
    // }
    constructor(){
        this.make = ""
        this.modelo = "";
        this.year = 0;
        this.color = "";
        //extra
        this.fecha="";
        this.horario=0;
        //details
        this.name="";
        this.lastName="";
        this.email="";
        this.phone=0;
        this.service="";
        this.city="";
        this.state="";
        this.code=0;
        this.cardetails="";
        this.request="";
        
        
    }
}
