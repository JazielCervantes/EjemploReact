import { useState } from "react";

export function useContador(valorInicial = 0) {
    const [contador, setContador] = useState(valorInicial)

    const sumar = () => setContador(contador + 1)
    const restar = () => setContador(contador - 1)
    const reset = () => setContador(valorInicial)

    return {
        sumar, restar, reset, contador

    }
}