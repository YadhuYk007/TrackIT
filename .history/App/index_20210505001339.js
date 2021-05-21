import { StatusBar } from "expo-status-bar";
import React from "react";
import MainCard from './components/MainCard'

export default function App() {
  return (
    <MainCard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2d7a76",
    alignItems: "center",
    justifyContent: "center",
  },
});
