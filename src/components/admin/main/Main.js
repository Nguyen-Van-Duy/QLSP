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
    const dispatch = useDispatch();

    useEffect(() => {
        async function getPostFromAPIF() {
            const res = await getPostFromAPI(token)
            setListProduct(res.data);
            dispatch(tokenActions.listproductHandle(res.data));
            // console.log(res.data);
        }
        getPostFromAPIF();
    }, [dispatch, token]);

    return (
            <div className="card">
                <div className="row">
                    {listProduct.map((product) => 
                    <div className="col l-2-4" key={product.id}>
                        <div className="product-item">
                        <Link to={`/admin/product/${product.id}`}>
                            <img alt='sách' src={product.img} />
                            <div className="product-description">
                                <span>{product.author}</span>
                            </div>
                        </Link>
                    </div>
                    </div>)}
                    
                </div>
            </div>
    );
};

export default Main;