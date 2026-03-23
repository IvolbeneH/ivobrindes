import { Banner } from "./components/banner";
import { ComoComprar } from "./components/como-comprar";
import { Header } from "./components/header";
import { Inicio } from "./components/inicio";
import { Products } from "./components/products";

export default function Home() {
  return (
    <div>
      <Banner />
      <Inicio />
      <Products />
      <ComoComprar />
    </div>
  );
}
