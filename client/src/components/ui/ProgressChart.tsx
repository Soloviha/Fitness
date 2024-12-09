import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type ProgressChartProps = {
  workoutData: { date: string; count: number }[];
};

export default function ProgressChart({
  workoutData,

}: ProgressChartProps): React.JSX.Element {
  const calculateWeeklyAverages = (data: { date: string; count: number }[]) => {
    const weeklyCounts: Record<string, number> = {};
    const weeklyTotals: Record<string, number> = {};

    data.forEach(({ date, count }) => {
      const weekStart = new Date(date);
      weekStart.setDate(weekStart.getDate() - weekStart.getDay()); // Начало недели (воскресенье)
      const weekKey = weekStart.toISOString().split('T')[0]; // Используем только дату

      if (!weeklyCounts[weekKey]) {
        weeklyCounts[weekKey] = 0;
        weeklyTotals[weekKey] = 0;
      }

      weeklyCounts[weekKey] += count;
      weeklyTotals[weekKey] += 1; // Считаем количество тренировок
    });

    // Рассчитываем среднее
    return Object.keys(weeklyCounts).map((weekKey) => ({
      week: weekKey,
      average: weeklyCounts[weekKey] / weeklyTotals[weekKey],
    }));
  };

  const weeklyAverages = calculateWeeklyAverages(workoutData);
  const labels = weeklyAverages.map((data) => data.week);
  const averages = weeklyAverages.map((data) => data.average);

  const data = {
    labels,
    datasets: [
      {
        label: 'Среднее количество тренировок в неделю',
        data: averages,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <h3>Прогресс тренировок и веса</h3>
      <Bar data={data} />
    </div>
  );
}
