import { useId } from "react";
import React from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",

    className = "",
}) {

    const amountInputId = useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}

                    // this here is a checker if onAmountChange exists or not , cause if we dont use this way our program will crash on getting no value of function
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}

                >



                    {currencyOptions.map((curr) => {
                        return (
                            <option key={curr} value={curr} >
                                {curr}
                            </option>
                        )
                    })}

                    // if key is not used , there is a great performance degradation , Remember the key in loops in react

                </select>
            </div>
        </div>
    );
}

export default InputBox;
