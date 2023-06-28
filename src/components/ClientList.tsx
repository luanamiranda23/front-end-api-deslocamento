// components/ClientList.tsx
import { useEffect, useState } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

interface Client {
  id: number;
  name: string;
  email: string;
}

interface ClientListProps {
  clients: Client[];
}

const ClientList: React.FC<ClientListProps> = ({ clients }) => {
  return (
    <List>
      {clients.map((client) => (
        <ListItem key={client.id}>
          <ListItemText primary={client.name} secondary={client.email} />
        </ListItem>
      ))}
    </List>
  );
};

export default ClientList;
