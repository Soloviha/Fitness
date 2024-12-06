// import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
// import { useAppDispatch, useAppSelector } from '../../providers/redux/hooks';
// import { updateUserParamsThunk, fetchUserParamsThunk } from '../../providers/slice/user/userThunks'; // Импортируйте нужные thunks

import React from 'react';
import ReactDOM from 'react-dom';
import CalendarBlock from '../ui/CalendarBlock'; // Убедитесь, что путь к вашему компоненту правильный

export default function UserParamsPage(): React.JSX.Element {
  // это не трогай пока, оно должно работать!!!!
  //_________________________________________________________________________________

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
  //_________________________________________________________________________________
  // это не трогай пока, оно должно работать!!!!

  return (
    <Container>
      <>
        <CalendarBlock />,
      </>
      <h1>Параметры Пользователя</h1>
      <Form>
        {/* onSubmit={submitHandler} */}
        <Form.Group className="mb-3" controlId="formBasicSecondName">
          <Form.Label>Имя</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Введите имя"
            defaultValue="Имя"
            // {user.name}
            required // эти данные из другой таблицы
            // readOnly={!isEditing}// Поле доступно только при редактировании
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicSecondName">
          <Form.Label>Фамилия</Form.Label>
          <Form.Control
            type="text"
            name="secondName"
            placeholder="Введите фамилию"
            defaultValue="Фамилия"
            // {userParams.secondName}
            required
            // readOnly={!isEditing}// Поле доступно только при редактировании
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDateOfBirth">
          <Form.Label>Дата рождения</Form.Label>
          <Form.Control
            type="date"
            name="dateOfBirth"
            defaultValue={new Date().toISOString().split('T')[0]}
            // {userParams.dateOfBirth}
            required
            // readOnly={!isEditing}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicGender">
          <Form.Label>Пол</Form.Label>
          <Form.Select
            name="gender"
            required
            // disabled={!isEditing}
          >
            <option value="" disabled>
              Выберите пол
            </option>
            {/* <option value="male" selected={userParams.gender === 'male'}>Мужской</option>
            <option value="female" selected={userParams.gender === 'female'}>Женский</option>
            <option value="other" selected={userParams.gender === 'other'}>Другой</option> */}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicWeight">
          <Form.Label>Вес (кг)</Form.Label>
          <Form.Control
            type="string" // или number
            name="weight"
            placeholder="Введите вес"
            defaultValue="55"
            // {userParams.weight}
            required
            // readOnly={!isEditing}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicHeight">
          <Form.Label>Рост (см)</Form.Label>
          <Form.Control
            type="string" // или number
            name="height"
            placeholder="Введите рост"
            defaultValue="155"
            // {userParams.height}
            required
            // readOnly={!isEditing}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          //  disabled={!isEditing}
        >
          Сохранить
        </Button>
        <Button
          variant="secondary"
          // onClick={() => setIsEditing(!isEditing)}
          className="ms-2"
        >
          Редактировать
          {/* {isEditing ? 'Отменить' : 'Редактировать'} */}
        </Button>
      </Form>
    </Container>
  );
}

// import React from 'react';
// import { Button, Container, Form } from 'react-bootstrap';
// // import { useAppDispatch } from '../../providers/redux/hooks';

// export default function PersonalPage(): React.JSX.Element {
//   // const dispatch = useAppDispatch();

//   // const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
//   //   e.preventDefault();
//   //   const formData = new FormData(e.currentTarget);
//   //   void dispatch(updateUserParamsThunk(formData)); // Используйте нужный thunk для обновления параметров
//   // };

//   return (
//     <>
//       <Container>
//         <>Добавление/Редактирование параметров Пользователя</>
//         <Form>
//           {/* onSubmit={submitHandler} */}
//           <Form.Group className="mb-3" controlId="formBasicSecondName">
//             <Form.Label>Фамилия</Form.Label>
//             <Form.Control type="text" name="secondName" placeholder="Введите фамилию" required />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicDateOfBirth">
//             <Form.Label>Дата рождения</Form.Label>
//             <Form.Control type="date" name="dateOfBirth" required />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicGender">
//             <Form.Label>Пол</Form.Label>
//             <Form.Select name="gender" required>
//               <option value="">Выберите пол</option>
//               <option value="male">Мужской</option>
//               <option value="female">Женский</option>
//               <option value="other">Другой</option>
//             </Form.Select>
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicWeight">
//             <Form.Label>Вес (кг)</Form.Label>
//             <Form.Control type="number" name="weight" placeholder="Введите вес" required />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicHeight">
//             <Form.Label>Рост (см)</Form.Label>
//             <Form.Control type="number" name="height" placeholder="Введите рост" required />
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Сохранить
//           </Button>
//         </Form>
//       </Container>
//     </>
//   );
// }
