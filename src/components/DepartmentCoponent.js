import React from 'react'

export default function DepartmentCoponent(props) {
    const dep = props.departments.map((dep)=>{
        return (
            <div className="card rounded col-sm-12 col-md-6 col-lg-3 m-3">
                <div className="card-body">
                    <h1 className='card-title '>{dep.name}</h1>
                    <p className='card-text p-3'>Số Lượng Nhân viên: {dep.numberOfStaff} </p>
                </div>
            </div>
            
        )
    })
    return (
        <div className='container-fluid'>
            <div className= 'row'>
                {dep}
            </div>
        </div>
    )
}
