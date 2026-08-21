import { useState } from "react"

const Btn_Input = (props) => {
    const [inputValue, setInputValue] = useState("")
    const { dataNew } = props
    // dataNew("tttoduc")

    const handdleCLick = () => {
        dataNew(inputValue.trim())
        setInputValue("")// sau khi clisck lamf moi du lieu
    }
    const handdleChange = (name) => {
        setInputValue(name.trim())

        // console.log("name", name)
    }
    return (
        <>
            <div className="btn_input">
                <input type="text" placeholder="điền vào đây"
                    onChange={(event) => { handdleChange(event.target.value) }}// lấy giá trị đang nhập
                    value={inputValue}
                />
                {inputValue.trim().length > 0 ?
                    <button
                        onClick={handdleCLick}
                    >Add</button>
                    :
                    <button
                      onClick={handdleCLick}
                        disabled
                    >Add</button>
                }
            </div>
            <div>
                my name is = {inputValue}
            </div>
        </>

    )
}
export default Btn_Input
