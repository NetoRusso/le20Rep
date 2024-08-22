import React from 'react';
import Style from "./Styles/Contatos.module.css";


const Contatos = () => {
  return (
      <section className={Style.contatos} aria-label='Contatos'>
        <div className="cabecalho">
          <h1 className={Style.titulo}>
            Entre em contato!
          </h1>
        </div>

        <div className={Style.container}>
          <form action="submit" className={Style.formulario}>
            <div className={Style.campo}>
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" id="nome" placeholder="Nome Completo" required/>
            </div>
            <div className={Style.campo}>
            <label htmlFor='telefone'>Telefone</label>
            <input type="text" name="telefone" id="telefone" placeholder="Telefone" required/>
            </div>
            <div className={Style.campo}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Email" required/>
            </div>
            <div className={Style.campo}>
            <label htmlFor="cnpj">CNPJ</label>
            <input type="text" name="cnpj" id="cnpj" placeholder="CNPJ" required/>
            </div>
            <div className={Style.campo}>
            <label htmlFor="CEP">CEP</label>
            <input type="number" name="CEP" id="cep" placeholder="CEP" required/>
            </div>
            <div className={Style.campo}>
            <label htmlFor="mensagem">Mensagem</label>
            <textarea name="mensagem" id="mensagem" placeholder="Mensagem"></textarea>
            </div>
            <button type="submit" className={Style.botao}>
              Enviar
            </button>
          </form>




        </div>

      </section>
  )
};

export default Contatos;
