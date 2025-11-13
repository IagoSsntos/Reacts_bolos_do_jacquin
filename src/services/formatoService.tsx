export const formatosServices = {
    PrecoBR: (preco : number) : string => {
        return `${preco.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })}`
    },
    PesoEmKG:(valorPeso: number) : string => {
        return `${valorPeso.toLocaleString('pt-BR', {minimumFractionDigits: 3})} kg`
    }
}