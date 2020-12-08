import React from 'react';
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";


export const SelectDays = () => {

    return (
        <FormControl className="datesSelect">
            <Select
                labelId="dates-select-label"
                id="dates-select"
                defaultValue="7-days"
            >

                <MenuItem value="7-days">7 days</MenuItem>
                <MenuItem value="10-days">10 days</MenuItem>
                <MenuItem value="1-month">1 month</MenuItem>
            </Select>
            <FormHelperText>Days</FormHelperText>
        </FormControl>
    );

};

