import { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

interface TripFormProps {
  onSubmit: (data: { origin: string; destination: string }) => void;
  initialValues?: { origin: string; destination: string };
}

const TripForm: React.FC<TripFormProps> = ({
  onSubmit,
  initialValues = { origin: '', destination: '' },
}) => {
  const [origin, setOrigin] = useState(initialValues.origin);
  const [destination, setDestination] = useState(initialValues.destination);

  const handleOriginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrigin(event.target.value);
  };

  const handleDestinationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDestination(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ origin, destination });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Origem"
            value={origin}
            onChange={handleOriginChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Destino"
            value={destination}
            onChange={handleDestinationChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Salvar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TripForm;
