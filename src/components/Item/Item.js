import React from 'react'
import { Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


//css
import '../Item/Item.css'


const Item = ({ data }) => (

    <Link className='linkstyle' to={`/detail/${data.id}`}>
        <div className="row row-cols-sm-1 ">
            <div className="col d-flex justify-content-center mb-4">
                <div className="card shadow mb-1 bg-dark rounded" >
                    <h5 className="card-title pt-2 text-center text-white">
                        {data.title}
                    </h5>
                    <Image src={data.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text text-white-50 description">
                            {data.description}
                        </p>
                        <h5 className="text-white">
                            <span className="precio"> Precio: $ {data.price}</span>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </Link >

);

export default Item