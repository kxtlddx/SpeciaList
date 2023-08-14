import React from 'react'

const Direction6 = () => {
  const data = [
    { code: '44.03.01', title: 'Педагогическое образование', degree: 'Бакалавр' },
    { code: '44.03.02', title: 'Психолого-педагогическое образование', degree: 'Бакалавр' },
    { code: '44.03.03', title: 'Специальное (дефектологическое) образование', degree: 'Бакалавр' },
    { code: '44.03.04', title: 'Профессиональное обучение (по отраслям)', degree: 'Бакалавр' },
    { code: '44.03.05', title: 'Педагогическое образование (с двумя профилями подготовки)', degree: 'Бакалавр' }
  ]

  return (
    <div className='title bg-grey-dark w-full h-screen px-4 desktop:px-[85px] tablet:px-[39px]
    flex flex-col text-white text-base font-semibold   mx-auto'> 
    <h1 className='h1'>ОБРАЗОВАНИЕ И ПЕДАГОГИЧЕСКИЕ НАУКИ </h1>
    <ul class="w-[1000px] h-[500px] text-left">
      {data.map(item => (
        <li key={item.code}>
          <strong>{item.code}</strong> - {item.title} {item.degree && `(${item.degree})`}
        </li>
      ))}
    </ul>
    </div>
  )
}

export default Direction6
