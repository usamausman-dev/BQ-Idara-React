import React from 'react'

export default function ProductCard(props) {
    return (
        <div className='col-md-3'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.brandName}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{props.collectionName}</h6>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia rerum numquam accusamus facilis omnis iste ipsam eius quod quaerat sequi officia, minima eligendi porro quae neque, ea deleniti excepturi dolorum!
                    </p>
                    <a href="#" className="card-link">
                        {props.CategoryName}
                    </a>
                </div>
            </div>
        </div>
    )
}
