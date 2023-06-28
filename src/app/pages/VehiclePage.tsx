import { useState, useEffect } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import VehicleForm from '../../components/VehicleForm';
import VehicleList from '../../components/VehicleList';
import axios from 'axios';

interface Vehicle {
  id: number;
  brand: string;
  plateNumber: string;
  model: string;
}

const VehiclePage = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await axios.get('https://api-deslocamento.herokuapp.com/api/v1/Veiculo');
      setVehicles(response.data);
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao buscar os veículos.');
    }
  };

  const handleCreateVehicle = async (data: { brand: string; plateNumber: string }) => {
    try {
      const response = await axios.post('https://api-deslocamento.herokuapp.com/api/v1/Veiculo', data);
      setVehicles([...vehicles, response.data]);
      alert('Veículo criado com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao criar o veículo.');
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h1" align="center">
          Veículos
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box p={2}>
          <Typography variant="h6" component="h2" gutterBottom>
            Criar Veículo
          </Typography>
          <VehicleForm onSubmit={handleCreateVehicle} />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box p={2}>
          <Typography variant="h6" component="h2" gutterBottom>
            Lista de Veículos
          </Typography>
          <VehicleList vehicles={vehicles} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default VehiclePage;
