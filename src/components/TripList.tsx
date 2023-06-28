import { List, ListItem, ListItemText } from '@mui/material';

interface Trip {
  id: number;
  origin: string;
  destination: string;
  distance: number;
}

interface TripListProps {
  trips: Trip[];
}

const TripList: React.FC<TripListProps> = ({ trips }) => {
  return (
    <List>
      {trips.map((trip) => (
        <ListItem key={trip.id}>
          <ListItemText
            primary={`Origem: ${trip.origin}, Destino: ${trip.destination}`}
            secondary={`Distância: ${trip.distance} km`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default TripList;
