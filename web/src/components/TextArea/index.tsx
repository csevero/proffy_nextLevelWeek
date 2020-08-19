import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

/*Aqui estamos extendendo o TextAreaHTMLAttributes, e tipando com HTMLTextAreaElement, para que possamos ter acesso a todas as propriedades que o TextArea. Isso pode ser feito com qualquer componente do HTML, trocando pelo nome do mesmo*/
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    infoDesc: string;
    descLabel: string;
}

/* Para criarmos um componente que tem campos dinamicos, você pode precisa fazer uma const com o nome e tipá-la com o React.FC<interface> = () => {componente...} // o ...rest significa que pode ser passado todas as propridades dentro do elemento como o {...rest} dentro do TextArea*/
const TextArea: React.FC<TextareaProps> = ({ infoDesc, descLabel, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor={infoDesc}>{descLabel}</label>
            <textarea id={infoDesc} {...rest} />
        </div>
    )
}

export default TextArea;