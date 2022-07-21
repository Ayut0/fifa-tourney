import './App.css';
import MatchesList from './components/MatchesList';
import PlayersList from './components/PlayersList';
import { Box } from '@mui/material';
import Container from "@mui/material/Container";

function App() {
  return (
    <div className='App'>
      <h1>Fifa Tourney</h1>
      <main>
        <PlayersList />
        <Container maxWidth="xl">
          <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  m: 1,
                  width: .32,
                  height: 230,
                },
              }}
            >
            <MatchesList />
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default App;
