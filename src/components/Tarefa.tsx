import { memo } from "react";
import { useTarefas } from "../context/TarefasContext";

// 🔹 Interface da tarefa — mesma usada no contexto
interface TarefaProps {
  tarefa: {
    id: number;
    texto: string;
    concluida: boolean;
  };
}

function Tarefa({ tarefa }: TarefaProps) {
  const { alternarTarefa, removerTarefa } = useTarefas();

  return (
    <li
      className={`flex justify-between items-center p-3 mb-2 glass transition-all duration-300 ${
        tarefa.concluida ? "opacity-60" : "opacity-100"
      }`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={tarefa.concluida}
          onChange={() => alternarTarefa(tarefa.id)}
          className="w-5 h-5 accent-cyan-400 cursor-pointer"
        />
        <span
          className={`${
            tarefa.concluida
              ? "line-through text-gray-400"
              : "text-gray-700"
          }`}
        >
          {tarefa.texto}
        </span>
      </div>
      <button
        onClick={() => removerTarefa(tarefa.id)}
        className="text-red-800 hover:text-red-500 transition-colors"
      >
        ✖
      </button>
    </li>
  );
}

export default memo(Tarefa);