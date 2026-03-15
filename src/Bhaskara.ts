import Calculo from "./Calculo";

export default class Bhaskara extends Calculo {
    public calcular(numero1: number, numero2: number, numero3: number): any {
        let delta = Math.pow(numero2, 2) - (4 * numero1 * numero3);

        if (delta < 0) {
            return "Delta negativo. Não existem raízes reais.";
        }

        let x1 = (-numero2 + Math.sqrt(delta)) / (2 * numero1);
        let x2 = (-numero2 - Math.sqrt(delta)) / (2 * numero1);

        return `x1 = ${x1} e x2 = ${x2}`;
    }
}