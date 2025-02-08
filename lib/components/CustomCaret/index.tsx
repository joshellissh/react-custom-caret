import {CustomCaretProps, CustomCaretType} from "./types.ts";
import {useEffect, useState} from "react";
import getCaretCoordinates from "../../textarea-caret-position/index.js";

export function CustomCaret({
    blink = true,
    focusCaret,
    blurCaret = undefined,
    style = undefined,
    type
}: CustomCaretProps) {
    const [, setFocused] = useState(false)
    const [ccId, setCcId] = useState("customCaret-");

    function getInputElement() {
        if (type == CustomCaretType.INPUT) {
            return document.querySelector("#" + ccId + ">input") as HTMLInputElement;
        }

        return document.querySelector("#" + ccId + ">textarea") as HTMLTextAreaElement;
    }

    function blinkCaret() {
        // Refresh stale closure
        let id: string = "";
        setCcId((prevState) => {id = prevState; return prevState; });
        if (id == "") {
            return;
        }

        // This should only blink the active caret, regardless if it's the focus or blur one
        const caretElement = document.querySelector("#" + id + ">div[style*='display: inline-block']") as HTMLElement;
        if (caretElement == null) {
            console.log("react-custom-caret: Could not find any active caret!");
            return;
        }

        if (caretElement.style.visibility == "visible") {
            caretElement.style.visibility = "hidden";
        } else {
            caretElement.style.visibility = "visible";
        }
    }

    function onInteraction(element: HTMLInputElement | HTMLTextAreaElement) {
        // Update state
        setFocused(true);

        const focusCaretDiv = document.querySelector("#" + ccId + ">.CustomCaretFocus") as HTMLElement;
        const blurCaretDiv = document.querySelector("#" + ccId + ">.CustomCaretBlur") as HTMLElement;
        focusCaretDiv.style.display = "inline-block";
        if (blurCaretDiv != null) {
            blurCaretDiv.style.display = "none";
        }

        const coords = getCaretCoordinates(element, element.selectionEnd!, {debug: true});
        if (coords == null) {
            return;
        }

        setCaretPos(coords.left, coords.top);
    }

    function onBlur() {
        // Update state
        setFocused(false);

        const focusCaretDiv = document.querySelector("#" + ccId + ">.CustomCaretFocus") as HTMLElement;
        const blurCaretDiv = document.querySelector("#" + ccId + ">.CustomCaretBlur") as HTMLElement;
        focusCaretDiv.style.display = "none";
        if (blurCaretDiv != null) {
            blurCaretDiv.style.display = "inline-block";
        }
    }

    function setCaretPos(left: number, top: number) {
        const carets = document.querySelectorAll("#" + ccId + ">div");

        carets.forEach(caret => {
            (caret as HTMLElement).style.left = left + "px";
            (caret as HTMLElement).style.top = top + "px";
        });
    }

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        // Generate ID for each caret
        const newId = ccId + Math.floor(Math.random() * 99999);
        setCcId(newId);

        // Set caret blinking timer
        if (blink) {
            intervalId = setInterval(() => blinkCaret(), 500);
        }

        // Set blur caret to end of text initially
        const inputElement = getInputElement();
        const coords = getCaretCoordinates(inputElement, inputElement.selectionEnd!, {debug: true});
        if (coords != null) {
            setCaretPos(coords.left, coords.top);
        }
        const blurCaretDiv = document.querySelector("#" + ccId + ">.CustomCaretBlur") as HTMLElement;
        if (blurCaretDiv != null) {
            blurCaretDiv.style.display = "inline-block";
        }

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        <div className={"inputWrapper"} id={ccId}>
            { type == CustomCaretType.INPUT &&
                <input
                    type="text"
                    onClick={(e) => onInteraction(e.currentTarget)}
                    onChange={(e) => onInteraction(e.currentTarget)}
                    onKeyDown={(e) => onInteraction(e.currentTarget)}
                    onKeyUp={(e) => onInteraction(e.currentTarget)}
                    onBlur={() => onBlur()}
                    style={style}
                    className={"CustomCaretInputText"}
                />
            }
            { type == CustomCaretType.TEXTAREA &&
                <textarea
                    onClick={(e) => onInteraction(e.currentTarget)}
                    onChange={(e) => onInteraction(e.currentTarget)}
                    onKeyDown={(e) => onInteraction(e.currentTarget)}
                    onKeyUp={(e) => onInteraction(e.currentTarget)}
                    onBlur={() => onBlur()}
                    onScroll={(e) => onInteraction(e.currentTarget)}
                    onResize={(e) => onInteraction(e.currentTarget)}
                    style={style}
                    className={"CustomCaretInputText"}
                ></textarea>

            }
            <div className="CustomCaretFocus" style={{display:"none"}}>{focusCaret}</div>
            <div className="CustomCaretBlur" style={{display:"none"}}>{blurCaret}</div>
        </div>
    );
}