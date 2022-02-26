import React from 'react'
import './FinalPage.css'

export default function FinalPage(props) {


    const ingrelisting = (obj) => (
        Object.keys(obj).map((key, i) => ( obj[key] ?
            <div key={i} className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-2 rounded">
                <div className="d-flex flex-column align-items-center product-details px-2"><span
                    className="font-weight-bold incrsixw">{key}</span>
                </div>
                <div className="d-flex flex-row align-items-center qty">
                    <h5 className=" mt-1 mx-3 incrsixw">{obj[key]}</h5>
                </div>
            </div> : null
        ))
    )
    return (
        <div>
            <h1 className="finheading"> <span>Recepie</span> book </h1>
            <div className="container mt-5 mb-5">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-8">
                        <div className="p-2">
                            <h1 className='text-white'>{props.inpurecepie}</h1>
                        </div></div></div>
                <div className="d-flex justify-content-center row">
                    <img className='img-thumbnail rounded mx-auto d-block' src="https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg?sfvrsn=a31d8d32_0" alt="" />
                </div>
                <div className="d-flex justify-content-center mt-3 row">
                    <div className="col-md-8">
                        <div className="p-1">
                            <h2 className='text-white'>Ingredients Used</h2>
                        </div>
                        {ingrelisting(props.Ingreobj)}
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-4 row">
                    <div className="col-md-8">
                        <div className="p-1">
                            <h2 className='text-white'>Spice used</h2>
                        </div>
                        {ingrelisting(props.Spireobj)}
                    </div>
                </div>
            </div>
        </div>
    )
}
