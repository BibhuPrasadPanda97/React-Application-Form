import React from "react";
import './Spinner_styles.css';
import loading from './spinnerLoading.gif'

export default function Spinner() {
    return (
        <>
            <div className="spinner-background">
                <div className="spinner-style">
                    <img src={loading} alt="loading" width="50" height="50" />
                </div>
            </div>
        </>
    )
}