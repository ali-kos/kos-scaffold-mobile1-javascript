import Loadable from 'react-loadable';
import Loader from '@/components/Loader';

export default function Lo(loader) {
  return Loadable({
    loader,
    loading: Loader
  });
}
