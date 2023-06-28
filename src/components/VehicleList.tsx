import { List, ListItem, ListItemText } from '@mui/material';

interface Vehicle {
  id: number;
  brand: string;
  model: string;
  plateNumber: string;
}

interface VehicleListProps {
  vehicles: Vehicle[];
}

const VehicleList: React.FC<VehicleListProps> = ({ vehicles }) => {
  return (
    <List>
      {vehicles.map((vehicle) => (
        <ListItem key={vehicle.id}>
          <ListItemText
            primary={`Marca: ${vehicle.brand}, Modelo: ${vehicle.model}`}
            secondary={`Placa: ${vehicle.plateNumber}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default VehicleList;
