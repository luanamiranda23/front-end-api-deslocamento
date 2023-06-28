import { useState, useEffect } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import TripForm from '../../components/TripForm';
import TripList from '../../components/TripList';
import axios from 'axios';

interface Trip {
  id: number;
  origin: string;
  destination: string;
  distance: number;
}

const TripPage = () => {
  const [trips, setTrips] = useState<Trip[]>([]);

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      const response = await axios.get('https://api-deslocamento.herokuapp.com/api/v1/Deslocamento');
      setTrips(response.data);
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao buscar os deslocamentos.');
    }
  };

  const handleCreateTrip = async (data: { origin: string; destination: string }) => {
    try {
      const response = await axios.post('https://api-deslocamento.herokuapp.com/api/v1/Deslocamento/IniciarDeslocamento', data);
      setTrips([...trips, response.data]);
      alert('Deslocamento criado com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao criar o deslocamento.');
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h1" align="center">
          Deslocamentos
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box p={2}>
          <Typography variant="h6" component="h2" gutterBottom>
            Criar Deslocamento
          </Typography>
          <TripForm onSubmit={handleCreateTrip} />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box p={2}>
          <Typography variant="h6" component="h2" gutterBottom>
            Lista de Deslocamentos
          </Typography>
          <TripList trips={trips} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default TripPage;
