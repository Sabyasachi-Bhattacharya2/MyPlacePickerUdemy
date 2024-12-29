import {useEffect, useState} from "react";

export default function ProgressBar() {
    const [remainingTime, setRemainingTime] = useState(2950);


    useEffect(() => {
        let interval = setInterval(() => {
            setRemainingTime(prev => prev - 10);
        }, 10);
        return () => {
            clearInterval(interval);
        }
    }, [])

    return (<progress value={remainingTime} max={2950} className="progress"/>)

}