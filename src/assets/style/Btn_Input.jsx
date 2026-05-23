const Btn_Input = (props) => {
    const { dataNew } = props
    dataNew("tttoduc")
    return (
        <div className="btn_input">
            <input type="text" placeholder="điền vào đây" />
            <button>Add</button>
        </div>
    )
}
export default Btn_Input
