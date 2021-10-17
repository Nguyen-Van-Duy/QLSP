import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import './Admin.css';
import Main from './main/Main';
import DetailProduct from './main/DetailProduct';
import UpdateProduct from './main/UpdateProduct';
import AddProduct from './main/AddProduct';

const Admin = () => {
    return (
        <>
            <Header />
            <main>
                <Switch>
                    <Route path="/admin" exact>
                        <Redirect to="/admin/product" />
                    </Route>
                    <Route path="/admin/product" exact>
                        <Main />
                    </Route>
                    <Route path="/admin/product/:productId" exact>
                        <DetailProduct />
                    </Route>
                    <Route path="/admin/update/:updateId">
                        <UpdateProduct />
                    </Route>
                    <Route path="/admin/add-product">
                        <AddProduct />
                    </Route>
                </Switch>
            </main>
        </>
    );
};

export default Admin;