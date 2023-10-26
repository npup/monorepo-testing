import { type FormEventHandler, createRef, useState } from "react";
import { quadrupleIt, transformText } from "./util";
import { Card } from "./components/Card";

export function App() {
    const inputRef = createRef<HTMLInputElement>();
    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        if (!inputRef.current) {
            return;
        }
        const { value } = inputRef.current;
        const transformedText = transformText(value.trim());
        setItems((items) => [...items, transformedText]);
        inputRef.current.select();
    };
    const [items, setItems] = useState<string[]>([]);
    return (
        <>
            <h1>le app</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} />
                <input type="submit" value="Submit" />
            </form>
            <section>
                <ul>
                    {items.map((t, idx) => (
                        <li key={uid()}>
                            <Card
                                text={`${t} (4 ✗ ${idx} = ${quadrupleIt(idx)})`}
                            />
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}
function uid() {
    return Math.floor(Math.random() * 1e9).toString(24);
}
