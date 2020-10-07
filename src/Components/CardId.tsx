import React from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import Grid from "@material-ui/core/Grid";

//const handleChangeCard = (event: any) => {
//    setCard(event.target.value);
//};
//const [cardId, setCard] = React.useState('');


export const CardIdentifier = () => {

    return (
        <Grid item xs={12} sm={6}>
            <TextField
                autoComplete="fname"
                name="Card"
                variant="outlined"
                required
                fullWidth
                id="card"
                label="Card Identifier"
                autoFocus
            />
        </Grid>
    );

};

