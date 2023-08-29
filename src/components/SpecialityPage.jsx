import React from 'react';
import { useParams } from 'react-router-dom';

const SpecialtyPage = ({ data }) => {
  const { code } = useParams();
  const specialty = data.find(item => item.code === code);

  if (!specialty) {
    return <div>Specialty not found</div>;
  }

  return (
    <div>
      <h1>{specialty.title}</h1>
      <p>Код специальности: {specialty.code}</p>
      <p>Степень: {specialty.degree}</p>
      <h2>Описание</h2>
      <p>{specialty.description}</p>
      <h2>Предметы ЕГЭ</h2>
      <ul>
        {specialty.exams.map(subject => (
          <li key={subject}>{subject}</li>
        ))}
      </ul>
      <h2>Профессии</h2>
      <ul>
        {specialty.professions.map(profession => (
          <li key={profession}>{profession}</li>
        ))}
      </ul>
      <h2>Основные дисциплины</h2>
      <ul>
        {specialty.classes.map(cls => (
          <li key={cls}>{cls}</li>
        ))}
      </ul>
    </div>
  );
};

export default SpecialtyPage;
