import { Alert, ScrollView, StyleSheet, Text } from "react-native";
import TarjetaHobby from "../components/TarjetaHobby";

export default function HobbiesScreen() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <Text style={estilos.tituloPrincipal}>Intereses y Pasatiempos</Text>

      <TarjetaHobby
        nombre="Jugar Call of Duty Mobile"
        icono="gamecontroller-outline"
        onPress={() => Alert.alert("Detalle de Hobby", "Competitivo en partidas multijugador y familiarizado con rangos y mecánicas de juego.")}
      />

      <TarjetaHobby
        nombre="Desarrollo de Software y Codear"
        icono="code-slash-outline"
        onPress={() => Alert.alert("Detalle de Hobby", "Pasión por construir aplicaciones web y móviles utilizando React, TypeScript y arquitecturas limpias.")}
      />

      <TarjetaHobby
        nombre="Escuchar Música y Podcasts"
        icono="headset-outline"
        onPress={() => Alert.alert("Detalle de Hobby", "Escucha activa de géneros variados y contenido tecnológico mientras programo.")}
      />

      <TarjetaHobby
        nombre="Fútbol y Deportes"
        icono="football-outline"
        onPress={() => Alert.alert("Detalle de Hobby", "Aficionado al fútbol, diseño de indumentaria deportiva y conceptos de streetwear.")}
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