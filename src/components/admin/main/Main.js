import React, {useEffect, useState} from 'react';
import './Main.css';
import {Link} from 'react-router-dom';
import { getPostFromAPI } from '../../API';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { tokenActions } from '../../../store';

const Main = () => {
    const [listProduct, setListProduct] = useState([]);
    const token = useSelector(state=>state.token.token);
    const listData = useSelector(state=>state.token.listProduct);
    const dispatch = useDispatch();

    const searchHandle = e => {
        if(e.target.value.length > 1) {
            setListProduct(e.target.value.trim())
            setListProduct([]);
            listProduct.filter(data => {
                if(data.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').includes((e.target.value).toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D'))) {
                    setListProduct(onSearch=>[...onSearch, data])
                }
                return [];
            })
        } else {
            setListProduct(listData);
        }
    }

    useEffect(() => {
        async function getPostFromAPIF() {
            const res = await getPostFromAPI(token)
            setListProduct(res.data);
            dispatch(tokenActions.listproductHandle(res.data));
            // console.log(res.data);
        }
        getPostFromAPIF();
    }, [dispatch, token]);

    useEffect(() => {
        const isToken = localStorage.getItem('token');
        dispatch(tokenActions.tokenHandle(isToken));
    }, [dispatch]);

    return (
            <div className="card">
                <div className="product__list">
                    <div className="product__title">
                        <h2>Danh sách sản phẩm</h2>
                        <input onChange={searchHandle} type="text" placeholder=" Nhập tên sản phẩm"/>
                    </div>
                    <div className="row">
                        {listProduct.map((product) => 
                        <div className="col l-2-4 gutter" key={product.id}>
                            <div className="product-item">
                                <Link to={`/admin/product/${product.id}`}>
                                    <img alt='sách' src={product.img} />
                                    <div className="product-description">
                                        <span>{product.title}</span>
                                        <h4>{product.author}</h4>
                                    </div>
                                </Link>
                            </div>
                        </div>)}
                        
                    </div>
                </div>
            </div>
    );
};

export default Main;