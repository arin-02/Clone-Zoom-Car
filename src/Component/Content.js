import React from 'react'
import hector from './hectorsuv.jpeg'
import citysedan from './citysedan.jpeg'
import xuv700suv from './xuv700suv.jpeg'
import fortunersuv from './fortunersuv.jpeg'
import balenohatch from './balenohatch.jpg'
import altohatch from './altohatch.jpg'
import amazesedan from './amazesedan.jpeg'
import aurasedan from './aurasedan.jpg'

function Content(props) {
    return (
        // id,image,nameofcar,fueltype,modetype,kmdriven,price
        <>
            {/* citysedan */}
            <div className=" card mb-3 " >

                <div className="row g-0 ">
                    <div className="col-md-4">
                        <img src={citysedan} className="img-fluid rounded-start" alt="..." />

                    </div>
                    <div className="col-md-8 d-flex ">
                        <div className="card-body ">
                            <h5 className="card-title"><p className='fs-1'>HONDA CITY</p></h5>
                            <p className="card-text"><small className="text-muted">
                                <li>Diesel</li>
                            </small></p>
                            <p className="card-text"><small className="text-muted cartype">
                                <li>Sedan</li>
                            </small></p>
                            <hr />
                            <p className="card-text">
                                <li>41000km driven</li>
                                <li>Available</li></p>

                        </div>
                        <div className="bbttnn p-2 ">
                            <div className="price ">
                                <p>&#8377;1250/-</p>
                            </div>
                            <button type="button" className="btn btn-light border-2 border-success">BOOK NOW</button>
                        </div>
                    </div>
                </div>


            </div>


            {/* hectorsuv */}
            <div className=" card mb-3 " >

                <div className="row g-0 ">
                    <div className="col-md-4">
                        <img src={hector} className="img-fluid rounded-start" alt="..." />

                    </div>
                    <div className="col-md-8 d-flex ">
                        <div className="card-body ">
                            <h5 className="card-title"><p className='fs-1'> MG Hector</p></h5>
                            <p className="card-text"><small className="text-muted">
                                <li>Diesel</li>
                            </small></p>
                            <p className="card-text"><small className="text-muted cartype">
                                <li>SUV</li>
                            </small></p>
                            <hr />
                            <p className="card-text">
                                <li>32000km driven</li>
                                <li>Available</li></p>

                        </div>
                        <div className="bbttnn p-2 ">
                            <div className="price ">
                                <p>&#8377;1250/-</p>
                            </div>
                            <button type="button" className="btn btn-light border-2 border-success">BOOK NOW</button>
                        </div>
                    </div>
                </div>


            </div>
            {/* xuv700suv */}
            <div className=" card mb-3 " >

                <div className="row g-0 ">
                    <div className="col-md-4">
                        <img src={xuv700suv} className="img-fluid rounded-start" alt="..." />

                    </div>
                    <div className="col-md-8 d-flex ">
                        <div className="card-body ">
                            <h5 className="card-title"><p className='fs-1'>XUV 700</p></h5>
                            <p className="card-text"><small className="text-muted">
                                <li>Diesel</li>
                            </small></p>
                            <p className="card-text"><small className="text-muted cartype">
                                <li>SUV</li>
                            </small></p>
                            <hr />
                            <p className="card-text">
                                <li>27000km driven</li>
                                <li>Available</li></p>

                        </div>
                        <div className="bbttnn p-2 ">
                            <div className="price ">
                                <p>&#8377;1250/-</p>
                            </div>
                            <button type="button" className="btn btn-light border-2 border-success">BOOK NOW</button>
                        </div>
                    </div>
                </div>


            </div>


            {/* amazesedan */}
            <div className=" card mb-3 " >

                <div className="row g-0 ">
                    <div className="col-md-4">
                        <img src={amazesedan} className="img-fluid rounded-start" alt="..." />

                    </div>
                    <div className="col-md-8 d-flex ">
                        <div className="card-body ">
                            <h5 className="card-title"><p className='fs-1'> AMAZE</p></h5>
                            <p className="card-text"><small className="text-muted">
                                <li>Diesel</li>
                            </small></p>
                            <p className="card-text"><small className="text-muted cartype">
                                <li>Sedan</li>
                            </small></p>
                            <hr />
                            <p className="card-text">
                                <li>44000km driven</li>
                                <li>Available</li></p>

                        </div>
                        <div className="bbttnn p-2 ">
                            <div className="price ">
                                <p>&#8377;1250/-</p>
                            </div>
                            <button type="button" className="btn btn-light border-2 border-success">BOOK NOW</button>
                        </div>
                    </div>
                </div>


            </div>

            {/* altohatch */}
            <div className=" card mb-3 " >

                <div className="row g-0 ">
                    <div className="col-md-4">
                        <img src={altohatch} className="img-fluid rounded-start" alt="..." />

                    </div>
                    <div className="col-md-8 d-flex ">
                        <div className="card-body ">
                            <h5 className="card-title"><p className='fs-1'> MG Hector</p></h5>
                            <p className="card-text"><small className="text-muted">
                                <li>Petrol</li>
                            </small></p>
                            <p className="card-text"><small className="text-muted cartype">
                                <li>Hatchback</li>
                            </small></p>
                            <hr />
                            <p className="card-text">
                                <li>59000km driven</li>
                                <li>Available</li></p>

                        </div>
                        <div className="bbttnn p-2 ">
                            <div className="price ">
                                <p>&#8377;1250/-</p>
                            </div>
                            <button type="button" className="btn btn-light border-2 border-success">BOOK NOW</button>
                        </div>
                    </div>
                </div>


            </div>


            {/* fortunersuv */}
            <div className=" card mb-3 " >

                <div className="row g-0 ">
                    <div className="col-md-4">
                        <img src={fortunersuv} className="img-fluid rounded-start" alt="..." />

                    </div>
                    <div className="col-md-8 d-flex ">
                        <div className="card-body ">
                            <h5 className="card-title"><p className='fs-1'> FORTUNER</p></h5>
                            <p className="card-text"><small className="text-muted">
                                <li>Diesel</li>
                            </small></p>
                            <p className="card-text"><small className="text-muted cartype">
                                <li>SUV</li>
                            </small></p>
                            <hr />
                            <p className="card-text">
                                <li>27000km driven</li>
                                <li>Available</li></p>

                        </div>
                        <div className="bbttnn p-2 ">
                            <div className="price ">
                                <p>&#8377;1250/-</p>
                            </div>
                            <button type="button" className="btn btn-light border-2 border-success">BOOK NOW</button>
                        </div>
                    </div>
                </div>


            </div>
            {/* balenohatch */}

            <div className=" card mb-3 " >

                <div className="row g-0 ">
                    <div className="col-md-4">
                        <img src={balenohatch} className="img-fluid rounded-start" alt="..." />

                    </div>
                    <div className="col-md-8 d-flex ">
                        <div className="card-body ">
                            <h5 className="card-title"><p className='fs-1'> BALENO</p></h5>
                            <p className="card-text"><small className="text-muted">
                                <li>Petrol</li>
                            </small></p>
                            <p className="card-text"><small className="text-muted cartype">
                                <li>Hatchback</li>
                            </small></p>
                            <hr />
                            <p className="card-text">
                                <li>33000km driven</li>
                                <li>Available</li></p>

                        </div>
                        <div className="bbttnn p-2 ">
                            <div className="price ">
                                <p>&#8377;1250/-</p>
                            </div>
                            <button type="button" className="btn btn-light border-2 border-success">BOOK NOW</button>
                        </div>
                    </div>
                </div>

            </div>
            {/*aura  */}
            <div className=" card mb-3 " >

                <div className="row g-0 ">
                    <div className="col-md-4">
                        <img src={aurasedan} className="img-fluid rounded-start" alt="..." />

                    </div>
                    <div className="col-md-8 d-flex ">
                        <div className="card-body ">
                            <h5 className="card-title"><p className='fs-1'> AURA</p></h5>
                            <p className="card-text"><small className="text-muted">
                                <li>Petrol</li>
                            </small></p>
                            <p className="card-text "><small className="text-muted cartype">
                                <li>Sedan</li>
                            </small></p>
                            <hr />
                            <p className="card-text">
                                <li>37000km driven</li>
                                <li>Available</li></p>

                        </div>
                        <div className="bbttnn p-2 ">
                            <div className="price ">
                                <p>&#8377;1250/-</p>
                            </div>
                            <button type="button" className="btn btn-light border-2 border-success">BOOK NOW</button>
                        </div>
                    </div>
                </div>

            </div>
            {/*  */}
            {/*  */}
        </>
    )
}

export default Content
