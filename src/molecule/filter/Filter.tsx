import classnames from "classnames";
import './filter.css';

interface IProps {
    className?: string;
    filters: IFilter[];
    onChange(filter: IFilter, value: string): void;
}

export enum FilterType {
    String,
    Boolean,
}

export interface IFilter {
    label: string;
    fieldName: string;
    type: FilterType;
}

function Filter({ className, filters, onChange }: IProps) {
    return (
        <div className={classnames(className, 'mol-filter')}>
            {filters.map((filter) =>
                <div key={filter.fieldName} className="mol-filter__item">
                    <label className="mol-filter__item-label">
                        {filter.label}
                        <input
                            className="mol-filter__item-input"
                            type="search"
                            onChange={(event) => onChange(filter, event.target.value)}
                        />
                    </label>
                </div>
            )}
        </div>
    );
}

export default Filter;