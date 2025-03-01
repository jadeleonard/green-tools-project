interface InputProps {
    type?: "text" | "password" | "email" | "number" | "date" | "time" | "datetime-local" | "month" | "week" | "range" | "tel" | "url" | "file" | "hidden" | "search" | "submit" | "reset";
    name?: string;
    value?: string | number;
    id?: string;
    class?: string;
    style?: string;
    title?: string;
    disabled?: boolean;
    readonly?: boolean;
    placeholder?: string;
    maxlength?: number;
    minlength?: number;
    size?: number;
    autocomplete?: "on" | "off";
    required?: boolean;
    pattern?: string;
    min?: number | string;
    max?: number | string;
    step?: number;
    accept?: string;
    formaction?: string;
    formenctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
    formmethod?: "get" | "post";
    formnovalidate?: boolean;
    formtarget?: "_self" | "_blank" | "_parent" | "_top" | string;
    autofocus?: boolean;
    multiple?: boolean;
    capture?: "user" | "environment";
}
declare const Input: (props: InputProps) => HTMLInputElement;
export default Input;
