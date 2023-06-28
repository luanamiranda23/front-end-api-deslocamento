import { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

interface DriverFormProps {
  onSubmit: (data: { name: string; licenseNumber: string }) => void;
  initialValues?: { name: string; licenseNumber: string };
}

const DriverForm: React.FC<DriverFormProps> = ({
  onSubmit,
  initialValues = { name: '', licenseNumber: '' },
}) => {
  const [name, setName] = useState(initialValues.name);
  const [licenseNumber, setLicenseNumber] = useState(initialValues.licenseNumber);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleLicenseNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLicenseNumber(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ name, licenseNumber });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Nome"
            value={name}
            onChange={handleNameChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Número da Licença"
            value={licenseNumber}
            onChange={handleLicenseNumberChange}
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

export default DriverForm;
