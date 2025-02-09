import { Component } from "react";
import {ImSearch} from 'react-icons/im';
import css from "./Filter.module.css";
import PropTypes from "prop-types";

export class Filter extends Component{

    render(){
        const {filter, onChange} = this.props;
        return  <label className={css["filter-label"]}>
                    <input className={css["filter-input"]} type="text" id="filter" name="filter" value={filter} onChange={(e)=>onChange(e)}/>
                    <ImSearch className={css.icon}/>
                </label> ;
    }
}

Filter.propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func,
}