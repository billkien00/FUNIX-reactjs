import React, { Component } from 'react'
import StaffList from './StaffList'
import { STAFFS } from '../shared/staffs'
import NavbarComponent from './NavbarComponent'

export default class MainComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            staff : STAFFS
        }
    }
    
    render() {
        return (
            <div>
                <NavbarComponent/>
                <StaffList staffs={this.state.staff} />
            </div>
        )
    }
}
