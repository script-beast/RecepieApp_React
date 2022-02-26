import React from 'react'
import './SampleList.css'
import SideBar from './SideBar';
import { Link } from 'react-router-dom';

export default function SampleList(props) {

    const inphandleChange = (event) => {
        props.setInpurecepie(event.target.value);
    }

    const addnuClick = (e) => {
        props.setdata((prev) => {
            return {
                ...prev,
                [e.target.id]: props.data[e.target.id] + 1
            }
        });
    }
    const subnuClick = (e) => {
        props.setdata((prev) => {
            return {
                ...prev,
                [e.target.id]: props.data[e.target.id] - 1
            }
        });
    }
    const resnuClick = (e) => {
        props.setdata((prev) => {
            return {
                ...prev,
                [e.target.id]: 0
            }
        });
    }

    const listing = () => (
        Object.keys(props.data).map((key, i) => (props.data[key] ?
            <div key={i} className="d-flex flex-row justify-content-between p-2 bg-white mt-4 px-3 rounded">
                <div className="d-flex flex-column align-items-center product-details px-2">
                    <span className="font-weight-bold incrsixw">{key}</span>
                </div>
                <div className="d-flex align-items-center">
                    <div className="d-flex flex-row align-items-center qty mx-4">
                        <i id={key} className=" btn fa fa-minus text-danger incrsixw" onClick={subnuClick}></i>
                        <h5 className=" mt-1 mx-3 incrsixw">{props.data[key]}</h5>
                        <i id={key} className="fa fa-plus text-success incrsixw" onClick={addnuClick}></i>
                    </div>
                    <i id={key} onClick={resnuClick} className="fa fa-trash mb-1 text-danger incrsixw"></i>
                </div>
            </div> : null
        ))
    )


    return (<>
        <SideBar data={props.data} setdata={props.setdata} title={props.title} />
        <section className="about" id="about">
            <h1 className="heading"> <span>Recepie</span> book </h1>
            <div className="titcol-3 input-effect">
                <input className="effect-20" type="text"  value={props.inpurecepie} onChange={inphandleChange}  />
                <label style={{ display: props.inpurecepie && "none" }}>Recepie Name</label>
                <span className="focus-border">
                    <i></i>
                </span>
            </div>
            <div className="container mx-2">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-8">
                        <div className="p-2">
                            <h2 className='text-white'>List of {props.title}</h2>
                        </div>
                        {listing()}
                        <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
                            <Link to={props.title === "Ingredients" ? '/step2' : '/final'} className="btn btn-warning btn-block btn-lg ml-2 pay-button" type="button">Add {props.title} to the Recepie</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}
