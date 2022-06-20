export class Presupuesto {

    //ATRIBUTOS    
    static id: number = 1;

    _id: number;
    _web: boolean = false;
    _seo: boolean = false;
    _adwords: boolean = false;
    _webPaginas: number = 1;
    _webIdiomas: number = 1;
    _total: number = 0;
    _nombre?: string = '';
    _cliente: string = '';
    _fecha?: Date = null;


    //CONSTRUCTOR
    constructor(web: boolean, seo: boolean, adwords: boolean, webPaginas: number, webIdiomas: number, total: number, nombre: string, cliente: string, fecha?: Date, id?: number) {
        this._web = web;
        this._seo = seo;
        this._adwords = adwords;
        this._webPaginas = webPaginas;
        this._webIdiomas = webIdiomas;
        this._total = total;
        this._nombre = nombre;
        this._cliente = cliente;
        this._fecha = fecha;

        this._id = Presupuesto.id++;

    }

    //GETTERS & SETTERS}
    get id() { return this._id; }
    get web() { return this._web; }
    get seo() { return this._seo; }
    get adwords() { return this._adwords; }
    get webPaginas() { return this._webPaginas; }
    get webIdiomas() { return this._webIdiomas; }
    get total() { return this._total; }
    get nombre() { return this._nombre; }
    get cliente() { return this._cliente; }
    get fecha() { return this._fecha; }

    // set id(val) { this._id = val; }
    set web(val) { this._web = val; }
    set seo(val) { this._seo = val; }
    set adwords(val) { this._adwords = val; }
    set webPaginas(val) { this._webPaginas = val; }
    set webIdiomas(val) { this._webIdiomas = val; }
    set total(val) { this._total = val; }
    set nombre(val) { this._nombre = val; }
    set cliente(val) { this._cliente = val; }
    set fecha(val) { this._fecha = val; }
    set id(val) { this._id = val; }

    //MÉTODOS


}