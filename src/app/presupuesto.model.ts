export class Presupuesto {

    //PROPIEDADES
    _web: boolean = false;
    _seo: boolean = false;
    _adwords: boolean = false;
    _webPaginas: number = 1;
    _webIdiomas: number = 1;
    _total: number = 0;

    //CONSTRUCTOR
    constructor(web: boolean, seo: boolean, adwords: boolean, webPaginas: number, webIdiomas: number,total:number) {
        this._web = web;
        this._seo = seo;
        this._adwords = adwords;
        this._webPaginas = webPaginas;
        this._webIdiomas = webIdiomas;
        this._total = total;
    }

    //GETTERS & SETTERS
    get web() { return this._web; }
    get seo() { return this._seo; }
    get adwords() { return this._adwords; }
    get webPaginas() { return this._webPaginas; }
    get webIdiomas() { return this._webIdiomas; }
    get total() { return this._total; }

    set web(val) { this._web = val; }
    set seo(val) { this._seo = val; }
    set adwords(val) { this._adwords = val; }
    set webPaginas(val) { this._webPaginas = val; }
    set webIdiomas(val) { this._webIdiomas = val; }
    set total(val) { this._total = val; }

    //MÉTODOS


}