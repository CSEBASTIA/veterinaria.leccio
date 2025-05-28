var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Clase base general para cualquier mascota
var Mascota = /** @class */ (function () {
    function Mascota(nombreMascota, tipo, edadMascota) {
        this.nombreMascota = nombreMascota;
        this.tipo = tipo;
        this.setEdad(edadMascota); // uso del método con validación
    }
    Mascota.prototype.getNombre = function () {
        return this.nombreMascota;
    };
    Mascota.prototype.setEdad = function (nuevaEdad) {
        if (nuevaEdad < 0) {
            console.log("⚠️ Error: La edad no puede ser negativa.");
            this.edadMascota = 0;
        }
        else {
            this.edadMascota = nuevaEdad;
        }
    };
    Mascota.prototype.getFicha = function () {
        return "\uD83D\uDCC4 Mascota: ".concat(this.nombreMascota, " | Tipo: ").concat(this.tipo, " | Edad: ").concat(this.edadMascota);
    };
    Mascota.prototype.esAdulto = function () {
        return this.edadMascota >= 2;
    };
    return Mascota;
}());
// Clase específica para perros
var Canino = /** @class */ (function (_super) {
    __extends(Canino, _super);
    function Canino(nombreMascota, edadMascota, razaPerro, tieneVacunaRabia) {
        var _this = _super.call(this, nombreMascota, "Perro", edadMascota) || this;
        _this.razaPerro = razaPerro;
        _this.tieneVacunaRabia = tieneVacunaRabia;
        return _this;
    }
    Canino.prototype.getFicha = function () {
        return "\uD83D\uDC36 Nombre: ".concat(this.nombreMascota, " | Edad: ").concat(this.edadMascota, " | Raza: ").concat(this.razaPerro, " | Vacuna Rabia: ").concat(this.tieneVacunaRabia ? "Sí" : "No");
    };
    return Canino;
}(Mascota));
// Clase específica para gatos
var Felino = /** @class */ (function (_super) {
    __extends(Felino, _super);
    function Felino(nombreMascota, edadMascota, colorPelaje, esDomestico) {
        var _this = _super.call(this, nombreMascota, "Gato", edadMascota) || this;
        _this.colorPelaje = colorPelaje;
        _this.esDomestico = esDomestico;
        return _this;
    }
    Felino.prototype.getFicha = function () {
        return "\uD83D\uDC31 Nombre: ".concat(this.nombreMascota, " | Edad: ").concat(this.edadMascota, " | Pelaje: ").concat(this.colorPelaje, " | Estilo de vida: ").concat(this.esDomestico ? "Doméstico" : "Salvaje");
    };
    return Felino;
}(Mascota));
// USO DE LAS CLASES
var miPerro = new Canino("Luna", 4, "Pastor Alemán", true);
var miGato = new Felino("Tom", 1, "Gris con blanco", true);
var perroCallejero = new Canino("Rocky", -2, "Mestizo", false);
var registroMascotas = [miPerro, miGato, perroCallejero];
registroMascotas.forEach(function (mascota) {
    console.log(mascota.getFicha());
    console.log("\u00BFEs adulto?: ".concat(mascota.esAdulto() ? "Sí" : "No"));
    console.log("------------");
});
