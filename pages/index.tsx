
import CollectionContainer from '../src/containers/collection'
import { CollectionService } from '../src/service/collection';
import api from '../src/service/api';

function Collection() {
  const collectionService = new CollectionService(api);
  return (
    <CollectionContainer collectionService={collectionService} />
  );
}

export default Collection;
