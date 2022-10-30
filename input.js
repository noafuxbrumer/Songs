function Input(props) {

    return <div>
       <label>{props.lbl}{props.valid?'לא תקין':'תקין'}</label>
       <input type={props.type} value={props.value} onChange={props.change}/>
    </div>
}

export default Input