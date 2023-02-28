import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, Typography, List, ListItem, ListItemButton, ListItemText, Container, Grid, Box } from "@mui/material";
import _ from "lodash";
import React, { FC, useContext } from "react";
import CoursesContext from "../../store/context";
import { getStatistics } from "../../utils/courses-utils";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import Graph from "../common/graph";
import Paper from '@mui/material/Paper';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';


const intervalDivider: number[] = [
  10, 20, 30, 50, 100
];

const columns: GridColDef[] = [
  { field: 'from', headerName: 'From', width: 150 },
  { field: 'to', headerName: 'To', width: 150 },
  { field: 'amount', headerName: 'Amount', width: 150 }
];

export const StatisticsHours: FC = () => {
  const storeValue = useContext(CoursesContext);

  const [interval, setInterval] = React.useState<number>(50);

  function getListElements() {

    let res = getStatistics(storeValue.list, interval, false);

    const rows: GridRowsProp = res.map((e, i) => {
      return { id: i, from: e.minInterval, to: e.maxInterval, amount: e.amount };
    });

    return (<div style={{ height: 300, width: '100%' }}>

      <DataGrid rows={rows} columns={columns} />

      <Box sx={{ display: 'flex' }}>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}> 
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Graph value={res}/>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </div>)


  }

  const handleChange = (event: any) => {
    setInterval(event.target.value);

  };

  return <div>
    <Typography variant="h3">
      Statistics Hourse
    </Typography>;

    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-multiple-name-label">Interval</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        value={interval}
        onChange={handleChange}
        input={<OutlinedInput label="Name" />}
      >
        {intervalDivider.map((element) => (
          <MenuItem
            key={element}
            value={element}
          >
            {element}
          </MenuItem>
        ))}
      </Select>
    </FormControl>

    <List>
      {getListElements()}
    </List>




  </div>
}
export default StatisticsHours