import { Paper, Typography } from '@mui/material';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <Paper component={'main'} elevation={0} square>
      <Typography textAlign={'center'} variant='h1' component={'h1'}>
        Hello, World!
      </Typography>
    </Paper>
  );
};

export default Home;
