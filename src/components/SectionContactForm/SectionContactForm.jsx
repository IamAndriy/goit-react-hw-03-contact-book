import { Component } from "react";
import css from "./SectionContactForm.module.css";

const initialState={
    name: "",
    number: ""
}

export class SectionContactForm extends Component{

    state ={ 
        ...initialState
    }

    reset = () => { 
        this.setState({...initialState});
    }

    onSubmitHandle = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state);
        this.reset();        
    }

    onChangeFormInput = ({target}) => { 
        this.setState({[target.name]: target.value});
    }

    render(){
        const {name, number} = this.state;
        const {onSubmitHandle, onChangeFormInput} = this;

        return  <section className={css.section}>
                    <h2 className={css["visually-hidden"]}>Form for adding new contacts</h2>
                    <form className={css.form} onSubmit={onSubmitHandle} >

                        <label className={css.label}>Name
                            <input  className={css.name}
                                    id="name" 
                                    type="text" 
                                    name="name" 
                                    value={name} 
                                    required 
                                    autoComplete="off" 
                                    placeholder="contact name & sername"
                                    pattern="^[a-zA-Z]{2,50}$"
                                    onChange={onChangeFormInput}
                            />
                        </label>

                        <label className={css.label}>Phone
                            <input  className={css.number}
                                    id="number"
                                    type="tel"
                                    name="number"
                                    value={number}
                                    required
                                    autoComplete="off"
                                    placeholder="xxx-xxx-xx-xx"
                                    pattern="^([0-9][ ]*){8,20}$"
                                    onChange={onChangeFormInput}
                            />
                        </label>

                        <button className={css.btn} type="submit">Add contact</button>

                    </form>
                </section>
                
    }
}