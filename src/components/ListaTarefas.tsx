import { useMemo, useState } from "react";
import { useTarefas } from "../context/TarefasContext";
import Tarefa from "./Tarefa";

// 🔹 Tipagem para o filtro (evita strings soltas)
type Filtro = "todas" | "concluidas" | "pendentes";

export default function ListaTarefas() {
  const { tarefas } = useTarefas();
  const [filtro, setFiltro] = useState<Filtro>("todas");

  // 🔹 useMemo tipado automaticamente pelo retorno do filter
  const tarefasFiltradas = useMemo(() => {
    switch (filtro) {
      case "concluidas":
        return tarefas.filter((t) => t.concluida);
      case "pendentes":
        return tarefas.filter((t) => !t.concluida);
      default:
        return tarefas;
    }
  }, [tarefas, filtro]);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-center gap-2 mb-4">
        <button
          onClick={() => setFiltro("todas")}
          className={`btn ${
            filtro === "todas"
              ? "bg-cyan-500 text-black"
              : "bg-gray-800 text-gray-300"
          }`}
        >
          Todas
        </button>
        <button
          onClick={() => setFiltro("concluidas")}
          className={`btn ${
            filtro === "concluidas"
              ? "bg-cyan-500 text-black"
              : "bg-gray-800 text-gray-300"
          }`}
        >
          Concluídas
        </button>
        <button
          onClick={() => setFiltro("pendentes")}
          className={`btn ${
            filtro === "pendentes"
              ? "bg-cyan-500 text-black"
              : "bg-gray-800 text-gray-300"
          }`}
        >
          Pendentes
        </button>
      </div>

      <ul>
        {tarefasFiltradas.length > 0 ? (
          tarefasFiltradas.map((tarefa) => (
            <Tarefa key={tarefa.id} tarefa={tarefa} />
          ))
        ) : (
          <p className="text-center text-gray-400">Nenhuma tarefa</p>
        )}
      </ul>
    </div>
  );
}