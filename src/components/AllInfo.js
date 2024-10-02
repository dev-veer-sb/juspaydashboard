import React from 'react'
import CardComp from '../common/CardComp'

function AllInfo(props) {
let data=[
    {
        Name:'Coustomers',
        Number:3534
    },
    {
        Name:'Orders',
        Number:3524
    },
    {
        Name:'Revenue',
        Number:334
    },
    {
        Name:'Growth',
        Number:534
    }
]

  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(2, 1fr)',gap:'15px',paddingRight:'15px', fontWeight:'bold' ,gridAutoRows: 'minmax(100px, auto)',margin:0}}>
        {data.map((value)=>(
             <div style={{width:'200px',height:'100px'}}>
            <CardComp theame={props.theame}>
               
            <div style={{fontSize:'20px'}}>
                {value.Name}
            </div>
            <div style={{fontSize:'34px'}}>
                ${value.Number}
            </div>
           
        </CardComp>
        </div>))}
    </div>
  )
}

export default AllInfo