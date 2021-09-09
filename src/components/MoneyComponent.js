import React from 'react'

export default function MoneyComponent(props) {
    const staff = props.staffs.map((staff)=>{
        const salary = parseInt(staff.salaryScale)
        const money = parseInt(staff.salaryScale)*3000000+parseInt(staff.overTime)*200000
        return (
            <div className='card rounded col-sm-12 col-md-5 col-lg-3 m-2'>
                
                <div class="card-body">
                    <h4 class="card-title">{staff.name}</h4>
                    <p class="card-text">Mã nhân viên: {staff.id} </p>
                    <p class="card-text">Hệ số lương: {salary}</p>
                    <p class="card-text">Số giờ làm thêm: {staff.overTime} </p>
                    <p class="card-text bg-primary text-white p-2">Lương: {money} </p>
                </div>
                                
            </div>
        )
    }) 
    return (
        <div className='container-fluid'>
            <div className='row'>
                {staff}
            </div>
        </div>
    )
}
