import React from 'react'
import { useNavigate } from 'react-router-dom'
import image1 from '../assets/image1.svg'
import image2 from '../assets/image2.svg'
import image3 from '../assets/image3.svg'
import image4 from '../assets/image4.svg'
import image5 from '../assets/image5.svg'
import image6 from '../assets/image6.svg'
import image7 from '../assets/image7.svg'
import image8 from '../assets/image8.svg'

const directions = [
  { title: 'МАТЕМАТИЧЕСКИЕ И ЕСТЕСТВЕННЫЕ НАУКИ', image: image1 },
  { title: 'ИНЖЕНЕРНОЕ ДЕЛО, ТЕХНОЛОГИИ И ТЕХНИЧЕСКИЕ НАУКИ', image: image2 },
  { title: 'ЗДРАВООХРАНЕНИЕ И МЕДИЦИНСКИЕ НАУКИ', image: image3 },
  { title: 'СЕЛЬСКОЕ ХОЗЯЙСТВО И СЕЛЬСКОХОЗЯЙСТВЕННЫЕ НАУКИ', image: image4 },
  { title: 'НАУКИ ОБ ОБЩЕСТВЕ', image: image5 },
  { title: 'ОБРАЗОВАНИЕ И ПЕДАГОГИЧЕСКИЕ НАУКИ', image: image6 },
  { title: 'ГУМАНИТАРНЫЕ НАУКИ', image: image7 },
  { title: 'ИСКУССТВО И КУЛЬТУРА', image: image8 }
]

const About = () => {
  const navigate = useNavigate()

  const handleClick = (direction) => {
    navigate(`/about/${direction.title}`)
  }

  return (
    <div class="h-screen bg-grey-dark">
      <div className='grid grid-cols-4 gap-16 px-4 desktop:px-[85px] tablet:px-[39px] pt-16 items-center justify-center pb-16'>
        {directions.map(direction => (
          <div key={direction.title} className='flex flex-col items-center space-y-4'>
            <img src={direction.image} alt={direction.title} class="w-[200px] h-[200px]" onClick={() => handleClick(direction)} />
            <p className='description text-white text-center'>{direction.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About