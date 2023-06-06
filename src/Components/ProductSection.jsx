import React from 'react'
import ProductCard from './ProductCard'
import { LuCake } from 'react-icons/lu'

export default function ProductSection(props) {
    return (
        <>

            <div className="container my-5">
                <h2 className='text-center my-5'>Our {props.sectionTitle} <LuCake size={50} color='blue' /></h2>
                <div className="row gap-5">
                    <ProductCard brandName="Bonanza" collectionName="Summer" CategoryName="Female" />
                    <ProductCard brandName="Sana Safinaz" collectionName="Winter" CategoryName="Female" />
                    <ProductCard brandName="MTJ" collectionName="Summer" CategoryName="Male" />
                    <ProductCard brandName="J." collectionName="Summer" CategoryName="Male" />





                </div>
            </div>
        </>
    )
}
