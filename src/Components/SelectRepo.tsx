import React from 'react';
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";


export const SelectRepo = () => {

    return (
        <FormControl className="repoSelect">
            <Select
                labelId="repo-select-label"
                id="repo-select"
                defaultValue="sme-web"
            >

                <MenuItem value="sme-web">sme-web</MenuItem>
                <MenuItem value="sme-web-bff">sme-web-bff</MenuItem>
                <MenuItem value="payday">payday</MenuItem>
                <MenuItem value="payagent">payagent</MenuItem>
                <MenuItem value="both repos">all repos</MenuItem>
            </Select>
            <FormHelperText>Repo</FormHelperText>
        </FormControl>
    );

};

