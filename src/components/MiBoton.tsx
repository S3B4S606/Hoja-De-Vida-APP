import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  textoBoton: string;
  nombreIcono: keyof typeof Ionicons.glyphMap;
  colorBoton?: string;
  onPress: () => void;
};

export default function MiBoton({ textoBoton, nombreIcono, colorBoton = "#2563eb", onPress }: Props) {
  return (
    <TouchableOpacity style={[styles.boton, { backgroundColor: colorBoton }]} onPress={onPress}>
      <Ionicons name={nombreIcono} size={20} color="#fff" style={styles.icono} />
      <Text style={styles.texto}>{textoBoton}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 6,
    elevation: 2,
  },
  icono: {
    marginRight: 8,
  },
  texto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});