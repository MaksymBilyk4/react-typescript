import React from 'react';
import {BrowserRouter, Route, NavLink} from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <div>
                    <NavLink to={"/users"}>Пользователи</NavLink>
                    <NavLink to={"/todos"}>Список дел</NavLink>
                </div>
                <Route path={"/users"} exact>
                    <UsersPage/>
                </Route>
                <Route path={"/todos"} exact>
                    <TodosPage/>
                </Route>
                <Route path={"/users/:id"} exact>
                    <UserItemPage/>
                </Route>
                <Route path={"/todos/:id"} exact>
                    <TodoItemPage/>
                </Route>
            </div>
        </BrowserRouter>
    );
};

export default App;