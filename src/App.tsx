import React from 'react';
import './App.css';
import {Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import {MetricService} from "./Middleware/MetricsService";
import {CommitTable} from "./Components/CommitTable";
import {Metric} from "./Models/Metric";

import {SelectRepo} from "./Components/SelectRepo";
import {SelectDays} from "./Components/SelectDays";
import {Summary} from "./Components/Summary";

function App() {
    const emptyData = (): Array<Metric> => ([{
        title: 'initial state',
        sha : '',
        firstDate: new Date(),
        deployDate : new Date(),
        dateDiff: 1
    }]);

    const [commit, setCommit] = React.useState(emptyData);


    async function GetMetric(event: any) {
        event.preventDefault();
        let res = await MetricService("", "sme-web");
        setCommit(res);
    }

    return <div className="App">
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className="paper" >

                <Typography component="h1" variant="h5">
                    Get LTT Metics
                </Typography>
                <form className="form" noValidate>
                    <Grid container spacing={2}>
                        <Grid item sm={6} >
                            <SelectRepo/>
                            <SelectDays/>
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={e => GetMetric ( e )}
                        >
                            Get Metrics
                        </Button>
                    </Grid>
                </form>
            </div>
        </Container>
        <div>
            <Container maxWidth="xl">
                <br/>
                <Summary {...commit}/>
            </Container>
        </div>
      <div>
          <Container maxWidth="xl">
                <br/><br/><br/><br/>
                <CommitTable {...commit}/>
            </Container>
        </div>
    </div>;
}

export default App;
