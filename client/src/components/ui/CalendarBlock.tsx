import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../components/css/PersonalPage.module.css';
import { DayCalendarSkeleton } from '@mui/x-date-pickers';

const CalendarBlock = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [workoutDates, setWorkoutDates] = useState([
    new Date('2024-12-05'),
    new Date('2024-12-06'),
    new Date('2024-12-12'),
  ]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWorkoutDates = async () => {
      try {
        const response = await axios.get('/api/usersWorkouts'); // Укажите ваш API
        // Преобразуем строки дат в объекты Date
        const dates = response.data.map((dateString) => new Date(dateString));
        setWorkoutDates(dates);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWorkoutDates();
  }, []);

  const renderDay = (date, selected, isInCurrentMonth) => {
    const isWorkoutDate = workoutDates.some(
      (workoutDate) => workoutDate.toDateString() === date.toDateString(),
    );

    return (
      <div
        style={{
          backgroundColor: isWorkoutDate ? 'lightblue' : 'transparent',
          borderRadius: '50%',
          padding: '5px',
          textAlign: 'center',
        }}
      >
        {date.getDate()}
      </div>
    );
  };

  return (
    <Row className={styles.row}>
      <Col className={styles.col}>
        <Container className={styles.calendar}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateCalendar
              value={currentDate}
              onChange={(newValue) => setCurrentDate(newValue)}
              renderDay={renderDay}
              loading={isLoading}
              renderLoading={() => <DayCalendarSkeleton />}
              // day: {
              //   highlightedDays,
              // } as any
            />
          </LocalizationProvider>
        </Container>
      </Col>
    </Row>
  );
};

export default CalendarBlock;
