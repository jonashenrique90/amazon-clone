import React from 'react';
import "./Home.css";

import Product from "../Product/Product";

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

                <div className="home_row">
                    <Product
                        id="43132432457"
                        title="A startup enxuta"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/41nnVZbC+eL._SY344_BO1,204,203,200_.jpg"
                        rating={5}
                    ></Product>
                    <Product
                        id="4355653257"
                        title="Refatoração: Aperfeiçoando o Design de Códigos Existentes"
                        price={39.99}
                        image="https://m.media-amazon.com/images/I/81sTm5M7wjL._AC_AA180_.jpg"
                        rating={5}
                    ></Product>
                </div>
                <div className="home_row">
                    <Product
                        id="4359734535457"
                        title="Arquitetura Limpa: o Guia do Artesão Para Estrutura e Design de Software"
                        price={59.99}
                        image="https://m.media-amazon.com/images/I/81yxCySs1hL._AC_AA180_.jpg"
                        rating={4}
                    ></Product>
                    <Product
                        id="4351435457"
                        title="Curso Intensivo de Python: Uma Introdução Prática e Baseada em Projetos à Programação"
                        price={99.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51SVe65-qJL._SX356_BO1,204,203,200_.jpg"
                        rating={4}
                    ></Product>
                    <Product
                        id="435134457"
                        title="Como Mentir com Estatística"
                        price={9.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51CPpvFsKVL._SX331_BO1,204,203,200_.jpg"
                        rating={4}
                    ></Product>
                </div>
                <div className="home_row">
                    <Product
                        id="43592343457"
                        title="O homem mais rico da Babilônia"
                        price={269.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/41+WJy1N1dL._SX333_BO1,204,203,200_.jpg"
                        rating={5}
                    ></Product>
                    <Product
                        id="435972334543"
                        title="Mindset: A nova psicologia do sucesso "
                        price={299.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/41cCK9HS6VL._SX346_BO1,204,203,200_.jpg"
                        rating={3}
                    ></Product>

                </div>
            </div>
        </div>
    )
}

export default Home;