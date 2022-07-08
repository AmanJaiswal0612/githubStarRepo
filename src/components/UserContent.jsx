import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import BugReportIcon from '@mui/icons-material/BugReport';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid({el}) {
  
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        width:"100%",
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={el.owner.avatar_url}/>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography  style={{fontWeight:800}} gutterBottom variant="subtitle1" component="div">
                  {el.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                 {el.description}
              </Typography>
              <Typography  variant="body2" color="text.secondary">
              &#9733; {el.stargazers_count}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               <BugReportIcon style={{fontSize:"14px"}} />  {el.open_issues_count}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Last pushed at {el.pushed_at} by {el.owner.login}
              </Typography>
            </Grid>
           
          </Grid>
          {/* <Grid style={{alignItems:"end", border:"1px solid red"}} item>
            <Typography variant="subtitle1" component="div">
             
            </Typography>
          </Grid> */}
        </Grid>
      </Grid>
    </Paper>
  );
}
