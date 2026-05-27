import { useState } from "react"

const Btn_Input = (props) => {
    const [inputValue, setInputValue] = useState("To duc")
    const { dataNew } = props
    // dataNew("tttoduc")

    const handCLick = () => {
        dataNew(inputValue)
        console.log(inputValue)
        setInputValue("")// sau khi clisck lamf moi du lieu
    }
    const handChange = (name) => {
        setInputValue(name)
        // console.log("in ra", inputValue)
    }
    return (
        <>
            <div className="btn_input">
                <input type="text" placeholder="điền vào đây"
                    onChange={(event) => { handChange(event.target.value) }}// lấy giá trị đang nhập
                    value={inputValue}
                />
                <button
                    onClick={handCLick}
                >Add</button>
            </div>
            <div>
                my name is = {inputValue}
            </div>
        </>

    )
}
export default Btn_Input
