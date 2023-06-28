import { List, ListItem, ListItemText } from '@mui/material';

interface Driver {
  id: number;
  name: string;
  licenseNumber: string;
}

interface DriverListProps {
  drivers: Driver[];
}

const DriverList: React.FC<DriverListProps> = ({ drivers }) => {
  return (
    <List>
      {drivers.map((driver) => (
        <ListItem key={driver.id}>
          <ListItemText primary={driver.name} secondary={driver.licenseNumber} />
        </ListItem>
      ))}
    </List>
  );
};

export default DriverList;
