

import { TarefasProvider } from "./context/TarefasContext";
import FormTarefa from "./components/FormTarefa";
import ListaTarefas from "./components/ListaTarefas";

export default function App() {
  return (
    <TarefasProvider>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 from-gray-900 to-black text-white px-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-700 drop-shadow-lg">
          📝 Lista de Tarefas
        </h1>

        <FormTarefa />
        <ListaTarefas />

        <footer className="mt-10 text-sm text-gray-500">
          Feito por <span className="text-gray-700">Yago Nunes</span> 🚀
        </footer>
      </div>
    </TarefasProvider>
  );
}
