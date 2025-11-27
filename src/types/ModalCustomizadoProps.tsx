export interface ModalCustomizadoProps {
    mostrarModalQuando: boolean;
    aoCancelar: () => void;
    titulo: string;
    corpo: string | React.ReactNode;
    textoBotaoConfirmacao?: string; //*parametro e opcional, 
    textoBotaoCancelamenmto?: string;
    aoConfirmar?: () => void;  //* void significa elemento vazio...
    customizarBotoes?: boolean;  //* bolean, quando e verdadeiro ou falso
    exibirConteudoCentralizado?: boolean

}