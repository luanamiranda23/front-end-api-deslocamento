import { useState, useEffect } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import ClientForm from '../../components/ClientForm';
import ClientList from '../../components/ClientList';
import axios from 'axios';

interface Client {
  id: number;
  name: string;
  email: string;
}

const ClientPage = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await axios.get('https://api-deslocamento.herokuapp.com/api/v1/Cliente');
      setClients(response.data);
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao buscar os clientes.');
    }
  };

  const handleCreateClient = async (data: { name: string; email: string }) => {
    try {
      const response = await axios.post('https://api-deslocamento.herokuapp.com/api/v1/Cliente', data);
      setClients([...clients, response.data]);
      alert('Cliente criado com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao criar o cliente.');
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h1" align="center">
          Clientes
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box p={2}>
          <Typography variant="h6" component="h2" gutterBottom>
            Criar Cliente
          </Typography>
          <ClientForm onSubmit={handleCreateClient} />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box p={2}>
          <Typography variant="h6" component="h2" gutterBottom>
            Lista de Clientes
          </Typography>
          <ClientList clients={clients} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ClientPage;
