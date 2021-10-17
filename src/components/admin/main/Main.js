import React, {useEffect} from 'react';
import './Main.css';
import {Link} from 'react-router-dom';
import { getPostFromAPI } from '../../API'


const listProduct = [
    {
        id: 1,
        name: 'Duy'
    },
    {
        id: 2,
        name: 'duy2'
    },
    {
        id: 3,
        name: 'duy3'
    },
    {
        id: 4,
        name: 'duy4'
    },
    {
        id: 5,
        name: 'duy5'
    },
    {
        id: 6,
        name: 'duy6'
    },
]

const Main = () => {

    useEffect(() => {
        async function getPostFromAPIF() {
            const res = await getPostFromAPI("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InBob25nMTIzIiwibmFtZSI6IlBob25nIFBoYW0iLCJlbWFpbCI6InBob25nQGdtYWlsLmNvbSIsImlhdCI6MTYzNDQ2MjE3MCwiZXhwIjoxNjM0NDgzNzcwfQ.nj6fyFHUtoKEoqwW2WV5lqz9bfRbuwCQ14w6JXNVSkw")
            console.log(res.data)
        }
        getPostFromAPIF();
    }, []);

    return (
            <div className="card">
                <div className="row">
                    {listProduct.map((product) => 
                    <div className="col l-2-4" key={product.id}>
                        <div className="product-item">
                        <Link to={`/admin/product/${product.id}`}>
                            <img alt='sách' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhVUSk-b9CbLlVuFRzMwPuWApKY7DW7cQmVA&usqp=CAU" />
                            <div className="product-description">
                                <h4>{product.name}</h4>
                                <span>tác giả</span>
                            </div>
                        </Link>
                    </div>
                    </div>)}
                    
                </div>
            </div>
    );
};

export default Main;