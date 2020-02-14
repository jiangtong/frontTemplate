import React from 'react'
import {
    Router,
    Switch,
    Route,
    useParams,
    useLocation,
    useHistory,
    useRouteMatch
} from 'react-router-dom'

const Home = () => {
    return <div>Home</div>
}

// Header组件只会在匹配`/detail/:id`时出现
const Header = () => {
    // 只有当前路径匹配`/detail/:id`时，match不为null
    const match = useRouteMatch('/detail/:id')
    return match && <div>Header</div>
}

// eslint-disable-next-line react/no-multi-comp
const Detail = () => {
    return <div>Detail</div>
}

// eslint-disable-next-line react/no-multi-comp
export default () => {
    const { id } = useParams()
    const { pathname } = useLocation()
    const history = useHistory()

    return (
        <div>
            {id} {pathname} {history}
            <div className="App">
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/detail/:id" component={Detail} />
                    </Switch>
                </Router>
            </div>
        </div>
    )
}
