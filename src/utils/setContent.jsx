import Error from "../components/Error/Error";
import Loader from "../components/Loader/Loader";
import Skeleton from "../components/skeleton/Skeleton";

export const setContent = (process, Component, data) => {
  switch (process) {
      case 'waiting':
        return <Skeleton />;
      case 'loading':
        return <Loader />;
      case 'confirmed':
        return <Component data={data} />;
      case 'error':
        return <Error />;
      default:
        throw new Error('Unexpected process state');
  }
}