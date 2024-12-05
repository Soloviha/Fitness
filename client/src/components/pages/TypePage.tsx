import React, { useEffect } from 'react';
import TypeCard from '../ui/TypeCard';
import { useAppDispatch, useAppSelector } from '../../providers/redux/hooks';
import { getAll } from '../../providers/slice/type/typeThunk';

export default function TypePage(): React.JSX.Element {
  const types = useAppSelector((state) => state.type.types);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getAll());
  }, []);
  
  return (
    <div className="container">
      <div className="row">
        {types.map((type) => (
          <div className="col-12" key={type.id}>
            <TypeCard type={type}/>
          </div>
        ))}
      </div>
    </div>
  );
}
