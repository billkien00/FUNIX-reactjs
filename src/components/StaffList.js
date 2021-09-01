import React, { Component } from 'react'
import Moment from 'react-moment';

export default class StaffList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            selected : false
        }
    }
    
    
    staffInfo(select){
       if(select){
           return (
               <div className='border col-sm-12 col-md-10 col-lg-6'>
                   <h1>Họ và tên:{select.name}</h1>
                   <p>Ngày sinh: <Moment format="DD/MM/YYYY">{select.doB}</Moment> </p> 
                   <p>Ngày vào công ty: <Moment format="DD/MM/YYYY">{select.startDate}</Moment></p>
                   <p>Phòng ban: {select.department.name}</p>
                   <p>Số ngày nghỉ còn lại: {select.annualLeave}</p>
                   <p>Số ngày đã làm thêm: {select.overTime}</p>

               </div>
           )
       }else{
           return <p>Bấm vào tên nhân viên để xem thông tin</p>
       }
    }

    render() {
        const staff = this.props.staffs.map((staff)=>{
            return (
               
                   
                <div className='border col-sm-12 col-md-5 col-lg-3 m-3 p-2' onClick={ ()=>{return this.state.selected?this.setState({selected : false}):this.setState({selected : staff});} }>
                    {staff.name}
                </div>
                
            )
        });
        return (
            <div className='container-fluid'>
                <div className= 'row'>
                {staff}
                </div>
                {this.staffInfo(this.state.selected)}
            </div>
        )
    }
}
