import React, {Component} from 'react';
import { Switch, Route } from "react-router-dom";
import Loadable from 'react-loadable';
import { paths } from '@/constants/config';
import BodyClasses from '@/containers/BodyClasses';
import Preloader from '@/components/html/Preloader';

const Home = Loadable({
    loader: () => import('@/containers/pages/Home'),
    loading: () => <Preloader active={false}/>,
});


class App extends Component {
    render() {
        return (
        <BodyClasses>
            <Switch>
                <Route exact path={paths.HOME} component={Home}/>
            </Switch>
        </BodyClasses>
        );
    }
}

export default App