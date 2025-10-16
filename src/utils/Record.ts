import type { Dayjs } from "dayjs";

class Record {
    id: string;
    description: string;
    category: string;
    type: string;
    value: number;
    date: Dayjs;

    constructor(description: string, category: string, type: string, value: number, date: Dayjs) {
        this.id = crypto.randomUUID();
        this.description = description;
        this.category = category;
        this.type = type;
        this.value = value;
        this.date = date;
    }
}

export default Record;