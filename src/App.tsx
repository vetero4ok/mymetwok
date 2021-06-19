import React from 'react';
import './App.css';
import {Header} from './Componens/Header/Header';
import {Navbar} from './Componens/Navbar/Navbar';
import {Profile} from './Componens/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './Componens/News/News';
import {Music} from './Componens/Music/Music';
import {Settings} from './Componens/Settings/Settings';
import {DialogsContainer} from './Componens/Dialogs/DialogsContainer';



type propsAppType = {
    // store:StoreType
    // state: RootStateType
    // dispatch: (action: ActionType) => void

}


function App(props: propsAppType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() =>
                        <DialogsContainer/>}/>
                    <Route path="/profile" render={() =>
                        <Profile/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    {/*<Route path="/friends" render={() => <Friends/>}/>*/}


                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
