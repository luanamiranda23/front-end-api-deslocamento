import React, { useState } from 'react';
import { Button, TextField, Grid } from '@mui/material';

interface VehicleFormProps {
  onSubmit: (data: { brand: string; plateNumber: string }) => Promise<void>;
}

const VehicleForm: React.FC<VehicleFormProps> = ({ onSubmit }) => {
  const [brand, setBrand] = useState('');
  const [plateNumber, setPlateNumber] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await onSubmit({ brand, plateNumber });
      setBrand('');
      setPlateNumber('');
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao criar o veículo.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Marca"
            variant="outlined"
            fullWidth
            value={brand}
            onChange={(event) => setBrand(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Placa"
            variant="outlined"
            fullWidth
            value={plateNumber}
            onChange={(event) => setPlateNumber(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Criar Veículo
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default VehicleForm;
