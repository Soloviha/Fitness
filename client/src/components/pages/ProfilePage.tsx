import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
// import { useAppDispatch } from '../../providers/redux/hooks';


export default function UserParamsPage(): React.JSX.Element {
  // const dispatch = useAppDispatch();

  // const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   void dispatch(updateUserParamsThunk(formData)); // Используйте нужный thunk для обновления параметров
  // };

  return (<>
    <Container>
      <>Добавление/Редактирование параметров Пользователя</>
      <Form >
        {/* onSubmit={submitHandler} */}
        <Form.Group className="mb-3" controlId="formBasicSecondName">
          <Form.Label>Фамилия</Form.Label>
          <Form.Control type="text" name="secondName" placeholder="Введите фамилию" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDateOfBirth">
          <Form.Label>Дата рождения</Form.Label>
          <Form.Control type="date" name="dateOfBirth" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicGender">
          <Form.Label>Пол</Form.Label>
          <Form.Select name="gender" required>
            <option value="">Выберите пол</option>
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
            <option value="other">Другой</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicWeight">
          <Form.Label>Вес (кг)</Form.Label>
          <Form.Control type="number" name="weight" placeholder="Введите вес" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicHeight">
          <Form.Label>Рост (см)</Form.Label>
          <Form.Control type="number" name="height" placeholder="Введите рост" required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Сохранить
        </Button>
      </Form>
    </Container>
  </>
  );
}
