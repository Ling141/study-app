import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';



function Timer() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#064232',
            },
        },
    });

    const [count, setCount] = useState(1500)
    const [isFocusTime, setFocusTime] = useState(false)
    const [set, setSet] = useState(0)
function timer(count){
        return count-1
    }

    function handleClick() {
        setFocusTime((prevState) => {
            return !(prevState)
        })
        // console.log(isFocusTime);

        const intervalId = setInterval(() => {
            setCount((prevCount) => {
                if (setFocusTime) {
                    if (prevCount === 0) {
                        clearInterval(intervalId);
                        setSet((prevSet) => {
                            prevSet + 1
                        })
                        return 0;
                    }else{
                        timer(prevCount);}
                } else {
                    clearInterval(intervalId);
                    
                }
            });
        }, 1000);
    }


    return (
        <div className="timer">
            <h1>{Math.floor(count / 60)} : {String(count % 60).padStart(2, '0')}</h1>
            <ThemeProvider theme={theme}>
                <Button variant="contained" color="primary" size="large"
                    onClick={handleClick}
                >
                    {isFocusTime ? "STOP" : "START"}
                </Button>
            </ThemeProvider>
        </div>
    );
}

export default Timer;