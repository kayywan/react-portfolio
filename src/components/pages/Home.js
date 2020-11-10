import { Router, Switch } from 'react-router-dom';
import '../../App';
import HeroSection from './component/HeroSection';


function Home () {
    return (
        <>
        <Router>
            <Navbar>
                <Switch>
                    <Route path ='/' exact component= {Home} />
                </Switch>
            </Navbar>
        </Router>
        </>
    )
};

export default Home;