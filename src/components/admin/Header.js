import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { tokenActions } from '../../store';
import './Header.css';


const Header = () => {
    const dispatch = useDispatch();

    return (
        <div className="header">
            <div className="background"></div>
            <div className="card">
                <h2>QUẢN LÝ SÁCH</h2>
                <div className='header__page'>
                    <NavLink activeClassName="active" to='/admin/product'>Sản phẩm</NavLink>
                    <NavLink activeClassName="active" to='/admin/add-product'>Thêm sản phẩm</NavLink>
                    <NavLink to='/' onClick={()=>{
                        localStorage.removeItem('token');
                        dispatch(tokenActions.tokenHandle(null))
                        }}>Đăng xuất</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;