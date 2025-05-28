// Clase base general para cualquier mascota
class Mascota {
  protected nombreMascota: string;
  protected tipo: string;
  protected edadMascota: number;

  constructor(nombreMascota: string, tipo: string, edadMascota: number) {
    this.nombreMascota = nombreMascota;
    this.tipo = tipo;
    this.setEdad(edadMascota); // uso del método con validación
  }

  public getNombre(): string {
    return this.nombreMascota;
  }

  public setEdad(nuevaEdad: number): void {
    if (nuevaEdad < 0) {
      console.log("⚠️ Error: La edad no puede ser negativa.");
      this.edadMascota = 0;
    } else {
      this.edadMascota = nuevaEdad;
    }
  }

  public getFicha(): string {
    return `📄 Mascota: ${this.nombreMascota} | Tipo: ${this.tipo} | Edad: ${this.edadMascota}`;
  }

  public esAdulto(): boolean {
    return this.edadMascota >= 2;
  }
}

// Clase específica para perros
class Canino extends Mascota {
  private razaPerro: string;
  private tieneVacunaRabia: boolean;

  constructor(nombreMascota: string, edadMascota: number, razaPerro: string, tieneVacunaRabia: boolean) {
    super(nombreMascota, "Perro", edadMascota);
    this.razaPerro = razaPerro;
    this.tieneVacunaRabia = tieneVacunaRabia;
  }

  public getFicha(): string {
    return `🐶 Nombre: ${this.nombreMascota} | Edad: ${this.edadMascota} | Raza: ${this.razaPerro} | Vacuna Rabia: ${this.tieneVacunaRabia ? "Sí" : "No"}`;
  }
}

// Clase específica para gatos
class Felino extends Mascota {
  private colorPelaje: string;
  private esDomestico: boolean;

  constructor(nombreMascota: string, edadMascota: number, colorPelaje: string, esDomestico: boolean) {
    super(nombreMascota, "Gato", edadMascota);
    this.colorPelaje = colorPelaje;
    this.esDomestico = esDomestico;
  }

  public getFicha(): string {
    return `🐱 Nombre: ${this.nombreMascota} | Edad: ${this.edadMascota} | Pelaje: ${this.colorPelaje} | Estilo de vida: ${this.esDomestico ? "Doméstico" : "Salvaje"}`;
  }
}

// USO DE LAS CLASES
const miPerro = new Canino("Luna", 4, "Pastor Alemán", true);
const miGato = new Felino("Tom", 1, "Gris con blanco", true);
const perroCallejero = new Canino("Rocky", -2, "Mestizo", false);

const registroMascotas: Mascota[] = [miPerro, miGato, perroCallejero];

registroMascotas.forEach(mascota => {
  console.log(mascota.getFicha());
  console.log(`¿Es adulto?: ${mascota.esAdulto() ? "Sí" : "No"}`);
  console.log("------------");
});
