import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import './DetailProduct.css';

const DetailProduct = () => {
    const listProduct = useSelector(state=>state.token.listProduct);
    console.log(listProduct);
    const idParams = useParams();
    const dataProduct = listProduct.filter(product=>(product.id.toString() === idParams.productId.toString()))[0];
    console.log(dataProduct);
    console.log(idParams)
    return (
        <div className="card">
            <h2>{idParams.productId}</h2>
            <div className="row">
                <div className="col l-3 product-detail">
                    <img src={dataProduct.img} alt='' />
                </div>
                <div className="col l-7 product-detail">
                    <div className="product-detail__content">
                        <ul>
                            <li><span>tên sản phẩm:</span>{dataProduct.title}</li>
                            <li><span>Tác giả:</span>{dataProduct.author}</li>
                            <li><span>Thể loại:</span>{dataProduct.type}</li>
                            <li><span>Nhà xuất bản:</span>{dataProduct.producer}</li>
                            <li><span>Tập:</span>{dataProduct.episodes}</li>
                            <li><span>giá:</span>{dataProduct.price} VNĐ</li>
                            <li><span>Mô tả:</span>{dataProduct.description}</li>
                            <li>
                                <Link to={`/admin/update/${dataProduct.id}`}>
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