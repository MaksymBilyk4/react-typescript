import React, {FC, useRef, useState} from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>("");
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value);
        console.log(inputRef.current?.value);
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log("DRAG")
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log("DROP");
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    }

    return (
        <div>
            <input type="text" value={value} onChange={changeHandler} placeholder="Управляемый"/>
            <input type="text" ref={inputRef} placeholder="Неуправляемый"/>
            <button onClick={clickHandler}>Show input value in console</button>
            <div
                onDrag={dragHandler}
                draggable
                style={{width: 200, height: 200, background: "red"}}/>
            <div
                onDragLeave={leaveHandler}
                onDrop={dropHandler}
                onDragOver={dragWithPreventHandler}
                style={{width: 200, height: 200, background: isDrag===true ? "blue" : "red", marginTop: 15}}
            />
        </div>
    );
};

export default EventsExample;