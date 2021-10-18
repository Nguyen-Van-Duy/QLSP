import React, { useRef } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { putBooksToAPI } from '../../API';
import './UpdateProduct.css';

const UpdateProduct = () => {
    const token = useSelector(state=>state.token.token);
    const listProduct = useSelector(state=>state.token.listProduct);
    const idParams = useParams();
    const dataProduct = listProduct.filter(product=>(product.id.toString() === idParams.updateId.toString()))[0];
    const title = useRef();
    const author = useRef();
    const type = useRef();
    const episodes = useRef();
    const price = useRef();
    const description = useRef();
    const producer = useRef();
    const img = useRef();

    const submitHandle = async e => {
        e.preventDefault();
        
        const result = await putBooksToAPI(token, dataProduct.id, {
            "title": title.current.value,
            "img": img.current.value,
            "author": author.current.value,
            "type": type.current.value,
            "producer": producer.current.value,
            "price": price.current.value,
            "episodes": episodes.current.value,
            "description": description.current.value,
        })

        if(result.status === 204) {
            alert('Sửa thành công!')
        } else {
            alert('Thất bại!')
        }
    }
    return (
        <div className="card">
            <form className='update-product' onSubmit={submitHandle}>
                <ul>
                    <h2>Thay đổi thông tin sản phẩm {idParams.updateId}</h2>
                    <li>
                        <span>Tên sản phẩm:</span>
                        <input ref={title} type="text" defaultValue={dataProduct.title} />
                    </li>
                    <li>
                        <span>Ảnh sản phẩm:</span>
                        <input ref={img} type="text" defaultValue={dataProduct.img} />
                    </li>
                    <li>
                        <span>Tác giả:</span>
                        <input ref={author} type="text" defaultValue={dataProduct.author} />
                    </li>
                    <li>
                        <span>Thể loại:</span>
                        <input ref={type} type="text" defaultValue={dataProduct.type} />
                    </li>
                    <li>
                        <span>Nhà xuất bản:</span>
                        <input ref={producer} type="text"  defaultValue={dataProduct.producer} />
                    </li>
                    <li>
                        <span>Tập:</span>
                        <input ref={episodes} type="text" defaultValue={dataProduct.episodes} />
                    </li>
                    <li>
                        <span>Giá:</span>
                        <input ref={price} type="text" defaultValue={dataProduct.price} />
                    </li>
                    <li>
                        <span>Mô tả:</span>
                        <textarea ref={description} type="text" defaultValue={dataProduct.description} />
                    </li>
                    <button type="submit">Sửa</button>
                </ul>
            </form>
        </div>
    );
};

export default UpdateProduct;