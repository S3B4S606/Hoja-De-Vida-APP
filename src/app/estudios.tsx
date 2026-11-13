import { ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaEstudio from "../components/TarjetaEstudio";

export default function EstudiosScreen() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <Text style={estilos.tituloPrincipal}>Formación Académica</Text>
      
      <TarjetaEstudio
        titulo="Bachiller Académico"
        institucion="Colegio Fe y Alegría San Ignacio IED"
        anio={2025}
        enCurso={false}
      />

      <TarjetaEstudio
        titulo="Técnico en Programación de Software"
        institucion="Colegio Fe y Alegría San Ignacio IED"
        anio={2025}
        enCurso={false}
      />

      <TarjetaEstudio
        titulo="Tecnólogo en Análisis y Desarrollo de Software (ADSO)"
        institucion="Servicio Nacional de Aprendizaje (SENA)"
        anio={2026}
        enCurso={true}
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