import {CustomCaret, CustomCaretType} from "react-custom-caret"

export function CarrotCaret() {
    return (
        <CustomCaret
            type={CustomCaretType.INPUT}
            blink={true}
            focusCaret={<div
                style={{
                    marginLeft: "-8px"
                }}
            >
                <img src="/react-custom-caret-examples/carrot.svg" alt="|" width={17} height={17}/>
            </div>}
        ></CustomCaret>
    );
}

export const CarrotCaretString = `
<CustomCaret
    type={CustomCaretType.INPUT}
    blink={true}
    focusCaret={<div
        style={{
            marginLeft: "-8px"
        }}
    >
        <img src="/react-custom-caret-examples/carrot.svg" alt="|" width={17} height={17} />
    </div>}
></CustomCaret>
`;

export function CSSCaret() {
    return (
        <CustomCaret
            blink={false}
            type={CustomCaretType.INPUT}
            focusCaret={<div style={{
                width: "7px",
                height: "15px",
                backgroundColor: "#bbbbbb",
                marginTop: "2px"
            }}
            />}
            blurCaret={<div style={{
                width: "7px",
                height: "15px",
                backgroundColor: "transparent",
                border: "solid 1px white",
                marginTop: "2px"
            }}
            />}
            style={{
                backgroundColor: "black",
                border: "0",
                color: "white",
                fontFamily: "monospace",
                lineHeight: "14pt"
            }}
        ></CustomCaret>
    );
}

export const CSSCaretString = `
<CustomCaret
    blink={false}
    type={CustomCaretType.INPUT}
    focusCaret={<div style={{
            width: "7px",
            height: "15px",
            backgroundColor: "#bbbbbb",
            marginTop: "2px"
        }}
    />}
    blurCaret={<div style={{
            width: "7px",
            height: "15px",
            backgroundColor: "transparent",
            border: "solid 1px white",
            marginTop: "2px"
        }}
    />}
    style={{
        backgroundColor: "black",
        border: "0",
        color: "white",
        fontFamily: "monospace",
        lineHeight: "14pt"
    }}
></CustomCaret>
`;