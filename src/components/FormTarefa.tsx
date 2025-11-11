import { useInput } from "../hooks/useInput";
import { useTarefas } from "../context/TarefasContext";

export default function FormTarefa() {
  const { valor, onChange, reset } = useInput("");
  const { adicionarTarefa } = useTarefas();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!valor.trim()) return;
    adicionarTarefa(valor);
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 mb-6 justify-center"
    >
      <input
        type="text"
        placeholder="Digite uma nova tarefa..."
        value={valor}
        onChange={onChange}
        className="w-64 md:w-96 p-2 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-700"
      />
      <button
        type="submit"
        className="btn bg-cyan-500 text-black hover:scale-105"
      >
        Adicionar
      </button>
    </form>
  );
}