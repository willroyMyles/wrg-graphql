import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Controller, Control } from 'react-hook-form'


 interface IProps{
    child : React.ReactElement,
    name:string,
    control: any,



}

export class FormControler extends PureComponent<IProps> {
  
    render() {
        return (
          <Controller 
            as={this.props.child}
            control={this.props.control}
            name={this.props.name}
            rules={{required: "Content required"}}
            defaultValue=""
          />
        )
    }
}

export default FormControler
