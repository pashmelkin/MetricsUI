import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Metric} from "../Models/Metric";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});



export const CommitTable = (commits : Array<Metric>) => {

    var commitsArr = Object.keys(commits).map(function(k: any) { return commits[k] });

    const classes = useStyles();


    return (
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Title</TableCell>
                            <TableCell align="left">Merge Commit</TableCell>
                            <TableCell align="left">First Date</TableCell>
                            <TableCell align="left">Deploy Date</TableCell>
                            <TableCell align="left">Date Diff</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {commitsArr.map((row) => (
                            <TableRow key={row.title.substring(0, 10)}>
                                <TableCell align="left">{row.title}</TableCell>
                                <TableCell align="left">{row.sha}</TableCell>
                                <TableCell align="left">{row.firstDate}</TableCell>
                                <TableCell align="left">{row.deployDate}</TableCell>
                                <TableCell align="left">? days</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );

};
