import React from 'react';
import FilterLink from "./FilterLink";
import {VisibilityFilters} from "../../actions";

const ContainerFooter = () => {

    return (
        <div>
            <FilterLink filter={VisibilityFilters.SHOW_ALL}>
                All
            </FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
                Active
            </FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
                Completed
            </FilterLink>
        </div>
    )
}

export default ContainerFooter;