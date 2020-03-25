import React from 'react';
import Card from './Card';
import Table from './Table';
import BigCard from './BigCard';
import Payment from './Payment';
import { CARD_ITEMS } from '../../constants';
import Chart from '../../Chart';
const MainSection = () => {
  return (
    <div className='main-content'>
      <div style={{ display: 'flex' }}>
        {CARD_ITEMS.map((item, index) => {
          return <Card key={index} items={item} />;
        })}
      </div>
      <div id='showcase'>
        <div className='graph'>
          <Chart />
        </div>
        <div>
          <BigCard />
          <BigCard />
        </div>
      </div>
      <Payment />
      <Table />
    </div>
  );
};

export default MainSection;
