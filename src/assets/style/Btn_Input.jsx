import { useState } from "react"

const Btn_Input = (props) => {
    const [inputValue, setInputValue] = useState("To duc")
    const { dataNew } = props
    // dataNew("tttoduc")

    const handdleCLick = () => {
        dataNew(inputValue)
        console.log(inputValue)
        setInputValue("")// sau khi clisck lamf moi du lieu
    }
    const handdleChange = (name) => {
        setInputValue(name)

        console.log("name", name)
    }
    return (
        <>
            <div className="btn_input">
                <input type="text" placeholder="điền vào đây"
                    onChange={(event) => { handdleChange(event.target.value) }}// lấy giá trị đang nhập
                    value={inputValue}
                />
                <button
                    onClick={handdleCLick}
                >Add</button>
            </div>
            <div>
                my name is = {inputValue}
            </div>
        </>

    )
}
export default Btn_Input
