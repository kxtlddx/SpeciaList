import React from 'react'
import { useParams } from 'react-router-dom'

const {
  mathematicsAndNaturalSciences,
  engineeringTechnologyAndTechnicalSciences,
  healthcareAndMedicalSciences,
  agricultureAndAgriculturalSciences,
  socialSciences,
  educationAndPedagogicalSciences,
  humanities,
  artAndCulture
} = require('./Specialties.js');

const Direction = () => {
  const { direction } = useParams()
  let data

  if (direction === 'МАТЕМАТИЧЕСКИЕ И ЕСТЕСТВЕННЫЕ НАУКИ') {
    data = mathematicsAndNaturalSciences;

}else if (direction === 'ИНЖЕНЕРНОЕ ДЕЛО, ТЕХНОЛОГИИ И ТЕХНИЧЕСКИЕ НАУКИ') {

    data = engineeringTechnologyAndTechnicalSciences;
    
}else if (direction === 'ЗДРАВООХРАНЕНИЕ И МЕДИЦИНСКИЕ НАУКИ') {

    data = healthcareAndMedicalSciences

  } else if (direction === 'СЕЛЬСКОЕ ХОЗЯЙСТВО И СЕЛЬСКОХОЗЯЙСТВЕННЫЕ НАУКИ') {

    data = agricultureAndAgriculturalSciences

  } else if (direction === 'НАУКИ ОБ ОБЩЕСТВЕ') {

    data = socialSciences

  } else if (direction === 'ОБРАЗОВАНИЕ И ПЕДАГОГИЧЕСКИЕ НАУКИ') {

    data = educationAndPedagogicalSciences

  } else if (direction === 'ГУМАНИТАРНЫЕ НАУКИ') {

    data = humanities

  } else if (direction === 'ИСКУССТВО И КУЛЬТУРА') {

    data = artAndCulture
  }

  return (
    <div class="h-max bg-grey-dark" style={{ minHeight: '100vh', height: 'auto' }}>
      <div className='title w-full px-4 desktop:px-[85px] tablet:px-[39px]
      flex flex-col text-white text-base font-semibold  mx-auto'>
        <h1 className='h1'> {direction}</h1>
        <ul class="w-[1000px] text-left description">
          {data.map(item => (
            <li key={item.code}>
              <strong>{item.code}</strong> - {item.title} {item.degree && `(${item.degree})`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Direction
