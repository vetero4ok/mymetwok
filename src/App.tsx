import React from 'react';
import './App.css';
import {Navbar} from './Componens/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './Componens/News/News';
import {Music} from './Componens/Music/Music';
import {Settings} from './Componens/Settings/Settings';
import {UsersContainer} from './Componens/Users/UsersContainer';
import {ProfileContainer} from './Componens/Profile/ProfileContainer';
import {HeaderContainer} from './Componens/Header/HeaderContainer';
import {DialogsContainer} from './Componens/Dialogs/DialogsContainer';
import {FriendsContainer} from './Componens/Friends/FriendsContainer';
import {LoginByConnect} from './Componens/Login/Login';
import {connect} from 'react-redux';
import {AppStateType} from './Redux/Redux-Store';
import {compose} from 'redux';
import {Preloader} from './Componens/Common/Preloader/Preloader';
import {initializedAppTC} from './Redux/app-reducer';
import 'antd/dist/antd.css';

type AppPropsType = {
    initializedApp: boolean
    initializedAppTC: () => void
}

class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializedAppTC()
    }

    render() {
        if (!this.props.initializedApp) {
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/friends" render={() => <FriendsContainer/>}/>
                        <Route path="/login" render={() => <LoginByConnect/>}/>


                    </div>

                </div>
            </BrowserRouter>
        );
    }
}

type MapStatePropsType = {
    initializedApp: boolean
}
type MapDispatchPropsType = {
    initializedAppTC: () => void
}
const mapStateToProps = (state: AppStateType) => {
    return {
        initializedApp: state.app.initializedApp,
    }
}

export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {initializedAppTC}),
    //   withRouter,
)(App);
