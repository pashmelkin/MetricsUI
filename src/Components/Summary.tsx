import React from 'react';
import {Metric} from "../Models/Metric";
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {DisplayTime} from "../utils/helpers";

const CalcSummaryMetrics = (listPrs : Array<Metric>) : number => {
    let sum = 0;
    listPrs.forEach(c => {if (c.dateDiff> 0)  sum += c.dateDiff});
    return sum/listPrs.length;
};

export const Summary = (commits : Array<Metric>) => {
    const commitsArr = Object.keys(commits).map(function(k: any) { return commits[k] });
    const listPRs = commitsArr.filter(c => c.dateDiff > 0);
    let displayPRs, displayMetric, timePeriod;
    if ( listPRs.length > 0 && listPRs[0].title !== "initial state") {
        displayPRs = `Total ${listPRs.length} PRs analyzed`;
        displayMetric = `${DisplayTime(CalcSummaryMetrics(listPRs))} on average`;
    }
     return <Container maxWidth="lg" component="main">
         <Grid container spacing={6} >
                 <Grid item key="summary" >
                     <Card>
                         <CardHeader
                             title="Summary"
                             titleTypographyProps={{ align: 'left' }}
                             subheaderTypographyProps={{ align: 'left' }}
                         />
                         <CardContent>
                             <div >
                                 <Typography variant="h6" color="textPrimary" align="left">
                                     {timePeriod}
                                 </Typography>
                                 <Typography variant="h6" color="textPrimary" align="left">
                                     {displayPRs}
                                 </Typography>
                                 <Typography variant="h6" color="textPrimary" align="left">
                                     {displayMetric}
                                 </Typography>
                             </div>
                         </CardContent>
                     </Card>
                 </Grid>
         </Grid>
     </Container>

};
