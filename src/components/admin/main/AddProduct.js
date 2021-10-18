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

    const submitHandle = async (e) => {
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
        let status = await postBooksToAPI(token, data);
         if (status.statusText === "OK"){
             alert('Thêm sản phẩm thành công!');
         } else {
             alert('Thêm sản phẩm thất bại');
         }
    }

    return (
        <div className="card" onSubmit={submitHandle}>
            <div className="main-update">

                <form className='update-product'>
                    <ul>
                        <h2>Thêm sản phẩm mới</h2>
                        <li>
                            <span>Tên sản phẩm:</span>
                            <input ref={title} type="text" placeholder='Nhập tên sản phẩm ' />
                        </li>
                        <li>
                            <span>Ảnh sản phẩm:</span>
                            <input ref={img} type="text" placeholder='Nhập url ảnh sản phẩm ' />
                        </li>
                        <li>
                            <span>Tác giả:</span>
                            <input ref={author} type="text" placeholder='Nhập tác giả ' />
                        </li>
                        <li>
                            <span>Thể loại:</span>
                            <input ref={type} type="text" placeholder='Nhập thể loại ' />
                        </li>
                        <li>
                            <span>Nhà xuất bản:</span>
                            <input ref={producer} type="text" placeholder='Nhập nhà xuất bản '  />
                        </li>
                        <li>
                            <span>Tập:</span>
                            <input ref={episodes} type="text" placeholder='Nhập số tập ' />
                        </li>
                        <li>
                            <span>Giá:</span>
                            <input ref={price} type="text" placeholder='Nhập giá sản phẩm ' />
                        </li>
                        <li>
                            <span>Mô tả:</span>
                            <textarea ref={description} type="text" placeholder='Nhập mô tả sản phẩm ' />
                        </li>
                        <button className='btn-add' type="submit">Thêm sản phẩm</button>
                    </ul>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;