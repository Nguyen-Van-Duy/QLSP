import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { tokenActions } from '../../store';
import './Header.css';


const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    

    return (
        <div className="header">
            <div className="card">
                <h3>Quản lý sách</h3>
                <div>
                    <button onClick={()=>history.push('/admin/product')}>Sản phẩm</button>
                    <button onClick={()=>history.push('/admin/add-product')}>Thêm sản phẩm</button>
                    <button onClick={()=>{
                        history.replace('/')
                        localStorage.removeItem('token');
                        dispatch(tokenActions.tokenHandle(''))
                        }}>Đăng xuất</button>
                </div>
            </div>
        </div>
    );
};

export default Header;