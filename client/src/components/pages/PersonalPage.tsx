import React, { useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import CalendarBlock from '../ui/CalendarBlock';
import PersonalMetric from '../ui/PersonalMetric';
import FavoriteWorkouts from '../ui/FavoriteWorkouts';
import PersonalGoals from '../ui/PersonalGoals';
import PhotoBlock from '../ui/PhotoBlock';
import styles from '../css/PersonalPage.module.css';
import ProgressChart from '../ui/ProgressChart';

export default function PersonalPage(): React.JSX.Element {
  // const [workoutData, setWorkoutData] = useState([{ date: '2024-12-01', count: 3 }, { date: '2024-12-02', count: 2 }]);
  // const [weightData, setWeightData] = useState([{ date: '2024-12-01', weight: 70 }, { date: '2024-12-02', weight: 69 }]);
  // это не трогай пока, оно должно работать!!!!
  // _________________________________________________________________________________

  // const dispatch = useAppDispatch();
  // const userParams = useAppSelector((state) => state.user.params); // Получаем данные пользователя из Redux
  // const [isEditing, setIsEditing] = useState(false);

  // useEffect(() => {
  //   // Загружаем данные пользователя при монтировании компонента
  //   void dispatch(fetchUserParamsThunk());
  // }, [dispatch]);

  // const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   void dispatch(updateUserParamsThunk(formData)); // Используйте нужный thunk для обновления параметров
  // };
  // _________________________________________________________________________________
  // это не трогай пока, оно должно работать!!!!

  return (
    <div >
      <Container className={styles.formContainer}>
        <Row className={styles.row}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ flex: 1, marginRight: '10px' }}>
              {/* <CalendarBlock /> */}
              <ProgressChart workoutData={workoutData} weightData={weightData} /> {/* Используйте компонент диаграммы */}
            </div>
            <div style={{ flex: 1, marginLeft: '10px' }}>
              <PhotoBlock />
            </div>
          </div>
        </Row>
        <>
         
          <Form>
          <h4 >Параметры Пользователя</h4>
            {/* onSubmit={submitHandler} */}
            <Form.Group className={styles.mb_3} controlId="formBasicName">
              <Form.Label>Имя</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Введите имя"
                defaultValue="Имя"
                required
              />
            </Form.Group>
            <Form.Group className={styles.mb_3} controlId="formBasicSecondName">
              <Form.Label>Фамилия</Form.Label>
              <Form.Control
                type="text"
                name="secondName"
                placeholder="Введите фамилию"
                defaultValue="Фамилия"
                required
              />
            </Form.Group>

            <Form.Group className={styles.mb_3} controlId="formBasicDateOfBirth">
              <Form.Label>Дата рождения</Form.Label>
              <Form.Control
                type="date"
                name="dateOfBirth"
                defaultValue={new Date().toISOString().split('T')[0]}
                required
              />
            </Form.Group>

            <Form.Group className={styles.mb_3} controlId="formBasicGender">
              <Form.Label>Пол</Form.Label>
              <Form.Select name="gender" required>
                <option value="" disabled>
                  Выберите пол
                </option>
              </Form.Select>
            </Form.Group>

            <Form.Group className={styles.mb_3} controlId="formBasicWeight">
              <Form.Label>Вес (кг)</Form.Label>
              <Form.Control
                type="number"
                name="weight"
                placeholder="Введите вес"
                defaultValue="55"
                required
              />
            </Form.Group>

            <Form.Group className={styles.mb_3} controlId="formBasicHeight">
              <Form.Label>Рост (см)</Form.Label>
              <Form.Control
                type="number"
                name="height"
                placeholder="Введите рост"
                defaultValue="155"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Сохранить
            </Button>
            <Button variant="secondary" className="ms-2">
              Редактировать
            </Button>
          </Form>
        </>
      </Container>

      <>
        <h2 className={styles.h2}>Персональная метрика</h2>
        <PersonalMetric />
      </>
      <>
        <h2 className={styles.h2}>Цели</h2>
        <PersonalGoals />
      </>
      <>
        <h2 className={styles.h2}>Избранные тренировки</h2>
        <FavoriteWorkouts />
      </>
    </div>
  );
}
