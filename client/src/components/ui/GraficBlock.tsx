import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart } from '@mui/x-charts';

const GraficBlock = () => {
  const [weights, setWeights] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('URL_ВАШИХ_ДАННЫХ'); // Замените на ваш URL
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setWeights(response.data.weights); // Предполагается, что данные имеют поле weights
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setDates(response.data.dates); // Предполагается, что данные имеют поле dates
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    };

    fetchData();
  }, []);

  // Проверка наличия данных перед рендерингом графика
  if (weights == undefined || dates == undefined || weights.length === 0 || dates.length === 0) {
    return (
      <LineChart
        xAxis={[{ data: [1, 2, 3, 4, 5, 6] }]} // Используем заданные даты
        yAxis={[{ data: [0, 2, 4, 6, 8, 10, 12] }]} // Задаем значения для оси Y
        series={[
          {
            data: weights, // Используем заданные веса
          },
        ]}
        width={500}
        height={300}
      />
    ); // Или любой другой индикатор загрузки
  }
  return (
    <LineChart
      // xAxis={[{ data: dates }]} // Используем загруженные даты
      // series={[
      //   {
      //     data: weights, // Используем загруженные веса
      //   },
      yAxis={[{ data: [9, 10, 3, 5, 8, 10] }]} // Используем загруженные даты
      series={[
        {
          data: [1, 2, 3, 11, 8, 10], // Используем загруженные веса
        },
      ]}
      width={500}
      height={300}
    />
  );
};

export default GraficBlock;
