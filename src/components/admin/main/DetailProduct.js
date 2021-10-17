import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './DetailProduct.css';

const DetailProduct = () => {

    const idParams = useParams();
    console.log(idParams)
    return (
        <div className="card">
            <h2>{idParams.productId}</h2>
            <div className="row">
                <div className="col l-3 product-detail">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhVUSk-b9CbLlVuFRzMwPuWApKY7DW7cQmVA&usqp=CAU' alt='' />
                </div>
                <div className="col l-7 product-detail">
                    <div className="product-detail__content">
                        <ul>
                            <li><span>tên sản phẩm:</span>ssssssssssssssss</li>
                            <li><span>Tác giả:</span>ssssssssssssssss</li>
                            <li><span>Thể loại:</span>ssssssssssssssss</li>
                            <li><span>Nhà xuất bản:</span>ssssssssssssssss</li>
                            <li><span>Tập:</span>{idParams.productId}</li>
                            <li><span>giá:</span>ssssssssssssssss</li>
                            <li><span>Mô tả:</span>ssssssssssssssss</li>
                            <li>
                                <Link to={`/admin/update/${idParams.productId}`}>
                                <button type="button">Sửa</button>
                                </Link>
                                <Link to="">
                                <button type="button">Xóa</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailProduct;