import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Main = ({ data }) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    const result = data.find(item => item.code === searchValue);
    if (result) {

      navigate(`/specialty/${result.code}`);
    } else {

      const result = data.find(item =>
        item.title && item.title.toLowerCase().includes(searchValue.toLowerCase())
      );

      if (result) {
        navigate(`/specialty/${result.code}`);
      }
    }
  };

  return (
    <div className='flex-col space-y-[16px] pt-16 bg-grey-dark h-screen'>
      <div className='main flex-col '>
        <div className='title '>
          <h1 className='h1'> Определяй свое будущее</h1>
          <p className='description w-[290px] desktop:w-[445px] tablet:w-[445px] text-left'>
            Вы хотите получить высшее образование в России, но не знаете, <br />
            как выбрать подходящий вуз и программу? Наш сайт поможет вам <br />
            сделать правильный выбор! На нашем сайте вы найдете перечень <br />
            образовательных программ и направлений в вузах РФ, которые <br />
            соответствуют вашим интересам. <br />
          </p>
        </div>
      </div>
      <div class='input-group px-4 desktop:px-[85px] tablet:px-[39px] '>
        <div class='form-outline flex flex-row'>
          <input
            type='search'
            id='form1'
            class='  pl-5 form-control w-5/6 h-16 text-green text-xl font-normal outline-none'
            placeholder='Введите название или код направления'
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
          <button
            class='w-1/6 h-16 bg-green flex items-center justify-center'
            onClick={handleSearch}
          >
            <p className='description' for='form1'>
              Поиск
            </p>
          </button>

        </div>
      </div>
    </div>
  );
};

export default Main;
