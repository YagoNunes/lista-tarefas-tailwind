import { useState } from "react";
import type { ChangeEvent } from "react";

export function useInput(valorInicial: string = "") {
  const [valor, setValor] = useState<string>(valorInicial);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setValor(e.target.value);
  }

  function reset() {
    setValor("");
  }

  return { valor, onChange, reset };
}