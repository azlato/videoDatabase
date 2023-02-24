import { useState } from "react";
import "./sort.css";

export interface ISort {
    label: string;
    fieldName: string;
}

interface IProps {
    fields: ISort[];
    onChange(fieldName: string, isDescending: boolean): void;
}

function Sort({fields, onChange}: IProps) {
    const [selectValue, setSelectValue] = useState<undefined | string>(undefined);
    const [orderValue, setOrderValue] = useState<boolean>(false);

    const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectValue(value);
        onChange(value, orderValue);
    }

    const onOrderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.checked;
        setOrderValue(value);
        if (selectValue) {
            onChange(selectValue, value);
        }
    }

    return (
        <div className="mol-sort">
            <div className="mol-sort__heading">Sort by:</div>
            <select onChange={onSelectChange} value={selectValue} defaultValue={0}>
                <option disabled hidden value={0}>-- default --</option>
                {fields.map((field) => (
                    <option key={field.fieldName} value={field.fieldName}>{field.label}</option>
                ))}
            </select>
            <span className="mol-sort__order-checkbox">[] Ascending / [x] Descending: <input type="checkbox" checked={orderValue} onChange={onOrderChange}/></span>
        </div>
    );
}

export default Sort;