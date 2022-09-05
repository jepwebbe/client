import { useState } from 'react'

export const ColorMe = () => {
    const [colorme, setColorMe] = useState({
        background: "lightblue",
        color: "black"
    })
    const handleColorChange = (evt) => {
        const value = evt.target.value;
        setColorMe({
            ...colorme,
            [evt.target.name]: value,
        })
    }
    return (
        <div style={{ backgroundColor: colorme.background, color: colorme.color, padding: "10px" }}>
            <h1>Colorizing using useState</h1>
            <section style={{ display: "flex" }}>
                <fieldset>
                    <legend>Pick a color</legend>
                    <RadioButton name="color" color="purple" handleColorChange={handleColorChange} />
                    <RadioButton name="color" color="pink" handleColorChange={handleColorChange} />
                    <RadioButton name="color" color="green" handleColorChange={handleColorChange} />
                    <RadioButton name="color" color="blue" handleColorChange={handleColorChange} />
                </fieldset>
                <fieldset>
                <legend>Pick a color</legend>
                    <RadioButton name="background" color="beige" handleColorChange={handleColorChange} />
                    <RadioButton name="background" color="hotpink" handleColorChange={handleColorChange} />
                    <RadioButton name="background" color="yellow" handleColorChange={handleColorChange} />
                    <RadioButton name="background" color="cyan" handleColorChange={handleColorChange} />
                </fieldset>
            </section>
        </div>
    )
}

const RadioButton = (props) => {
    const { color, name, handleColorChange } = props;
    return (
        <label htmlFor={color} style={{ backgroundColor: color, padding:"6px"}}>
            <input type="radio" value={color} id={color} name={name} onChange={(e) => handleColorChange(e)} />
        </label>
    )
}