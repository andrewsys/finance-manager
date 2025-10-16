import type Record from "./Record";

interface Props {
    record: Record;
}

function Register({record}: Props) {
    console.log(record);
}

export { Register };