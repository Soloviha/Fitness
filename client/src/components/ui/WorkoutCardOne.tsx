import React from 'react'
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../providers/redux/hooks';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function WorkoutCardOne(): React.JSX.Element {
    const { id } = useParams();
    const restId = id ? Number(id) : undefined;
    const workout = useAppSelector((state) => state.workout.workouts.find((el) => el.id === restId));
  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {workout?.exOne}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {workout?.descOne}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {workout?.exTwo}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {workout?.descTwo}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {workout?.exThree}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {workout?.descThree}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {workout?.exFour}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {workout?.descFour}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {workout?.exFive}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {workout?.descFive}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </>
  )
}
