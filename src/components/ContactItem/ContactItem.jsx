import { Component } from "react";
import { IoIosClose } from "react-icons/io";
import css from './ContactItem.module.css';
import PropTypes from "prop-types";

export class ContactItem extends Component{

    onClickHandle = ({currentTarget}) => {
        this.props.onDelContact(currentTarget.id);
    }

    render(){
            const {id, name, number} = this.props;

            return  <li className={css["contact-li"]}>

                        <div className={css["contact-div"]}>

                            <p className={css["contact-name"]}>{name}</p>
                            <p className={css["contact-number"]}>{number}</p>
                        </div>

                        <button className={css["contact-del-btn"]} id={id} type="button" onClick={this.onClickHandle}>
                            <IoIosClose className={css["contact-del-icon"]}/> 
                        </button>

                    </li>
    }
}

ContactItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    onDelContact: PropTypes.func,
}