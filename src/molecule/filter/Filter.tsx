import classnames from "classnames";
import './filter.css';
import IndeterminateCheckbox from "../../atom/indeterminateCheckbox/IndeterminateCheckbox";

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
            <div className="mol-filter__heading">Filters:</div>
            {filters.map((filter) =>
                <div key={filter.fieldName} className="mol-filter__item">
                    <label className="mol-filter__item-label">
                        {filter.label}
                        {filter.type === FilterType.Boolean ?
                            <IndeterminateCheckbox
                                className="mol-filter__item-input"
                                onChange={(value: string) => onChange(filter, value)}
                            />
                        :
                            <input
                                className="mol-filter__item-input"
                                type="search"
                                onChange={(event) => onChange(filter, event.target.value)}
                            />
                        }

                    </label>
                </div>
            )}
        </div>
    );
}

export default Filter;