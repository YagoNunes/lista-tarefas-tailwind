import { createContext,useContext,useState, useEffect, } from "react";
import type { ReactNode } from "react";

// 🔹 Tipagem de uma tarefa
interface Tarefa {
  id: number;
  texto: string;
  concluida: boolean;
}

// 🔹 Tipagem do contexto
interface TarefasContextType {
  tarefas: Tarefa[];
  adicionarTarefa: (texto: string) => void;
  alternarTarefa: (id: number) => void;
  removerTarefa: (id: number) => void;
}

// 🔹 Criação do contexto com tipo inicial "undefined"
const TarefasContext = createContext<TarefasContextType | undefined>(undefined);

// 🔹 Provider com tipagem de children
export function TarefasProvider({ children }: { children: ReactNode }) {
  const [tarefas, setTarefas] = useState<Tarefa[]>(() => {
    const saved = localStorage.getItem("tarefas");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  function adicionarTarefa(texto: string) {
    const nova: Tarefa = { id: Date.now(), texto, concluida: false };
    setTarefas([...tarefas, nova]);
  }

  function alternarTarefa(id: number) {
    setTarefas(
      tarefas.map((t) =>
        t.id === id ? { ...t, concluida: !t.concluida } : t
      )
    );
  }

  function removerTarefa(id: number) {
    setTarefas(tarefas.filter((t) => t.id !== id));
  }

  return (
    <TarefasContext.Provider
      value={{ tarefas, adicionarTarefa, alternarTarefa, removerTarefa }}
    >
      {children}
    </TarefasContext.Provider>
  );
}

// 🔹 Hook customizado para consumir o contexto com tipagem segura
export function useTarefas() {
  const context = useContext(TarefasContext);
  if (!context) {
    throw new Error("useTarefas deve ser usado dentro de um TarefasProvider");
  }
  return context;
}
