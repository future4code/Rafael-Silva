export interface ResultItem {
    allowed: string[];
    notAllowed: string[];
}

export interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
}