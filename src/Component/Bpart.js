import React,{useState,useEffect} from 'react'

import Menu from './menu';

function Bpart() {
    
    const [items, setItems] = useState(Menu);
    const totalitem=20;
    const [page, setPage] = useState(0);
    console.log("items",items)
   
    useEffect(() => {
        alert("WE CAN FILTER ON ONLY BASIS OF 'PRICE RANGE' and 'Car Types'");
    }, []);
    console.log("updated"+page);
    const filtercars=(type,e)=>{
        e.preventDefault();
        const filtered=Menu.filter((Menucategories)=>{
            return Menucategories.modetype===type;
        });
        setItems(filtered);
        console.log(filtered);
        

    }
    const sortbyprice=(from,to,e)=>{
        console.log("sortby price");
        e.preventDefault();
        const filterbyprice=Menu.filter((menuinside)=>{
            if(menuinside.price>=from &&menuinside.price<=to){
                return true;
            }
        })
        const titems=filterbyprice;
        setItems(filterbyprice);


    }
    

    const previouspaging=()=>{
        console.log("clicked previous");
        setPage(page-1);
        // console.log("previousvala = "+page);
        // let itemvisited=(page-2)*4;
        
        
        
        //     setItems(items.slice(itemvisited,itemvisited+4));

        
    }
    const nextpaging=()=>{
        console.log("clicked next");
        console.log("recent = "+page);
        
        
        setPage(page+1);
        
        
        // let itemvisited=page*4;
        
        
        
        //     setItems(items.slice(itemvisited,itemvisited+4));

        
        
    }
    
    
    return (
        <div className='d-flex main '>
        
            <div className=" left sort-container ">
                    <div className="list-heading ">Free kms</div>  
                <div className="filter-ctr  ">
                <div className="list-items p-2 d-flex justify-content-start  ">
                <div className="list active border-2 border-dark border-end p-3">
                    36
                </div>
                <div className="list border-end p-3 border-2 border-dark border-end">
                    66
                </div>
               
                
                    <div className="list p-3">
                        120
                    </div></div></div>
                    <div className="list-heading">Fuel Cost
                    </div> 
                    <div className="filter-ctr">
                    <div className="list-items p-2 d-flex justify-content-start  "><div className="list active p-3">
                        Not Included
                    </div></div></div> 
                    <div className="list-heading">Seats</div> 
                    <div className="filter-ctr">
                    <div className="list-items p-2 d-flex justify-content-start "><div className="list p-3  border-2 border-dark border-end">
                        5
                    </div>
                    <div className="list p-3">
                        7
                    </div></div></div>
{/*  */}

                    <div className="list-heading">PRICE RANGE:-</div> 
                    <div className="filter-ctr">
                    <div className="list-items p-2 d-flex justify-content-start ">
                    <a href=""><div className="list p-3  border-2 border-dark border-end" onClick={(e)=>{sortbyprice(500,1000,e)}}>
                    &#8377;500-1000
                    </div></a>
                    <a href=""><div className="list p-3  border-2 border-dark border-end" onClick={(e)=>{sortbyprice(1000,1500,e)}}>
                    &#8377;1000-1500
                    </div></a>
                    <a href=""><div className="list p-3" onClick={(e)=>{sortbyprice(1500,2000,e)}}>
                    &#8377;1500-2000
                    </div></a></div></div>
    {/*  */}

                    <div className="list-heading">Car Types</div> 
                    <div className="filter-ctr  ">
                    <div className="list-items p-2 d-flex justify-content-start ">
                        <a href="SUV" ><div id='suvcar' className="list  p-3 border-2 border-dark border-end"  onClick={(e)=>filtercars('SUV',e)}  >
                            SUV
                        </div></a>
                        <a href="hatchback" ><div id='hatchbackcar' className="list  p-3 border-2 border-dark border-end" onClick={(e)=>filtercars('hatchback',e)} >
                            hatchback
                        </div></a>
                        <a href="Sedan" ><div id='sedancar' className="list  p-3" onClick={(e)=>filtercars('Sedan',e)} >
                            Sedan
                        </div></a></div></div>
                        <div className="list-heading">Transmission</div>
                        <div className="filter-ctr">
                         <div className="list-items p-2 d-flex justify-content-start "><div className="list p-3 border-2 border-dark border-end ">
                            Manual
                        </div><div className="list p-3">
                                Automatic
                            </div></div></div>
                            <div className="list-heading">Delivery Type</div>
                            <div className="filter-ctr">
                             <div className="list-items p-2 d-flex justify-content-start "><div className="list p-3 border-2 border-dark border-end">
                                Home Delivery
                            </div><div className="list p-3">
                                    Airport
                                </div></div></div></div>


        <div className="right p-3">
                <div className="form-floating mx-auto pb-3">
                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option select>***SELECT CITY***</option>
                        <option value="1">GURUGRAM</option>
                        <option value="2">DELHI</option>
                        <option value="3">NOIDA</option>
                        <option value="3">MUMBAI</option>
                    </select>

                </div>
                <div className="rightdown">

{/*  */}
    {
        items.map((elem,index)=>{
            if(index>=page*4 && index<(page+1)*4){
                return <Card elem={elem} />
            }else return null;
        })
    }
{/* <Content /> */}

<button type="button" disabled={page===0} className="btn btn-dark mx-3" onClick={()=>previouspaging()}> &larr; PREVIOUS</button>

<div className="d-flex justify-content-end">
        <button type="button" disabled={page>=Math.floor((items.length)/4) } className="btn btn-dark mx-3 " onClick={()=>nextpaging()} >NEXT &rarr;</button>

</div>
{/*  */}
            </div>
                
            </div>


        </div>
    )
}

export default Bpart


const Card = ({elem})=> {
    return (
        <div className=" card mb-3 " >

                <div className="row g-0 ">
                    <div className="col-md-4">
                        <img key={elem.id} id='keyimage' src={elem.image} className="img-fluid rounded-start" alt="..." />

                    </div>
                    <div className="col-md-8 d-flex ">
                        <div className="card-body ">
                            <h5  className="card-title"><p className='fs-1' id='keynameofcar' key={elem.id}>{elem.nameofcar}</p></h5>
                            <p className="card-text"><small className="text-muted">
                                <li id='keyfueltype' key={elem.id}>{elem.fueltype}</li>
                            </small></p>
                            <p className="card-text"><small className="text-muted cartype">
                                <li id='keymodetype' key={elem.id}>{elem.modetype}</li>
                            </small></p>
                            <hr />
                            <p className="card-text">
                                <li id='keykmdriven' key={elem.id}>{elem.kmdriven}</li>
                                <li>Available</li></p>

                        </div>
                        <div className="bbttnn p-2 ">
                            <div className="price ">
                                <p key={elem.id} id='keyprice'>&#8377;{elem.price}/day</p>
                            </div>
                            <button type="button" className="btn btn-light border-2 border-success">BOOK NOW</button>
                        </div>
                    </div>
                </div>


            </div>
    )
}