import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { BsEnvelope, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import PRODUCTPAGESLIDER from '../../components/PRODUCT_PAGE_SLIDER/PRODUCT_PAGE_SLIDER';
import { useProductContext } from '../../context/productContext';
import PriceFormat from '../../helper/PriceFormat';
import { useCartContext } from '../../context/CartContext';



const PRODUCTPAGE = () => {
    const [items, setItems] = useState(null)
    const [catProduct, setCatProduct] = useState(null)
    const [products, setProducts] = useState(null)
    const [minQty, setMinQty] = useState(1)
    const [descp, setDescp] = useState(true);
    const [loading, setLoading] = useState(true)

    const { id } = useParams();

    
    const { bestSellingProducts } = useProductContext();

    const { addToCart } = useCartContext();

    
    useEffect(() => {
        const getSelectedProduct = async () => {
            setLoading(true)
            const formData = new FormData();
            formData.append('id', id)
            await fetch('http://127.0.0.1:8000/api/getSelectedProduct', {
                method: "POST",
                body: formData
            })
            .then((res) => {
                if(res.ok){
                    return res.json()
                }else{
                    throw Error("Something went wrong")
                }
            })
            .then((data) => {
                setItems(data[0])
                setCatProduct(data[0].catagory_id)
            })
            .catch((error) => {
                console.log(error.message)
            })
        }
    
    
        const getCatagoryProduct = async () => {
            const formData = new FormData();
            formData.append('id',catProduct)
            await fetch('http://127.0.0.1:8000/api/getCatagoriesProducts', {
                method: "POST",
                body: formData
            })
            .then((res) => {
                if(res.ok){
                    return res.json()
                }else{
                    throw Error("Something went wrong")
                }
            })
            .then((data) => {
                setProducts(data)
            })
            .catch((error) => {
                console.log(error.message)
            })
            setLoading(false)
        }

        getSelectedProduct();
        getCatagoryProduct();
    }, [id, catProduct]);


    if(loading){
        return(
            <h1>Loading... </h1>
        )
    }


    const handleIncrement = () => {
        setMinQty(minQty+1)
    }
    const handleDecrement = () => {
        setMinQty(minQty-1)
    }


    const handleChangeDesc = () => {
        setDescp(true)
    }
    const handleChangeReviews = () => {
        setDescp(false)
    }

    const desc = [
        {
            description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, eveniet. Hic, ut dolor. Ad, veniam. Voluptatem quibusdam deleniti expedita nostrum sit laudantium repudiandae alias mollitia vitae officia. Aliquam, molestiae error.",
            reviews : 'Amet consectetur adipisicing elit. Quae, eveniet. Hic, ut dolor. Ad, veniam. Voluptatem quibusdam deleniti expedita nostrum sit laudantium repudiandae alias mollitia vitae officia. Aliquam, molestiae error.'
        }
    ]


    return (
        <div className="product-page">
            <div className="product-page-left">
                <div className="big-img">
                    {/* <img onLoad={getCatagoryProduct} src={items && items.image} alt="" /> */}
                    <img src={items && items.image} alt="" />
                </div>
                <div className="small-img">
                    <img src={items && items.image} alt="" />
                </div>
            </div>

            <div className="product-page-middle">
                <div className="product-middle-top">
                    <div className="product-rating product-middle-title">
                        <h4>{items && items.name}</h4>
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <span>( 0 reviews )</span>
                    </div>

                    <div className="seller-section">
                        <div className="seller-details">
                            <span>Sold By : </span>
                            <span>
                                <Link to="/">RONGDHONU</Link>
                            </span>
                        </div>
                        <div className="seller-details">
                            <button className='seller-button'>EMAIL SELLER / RFP</button>
                        </div>
                        <div className="seller-details">
                            <Link to="/">RONGDHONU</Link>
                        </div>
                    </div>

                    {
                        items.discount ?
                        <>
                            <div className="product-middle-price">
                                Today's Price : 
                                <span>
                                    <PriceFormat price={items.price-items.price*(items.discount.discount_percent/100)} />
                                </span> /per piece
                            </div>
                            
                            <div className="product-middle-price">
                                
                                Original Price : 
                                <span>
                                    <del>
                                        <PriceFormat price={items.price} />
                                    </del>
                                </span> /per piece
                            </div>
                        </> :
                        <div className="product-middle-price">
                            Price : 
                            <span>
                                <PriceFormat price={items.price} />
                            </span> /per piece
                        </div>
                    }


                    <div className="product-middle-qty">
                        Quantity :
                        <div className="qty-count">
                            <button disabled={minQty===1 ? true : false} className='count-btn' onClick={handleDecrement}>-</button>
                                {minQty}
                            <button className='count-btn' onClick={handleIncrement}>+</button>
                            <span className="product-available">({items && items.inventory!==null ? items.inventory.product_quantity : 0} piece available)</span>
                        </div>
                    </div>

                    <div className="product-middle-total">
                        Total Price : 
                        <span>
                            {
                                items.discount ?
                                <PriceFormat price={items && (items.price-items.price*(items.discount.discount_percent/100)) * minQty} /> : 
                                <PriceFormat price={items && items.price * minQty} />
                            }
                        </span>
                    </div>

                    <div className="product-middle-btns">
                        <button onClick={(e) => addToCart(e, minQty, items)}>Add to Cart</button>
                        <button>Buy Now</button>
                        <button>Chat Now</button>
                    </div>

                    <div className="product-others">
                        <div className="product-middle-other">
                            <div className="products-others-left">Price Update :</div>
                            <div className="products-others-right">Wholesale product price may vary. Please request for latest price before placing order.</div>
                        </div>
                        <div className="product-middle-other">
                            <div className="products-others-left">Delivery Charge :</div>
                            <div className="products-others-right">
                                Delivery charge will be based on location. We'll call you to confirm order and delivery charge.
                            </div>
                        </div>
                        <div className="product-middle-other">
                            <div className="products-others-left">Share :</div>
                            <div className="products-others-right">
                                <Link to="/" style={{background: "#0E76E6"}}><BsEnvelope /></Link>
                                <Link to="/" style={{background: "#0087BA"}}><BsTwitter /></Link>
                                <Link to="/" style={{background: "#2D4373"}}><FaFacebookF /></Link>
                                <Link to="/" style={{background: "#005983"}}><FaLinkedinIn /></Link>
                                <Link to="/" style={{background: "#1F7D1E"}}><BsWhatsapp /></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-middle-middle">
                    <div className="product-middle-middle-nav">
                        <span onClick={handleChangeDesc} className={descp ? 'active-middle' : ''}>Description</span>
                        <span onClick={handleChangeReviews} className={descp ? '' : 'active-middle'}>Reviews</span>
                    </div>
                    <div className="product-middle-middle-desc">
                        <div className="middle-desc-content">
                            <>
                                {
                                    descp ? <div dangerouslySetInnerHTML={{__html : items && items.description}} /> : <div>{desc[0].reviews}</div>        
                                }
                            </>
                        </div>
                    </div>
                </div>

                <div className="product-middle-bottom">
                    <PRODUCTPAGESLIDER items={products && products} />
                </div>
            </div>




            <div className="product-page-right">
                <div className="page-right-top">
                    <div className="page-right-top-title">
                        Seller Information
                    </div>
                    <div className="page-right-top-info">
                        <h6>Finix Hi Tech industry Ltd</h6>
                        <p>House-10, road-01, block-D, section -12, pallabi, mirpur, Dhaka</p>
                        <div className="page-right-top-info-reviews">
                            <div className="info-reviews-star">
                                <AiOutlineStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                            </div>
                            <div className="info-reviews-totals">
                                (0 customer reviews)
                            </div>
                        </div>
                    </div> <hr />
                    <div className="page-right-top-share-visit">
                        <div className="right-top-visit-store">
                            <Link to="/">VISIT STORE</Link>
                        </div>
                        <div className="right-top-visit-social">
                            <Link to="/"><BsEnvelope /></Link>
                            <Link to="/"><BsTwitter /></Link>
                            <Link to="/"><FaFacebookF /></Link>
                            <Link to="/"><FaLinkedinIn /></Link>
                            <Link to="/"><BsWhatsapp /></Link>
                        </div>
                    </div>
                </div>




                <div className="page-right-bottom">
                    <div className="page-right-bottom-title">Top Selling Products</div>
                    
                    {
                        bestSellingProducts.map((item) => {
                            return(
                                <Link to={'/product/product_id='+item.id} key={item.id} className="page-right-bottom-single-product">
                                    <div className="page-right-bottom-img">
                                        <img src={item.image} alt="" />
                                    </div>

                                    <div className="page-right-bottom-desc">
                                        <div className="desc-name">{item.name}</div>
                                        <div className="desc-star">
                                            <div className="info-reviews-star">
                                                <AiOutlineStar />
                                                <AiOutlineStar />
                                                <AiOutlineStar />
                                                <AiOutlineStar />
                                                <AiOutlineStar />
                                            </div>
                                        </div>
                                        <div className="desc-price">
                                            <PriceFormat price={item.price} />
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    );
}

export default PRODUCTPAGE;