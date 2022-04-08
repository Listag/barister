
import './App.css';
import Registration from './Registration/Registration.js';
import Authentication from './Auth/Authentication.js'
import Home from './Home/Home.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from 'history';
import CourseList from './CourseList/CourseList';
import { createTheme, ThemeProvider } from '@mui/material';
import RecipeCard from './Recipes/RecipeCard';
import createPalette from '@mui/material/styles/createPalette';

const theme = createTheme({
  typography: {
    h5: {
      fontFamily: 'Helvetica',
    }
  },
  palette: {
    primary: {
      main: '#c08267',
    },
    neutral: {
      main: "#ccb9b1",
    },
    dark: {
      main: '#a0583c',
    },
    lightBlack: {
      main: '#212123',
    },
    lightGray: {
      main: '#616063',
    }
  }

});

function App() {
  const history = createBrowserHistory();
  return (
    <ThemeProvider theme={theme}>
    <Router history={history}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route paht="/lesson" element={'asdasdsad'}/>
        <Route path="/registration" element={<Registration />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path='/main' element={<CourseList />} />
        <Route path='/recipe' element={<RecipeCard />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;

