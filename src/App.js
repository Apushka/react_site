import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {
  debugger;
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar store={props.store} />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer store={props.store} />} />
          <Route path="/profile" render={() => <Profile store={props.store} />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
