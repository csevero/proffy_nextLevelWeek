import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/44780300?s=460&u=c14395efc05bd49f8381c82293a83031583f08aa&v=4" alt="Carlos" />
                <div>
                    <strong>Carlos Eduardo</strong>
                    <span>Programação</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias do mercado, pronto para te ajudar a resolver seu problemas e te ajudar na sua jornada como um programador de sucesso!
                    </p>

            <footer>
                <p>
                    Preço/Hora
                            <strong>R$50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Botão Whatsapp " />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;