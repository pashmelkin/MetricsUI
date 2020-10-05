import React from 'react';
import './App.css';
import {Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import {MetricService} from "./Middleware/MetricsService";
import {CommitTable} from "./Components/CommitTable";
import {Metric} from "./Models/Metric";

function App() {
    const emptyData = (): Array<Metric> => ([{
        title: '',
        sha : '',
        firstDate: '',
        deployDate : ''
    }]);
    const [repo, setRepo] = React.useState('');
    const [cardId, setCard] = React.useState('');
    const [commit, setCommit] = React.useState(emptyData);

    const handleChangeRepo = (event: any) => {
        setRepo(event.target.value);
    };
    const handleChangeCard = (event: any) => {
        setCard(event.target.value);
    };

    async function GetMetric(event: any) {
        event.preventDefault();
        let res = await MetricService(cardId, repo);
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
                              onChange={handleChangeCard}
                          />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                          <Select
                              labelId="repo-select-label"
                              id="repo-select"
                              value={repo}
                              onChange={handleChangeRepo}
                          >
                              <MenuItem value="sme-web">sme-web</MenuItem>
                              <MenuItem value="sme-web-bff">sme-web-bff</MenuItem>
                              <MenuItem value="both repos">both repos</MenuItem>
                          </Select>
                      </Grid>
                      <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          onClick={e => GetMetric(e)}
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
