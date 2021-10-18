import React, {useRef} from 'react';
import { useSelector } from 'react-redux';
import { postBooksToAPI } from '../../API';

const AddProduct = () => {
    const token = useSelector(state=>state.token.token);
    const title = useRef();
    const author = useRef();
    const type = useRef();
    const episodes = useRef();
    const price = useRef();
    const description = useRef();
    const producer = useRef();
    const img = useRef();

    const submitHandle = (e) => {
        e.preventDefault();
        let data = {
            "title": title.current.value,
            "img": img.current.value,
            "author": author.current.value,
            "type": type.current.value,
            "producer": producer.current.value,
            "price": price.current.value,
            "episodes": episodes.current.value,
            "description": description.current.value
        }
        let status = postBooksToAPI(token, data);
         if (status.statusText == "OK"){
             console.log("success");
             alert('Them thanh cong!');
         } else {
             alert('That bai');
         }
    }


    return (
        <div className="card" onSubmit={submitHandle}>
            <form className='update-product'>
                <ul>
                    <h2>Thêm sản phẩm mới</h2>
                    <li>
                        <span>Tên sản phẩm:</span>
                        <input ref={title} type="text" />
                    </li>
                    <li>
                        <span>Ảnh sản phẩm:</span>
                        <input ref={img} type="text" />
                    </li>
                    <li>
                        <span>Tác giả:</span>
                        <input ref={author} type="text" />
                    </li>
                    <li>
                        <span>Thể loại:</span>
                        <input ref={type} type="text" />
                    </li>
                    <li>
                        <span>Nhà xuất bản:</span>
                        <input ref={producer} type="text"  />
                    </li>
                    <li>
                        <span>Tập:</span>
                        <input ref={episodes} type="text" />
                    </li>
                    <li>
                        <span>Giá:</span>
                        <input ref={price} type="text" />
                    </li>
                    <li>
                        <span>Mô tả:</span>
                        <textarea ref={description} type="text" />
                    </li>
                    <button type="submit">Thêm sản phẩm</button>
                </ul>
            </form>
        </div>
    );
};

export default AddProduct;