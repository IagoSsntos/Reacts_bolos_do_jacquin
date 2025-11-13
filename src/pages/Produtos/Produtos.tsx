import './Produtos.css';

import choc_belga from '../../assets/imgs/choc-belga.png';
import choc_ninho from '../../assets/imgs/choc-ninho.png';
import cenoura_choc from '../../assets/imgs/cenoura-choc.png';
import ninho_morango from '../../assets/imgs/choc-ninho-morango.png'
import choc_pistache from '../../assets/imgs/choc-pistache.png'
import choc_oreo from '../../assets/imgs/choc-oreo.png'
import what from '../../assets/whatsapp.png'
import { useEffect, useState } from 'react';
import type { bolo } from '../../types/Bolo';
import { getBolos } from '../../services/bolosServices.';
import CardProduto from '../../components/CardProduto/CardProduto';
import Carrosel from '../../components/Carrosel/Carrosel';

//funções assincronas
export default function Produtos() {
    const [bolos, setBolos] = useState<bolo[]>([]);



    const fetchBolos = async () => {   //async algo q nao se exculta imediatamente  // toda vez que usa uma async se usa um await     
        try {
            const dados = await getBolos();
            console.log("dados retornados da API:")
            setBolos(dados);
        } catch (error) {
            console.error("erro ao execultar o getBolos: ", error)
        }
    }


    useEffect(() => {
        fetchBolos();

    }, [])



    return (
        <main>
            <Carrosel/>


            <section className="container_produto">
                <h1 className="acessivel">produtos de chocolate</h1>
                <div className="titulo">
                    <span>Chocolate</span>
                    <hr />
                </div>

                <section className="cards">


                    {
                        bolos.map((b: bolo) => {
                            return (
                                <CardProduto
                                    nome={b.nome}
                                    descricao={b.descricao}
                                    preco={b.preco}
                                    imagem={b.imagens[0]}
                                    peso={b.peso}
                                />







                            );
                        })
                    }


                </section>
            </section>

            <a className="whatsapp" href="https://wa.me/5511999999999?text=Olá%20,%20gostaria%20de%20mais%20informações."
                target="_blank">
                <img src={what} />
            </a>
        </main>

    )
}
