import React, {useRef} from 'react';

const AddProduct = () => {
    const title = useRef();
    const author = useRef();
    const type = useRef();
    const episodes = useRef();
    const price = useRef();
    const description = useRef();
    const producer = useRef();
    return (
        <div className="card">
            <form className='update-product'>
                <ul>
                    <h2>Thêm sản phẩm mới</h2>
                    <li>
                        <span>Tên sản phẩm:</span>
                        <input ref={title} type="text" />
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
                    <button type="submit">Sửa</button>
                </ul>
            </form>
        </div>
    );
};

export default AddProduct;