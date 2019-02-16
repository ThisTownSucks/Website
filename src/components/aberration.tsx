import React, { useState } from 'react'

const Aberration = function({ text, dyCyan, dyYellow }){
    return (
        <svg viewBox="0 0 100 100">
            <defs>
                <filter id="aberration">
                    <feOffset id="cyan"    in="SourceGraphic" result="cyanOffset"    dx="0" dy={ dyCyan } />
                    <feOffset id="magenta" in="SourceGraphic" result="magentaOffset" dx="0" dy="0" />
                    <feOffset id="yellow"  in="SourceGraphic" result="yellowOffset"  dx="0" dy={ dyYellow } />
                    <feColorMatrix in="cyanOffset" result="cyanMatrix" type="matrix"
                        values="1 0 0 0 0
                                0 0 0 0 1
                                0 0 0 0 1
                                0 0 0 1 0" />
                    <feColorMatrix in="magentaOffset" result="magentaMatrix" type="matrix" 
                        values="0 0 0 0 1
                                0 1 0 0 0
                                0 0 0 0 1
                                0 0 0 1 0" />
                    <feColorMatrix in="yellowOffset" result="yellowMatrix" type="matrix" 
                        values="0 0 0 0 1
                                0 0 0 0 1
                                0 0 1 0 0
                                0 0 0 1 0" />
                    <feBlend mode="multiply" in="cyanMatrix"   in2="magentaMatrix" result="cyanAndMagenta" />
                    <feBlend mode="multiply" in="yellowMatrix" in2="cyanAndMagenta" />
                </filter>
            </defs>
            <text filter="url(#aberration)" id="sample" font-size="10" x="0" y="10%">{ text }</text>
        </svg>
    )
}

export default Aberration
