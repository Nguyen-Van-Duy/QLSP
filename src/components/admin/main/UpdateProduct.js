import React from 'react';
import { useParams } from 'react-router';
import './UpdateProduct.css';

const UpdateProduct = () => {

    const idParams = useParams();
    console.log(idParams.updateId);
    return (
        <div className="card">
            <form className='update-product'>
                <h2>Thay đổi thông tin sản phẩm {idParams.updateId}</h2>
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

export default UpdateProduct;