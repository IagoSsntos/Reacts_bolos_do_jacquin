import axios from "axios";
import type { bolo } from "../types/Bolo";

export const getBolos = async (): Promise<bolo[]> => {
    try {
        const resposta = await axios.get("http://localhost:3000/bolos");
        return resposta.data;

    }catch (error){
        console.error("erro ao buscar os dados ", error );
         throw error;
    }
}