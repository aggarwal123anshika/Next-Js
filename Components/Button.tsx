"use client"

export default function Button() {
    return (
        <button onClick={() => {
            alert("click me");
        }}>
            Click Me!
        </button>
    )
}