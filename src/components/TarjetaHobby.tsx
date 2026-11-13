import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  nombre: string;
  icono: any; // Cambiado a any para evitar conflictos de nombres de iconos con TypeScript
  onPress: () => void;
};

export default function TarjetaHobby({ nombre, icono, onPress }: Props) {
  return (
    <TouchableOpacity style={estilos.tarjeta} onPress={onPress}>
      <Ionicons name={icono} size={28} color="#2563eb" style={estilos.icono} />
      <Text style={estilos.texto}>{nombre}</Text>
      <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  tarjeta: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    elevation: 1,
  },
  icono: {
    marginRight: 16,
  },
  texto: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    color: "#1e293b",
  },
});