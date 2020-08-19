import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

/*Aqui estamos extendendo o InputHTMLAttributes, e tipando com HTMLInputElement, para que possamos ter acesso a todas as propriedades que o Input. Isso pode ser feito com qualquer componente do HTML, trocando pelo nome do mesmo*/
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    infoDesc: string;
    descLabel: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}

/* Para criarmos um componente que tem campos dinamicos, você pode precisa fazer uma const com o nome e tipá-la com o React.FC<interface> = () => {componente...} // o ...rest significa que pode ser passado todas as propridades dentro do elemento como o {...rest} dentro do input*/
const Select: React.FC<SelectProps> = ({ infoDesc, descLabel, options, ...rest }) => {
    return (
        <div className="select-block">
            <label htmlFor={infoDesc}>{descLabel}</label>
            <select id={infoDesc} {...rest} >
                {/*código abaixo estamos definindo uma opção que ficará disponível a primeira vez que a tela rodar, será uma opção que aparecerá o 'selecione uma opção', os atributos, disabled e hidden, garante que ele não irá aparecer na lista para ser selecionado e o selected será selecionado por primeiro, ele já vira selecionado por primeiro*/}
                <option value="" disabled hidden>Selecione uma opção</option>

                {options.map(option => {
                    return (
                        <option value={option.value} key={option.value}>{option.label}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default Select;