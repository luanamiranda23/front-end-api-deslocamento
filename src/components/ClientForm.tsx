import { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface ClientFormProps {
  onSubmit: (data: { name: string; email: string }) => Promise<void>;
}

const ClientForm: React.FC<ClientFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await onSubmit({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Nome"
        value={name}
        onChange={(event) => setName(event.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="E-mail"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Criar
      </Button>
    </form>
  );
};

export default ClientForm;
