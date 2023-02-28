
import { Box, ListItem } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FC, ReactNode, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NavigatorResponsive from './components/common/navigator-responsive';

import { PATH_COURSES, routes } from './config/routes-config';
import { college } from './config/service-config';
import Course from './models/course';
import CoursesStore from './models/courses-store-type';
import PublisherNumbers from './publisher-numbers';
import College from './services/college';
import CoursesContext, { initialCourses } from './store/context';


const theme = createTheme();
// theme.typography.body1 = {
//   fontSize: '1.2rem',
//   '@media (min-width:568px)': {
//     fontSize: '2rem'
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '3rem'
//   }
// }

const publisher = new PublisherNumbers();
const App: FC = () => {

  const [numbers, setNumbers] = useState<number[]>([])
  useEffect(() => {
    const subscription = publisher.getNumbers().subscribe({
      next(arr: number[]) {
        setNumbers(arr);
      },
      error(err: any) {
        console.log(err)
      }
    })
    return () => subscription.unsubscribe();
  }
    , []);
  function getItems(): ReactNode[] {
    console.log(numbers);



    return numbers.map((n, index) => ListItem key={index})
  }




  publisher.getNumbers().subscribe ({
    next(x: number) {
      setNumbers(numbers.concat(x));
    },
    error(err) {
      console.log("error" + err);
    },
    complete() {
      console.log('complete')
    }


  })
  console.log("After subscribing")
  return <Box>
    <List>
      {getItems}
    </List>
  </Box>
}

export default App;
