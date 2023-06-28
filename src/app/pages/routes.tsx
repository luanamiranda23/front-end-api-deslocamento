import { NextRouter, useRouter } from 'next/router';
import { FC } from 'react';
import ClientPage from './ClientPage';
import DriverPage from './DriverPage';
import TripPage from './TripPage';
import VehiclePage from './VehiclePage';
import VehicleList from '../../components/VehicleList';
import Layout from '../layout';

interface Route {
  path: string;
  component: FC<any>; // Utilizando FC<any> para aceitar qualquer propriedade
}

const routes: Route[] = [
  { path: '/clients', component: ClientPage },
  { path: '/drivers', component: DriverPage },
  { path: '/trips', component: TripPage },
  { path: '/vehicles', component: VehiclePage },
  { path: '/lista-veiculos', component: VehicleList } // Exemplo de rota com VehicleList
];

const Router: FC = () => {
  const router: NextRouter = useRouter();

  // Verifica se a rota atual é válida e renderiza o componente correspondente
  const renderComponent = () => {
    const { pathname } = router;

    const matchedRoute = routes.find((route) => route.path === pathname);

    if (matchedRoute) {
      const { component: Component } = matchedRoute;
      return <Component />;
    }

    // Página 404 ou fallback
    return <div>Página não encontrada</div>;
  };

  return <>{renderComponent()}</>;
};

export default Router;
