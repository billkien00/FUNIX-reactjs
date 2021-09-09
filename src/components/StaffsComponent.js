import React from 'react'


export default function StaffsComponent(props) {
    const staff = props.staffs.map((staff)=>{
        return (
            <div className='card rounded col-sm-6 col-md-4 col-lg-2'>
                <img className='card-img-top' src={staff.image} alt={staff.name} />
                <div class="card-body">
                    <p className='card-text text-center'> {staff.name}</p>
                </div>
            </div>
        )
    })
    return (
        <div className='container-fluid'>
            <div className= 'row'>
                {staff}
            </div>
        </div>
    )
}






