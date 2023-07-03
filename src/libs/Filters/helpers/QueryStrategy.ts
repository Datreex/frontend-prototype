export type QueryStrategyType = (property: string, operator: string, value: string | number | Date | (string | number | Date)[]) => string;

function _format(value: string | number | Date) {
    if (value instanceof Date)
        return value.toString();
    if (typeof value === 'number')
        return value.toString();
    return value;
}

function format(value: string | number | Date | (string | number | Date)[]) {
    if (Array.isArray(value)) {
        return `(${value.map(_format).join(',')})`;
    }
    return _format(value);
}

export const queryStrategy:QueryStrategyType=(property, operator, value)=> {
    return `${property}:${operator}:${format(value)}`;
}

