import React from 'react';

const AddProduct = () => {
    return (
        <div className="card">
            
            <form className='update-product'>
                <h2>Thêm sản phẩm mới</h2>
                <ul>
                    <li>
                        <span>Tên sản phẩm:</span>
                        <input type="text" />
                    </li>
                    <li>
                        <span>Tác giả:</span>
                        <input type="text" />
                    </li>
                    <li>
                        <span>Thể loại:</span>
                        <input type="text" />
                    </li>
                    <li>
                        <span>Nhà xuất bản:</span>
                        <input type="text" />
                    </li>
                    <li>
                        <span>Tập:</span>
                        <input type="text" />
                    </li>
                    <li>
                        <span>Giá:</span>
                        <input type="text" />
                    </li>
                    <li>
                        <span>Mô tả:</span>
                        <input type="text" />
                    </li>
                    <button type="submit">Sửa</button>
                </ul>
            </form>
        </div>
    );
};

export default AddProduct;