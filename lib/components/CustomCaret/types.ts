import { ReactElement } from "react";

export enum CustomCaretType {
    INPUT,
    TEXTAREA
}

export interface CustomCaretProps {
    blink?: boolean;
    focusCaret: ReactElement;
    blurCaret?: ReactElement;
    style?: any;
    type: CustomCaretType;
}