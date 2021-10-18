import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import './DetailProduct.css';
import { deleteBooksToAPI } from '../../API';

const DetailProduct = () => {
    const listProduct = useSelector(state=>state.token.listProduct);
    const idParams = useParams();
    const dataProduct = listProduct.filter(product=>(product.id.toString() === idParams.productId.toString()))[0];
    const token = useSelector(state=>state.token.token);
    const history = useHistory();
    return (
        <div className="card">
            <div className="row">
                <div className="col l-3 product-detail">
                    <img src={dataProduct.img} alt='' />
                </div>
                <div className="col l-7 product-detail">
                    <div className="product-detail__content">
                        <ul>
                        <h3>Chi tiết sản phẩm</h3>
                            <li><span>tên sản phẩm:</span>{dataProduct.title}</li>
                            <li><span>Tác giả:</span>{dataProduct.author}</li>
                            <li><span>Thể loại:</span>{dataProduct.type}</li>
                            <li><span>Nhà xuất bản:</span>{dataProduct.producer}</li>
                            <li><span>Tập:</span>{dataProduct.episodes}</li>
                            <li><span>giá:</span>{dataProduct.price} VNĐ</li>
                            <li><span>Mô tả:</span>{dataProduct.description}</li>
                            <li>
                                <Link to={`/admin/update/${dataProduct.id}`}>
                                <button className='button-fix'>Sửa</button>
                                </Link>
                                <button className='button-delete' onClick={()=> {if(window.confirm("Bạn chắc muốn xóa sản phẩm này chứ!")){
                                    deleteBooksToAPI(token, dataProduct.id);
                                    history.replace('/admin/product');
                                    }}}>Xóa</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailProduct;