import {useColorMeStore} from "./useColorMeStore"
export const ColorMeZustand = () => {
    const { colorme, setColorMe } = useColorMeStore((store) => ({
        colorme: store.colorme,
        setColorMe: store.setColorMe,
    }))
    return (
        <div style={{ backgroundColor: colorme.background, color: colorme.color, padding: "10px" }}>
            <h1>Colorizing using zuStand</h1>
            <section style={{ display: "flex" }}>
                <fieldset>
                    <legend>Pick a color</legend>
                    <RadioButton name="color" color="purple" setColorMe={setColorMe} />
                    <RadioButton name="color" color="pink" setColorMe={setColorMe} />
                    <RadioButton name="color" color="green" setColorMe={setColorMe} />
                    <RadioButton name="color" color="blue" setColorMe={setColorMe} />
                </fieldset>
                <fieldset>
                <legend>Pick a background color</legend>
                    <RadioButton name="background" color="beige" setColorMe={setColorMe} />
                    <RadioButton name="background" color="hotpink" setColorMe={setColorMe} />
                    <RadioButton name="background" color="yellow" setColorMe={setColorMe} />
                    <RadioButton name="background" color="cyan" setColorMe={setColorMe} />
                </fieldset>
            </section>
        </div>
    )
}
const RadioButton = (props) => {
    const { color, name, setColorMe } = props;
    return (
        <label htmlFor={color} style={{ backgroundColor: color, padding:"6px"}}>
            <input type="radio" value={color} id={color} name={name} onChange={(e) => setColorMe(e)} />
        </label>
    )
}