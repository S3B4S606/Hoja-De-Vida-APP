import { ScrollView, StyleSheet, Text } from "react-native";
import TarjetaExperiencia from "../components/TarjetaExperiencia";

export default function ExperienciaScreen() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <Text style={estilos.tituloPrincipal}>Experiencia en Proyectos</Text>

      <TarjetaExperiencia
        cargo="Desarrollador Frontend & Móvil (Aprentice)"
        empresa="SENA - ADSO"
        periodo="2026 - Presente"
        descripcion="Desarrollo de interfaces responsivas y aplicaciones móviles utilizando React Native, Expo y TypeScript aplicando el patrón MVC."
      />

      <TarjetaExperiencia
        cargo="Diseñador de Base de Datos"
        empresa="Proyecto DataVentor"
        periodo="2026"
        descripcion="Creación y configuración de estructuras relacionales en PostgreSQL, triggers, funciones almacenadas y diseño no relacional en MongoDB."
      />

      <TarjetaExperiencia
        cargo="Tester / Control de Calidad QA"
        empresa="Simulaciones de Rendimiento"
        periodo="2026"
        descripcion="Ejecución de pruebas de carga, rendimiento y estrés utilizando el framework Locust y gestión de colecciones en Postman."
      />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  tituloPrincipal: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 12,
  },
});