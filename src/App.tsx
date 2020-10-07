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

import Hidden from "@material-ui/core/Hidden";
import {SelectRepo} from "./Components/SelectRepo";
import {CardIdentifier} from "./Components/CardId";

function App() {
    const emptyData = (): Array<Metric> => ([{
        title: '',
        sha : '',
        firstDate: '',

        deployDate : '',
        dateDiff: ''
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
            <div className="paper">

                <Typography component="h1" variant="h5">
                    Get LTT Metics
                </Typography>
                <form className="form" noValidate>
                    <Grid container spacing={2}>
                        <Hidden xsUp>
                            <CardIdentifier/>
                        </Hidden>
                        <Grid item sm={12} >
                            <SelectRepo/>
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
                <br/><br/><br/><br/>
                <CommitTable {...commit}/>
            </Container>
        </div>
    </div>;
}

export default App;
