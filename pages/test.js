import { useLayoutEffect, useState } from "react";

export default function SyncSlider() {
    const [size, setSize] = useState(0);
    console.log(size);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth]);
        }
        window.addEventListener("resize", updateSize);
    }, []);

    return (
        <div className={size < 991 ? "abc" : "xyz"}>


        </div>
    );
}
