import React, { useState, useEffect } from 'react';

import './styles.css';
import PageHeader from '../../components/pageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são nossos proffys disponíveis." >
                <form id="search-teachers">
                    <Select
                        infoDesc="subject"
                        descLabel="Materia"
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Português', label: 'Português' },
                            { value: 'História', label: 'História' },
                            { value: 'Química', label: 'Química' },
                            { value: 'Educação Fìsica', label: 'Educação Fìsica' },
                            { value: 'Geografia', label: 'Geografia' },
                        ]}
                    />

                    <Select
                        infoDesc="week-day"
                        descLabel="Dia da Semana"
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />

                    <Input
                        type="time"
                        infoDesc="time"
                        descLabel="Hora"
                    />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
            </main>

        </div>
    )
}

export default TeacherList;