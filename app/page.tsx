import { CampanhaEleitoral } from "./components/campanhas";
import { ComoComprar } from "./components/como-comprar";
import { Inicio } from "./components/inicio";
import { Products } from "./components/products";
import { SobreNos } from "./components/sobre-nos";

export default function Home() {
  return (
    <div>
      <Inicio />
      <Products />
      <CampanhaEleitoral />
      <SobreNos />
      <ComoComprar />
    </div>
  );
}
