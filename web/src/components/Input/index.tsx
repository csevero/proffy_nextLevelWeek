import React, { InputHTMLAttributes } from 'react';

import './styles.css';

/*Aqui estamos extendendo o InputHTMLAttributes, e tipando com HTMLInputElement, para que possamos ter acesso a todas as propriedades que o Input. Isso pode ser feito com qualquer componente do HTML, trocando pelo nome do mesmo*/
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    infoDesc: string;
    descLabel: string;
}

/* Para criarmos um componente que tem campos dinamicos, você pode precisa fazer uma const com o nome e tipá-la com o React.FC<interface> = () => {componente...} // o ...rest significa que pode ser passado todas as propridades dentro do elemento como o {...rest} dentro do input*/
const Input: React.FC<InputProps> = ({ infoDesc, descLabel, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={infoDesc}>{descLabel}</label>
            <input type="text" id={infoDesc} {...rest} />
        </div>
    )
}

export default Input;