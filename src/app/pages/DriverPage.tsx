import { useState, useEffect } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import DriverForm from '../../components/DriverForm';
import DriverList from '../../components/DriverList';
import axios from 'axios';

interface Driver {
  id: number;
  name: string;
  licenseNumber: string;
}

const DriverPage = () => {
  const [drivers, setDrivers] = useState<Driver[]>([]);

  useEffect(() => {
    fetchDrivers();
  }, []);

  const fetchDrivers = async () => {
    try {
      const response = await axios.get('https://api-deslocamento.herokuapp.com/api/v1/Condutor');
      setDrivers(response.data);
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao buscar os condutores.');
    }
  };

  const handleCreateDriver = async (data: { name: string; licenseNumber: string }) => {
    try {
      const response = await axios.post('https://api-deslocamento.herokuapp.com/api/v1/Condutor', data);
      setDrivers([...drivers, response.data]);
      alert('Condutor criado com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao criar o condutor.');
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h1" align="center">
          Condutores
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box p={2}>
          <Typography variant="h6" component="h2" gutterBottom>
            Criar Condutor
          </Typography>
          <DriverForm onSubmit={handleCreateDriver} />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box p={2}>
          <Typography variant="h6" component="h2" gutterBottom>
            Lista de Condutores
          </Typography>
          <DriverList drivers={drivers} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default DriverPage;
