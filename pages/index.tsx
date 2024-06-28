
import CollectionContainer from '../src/containers/collection'
import { CollectionService } from '../src/service/collection';
import api from '../src/service/api';
import { CollectionRepository } from 'src/repository/collection';

function Collection() {
  const repository = new CollectionRepository();
  const collectionService = new CollectionService(repository);
  return (
    <CollectionContainer collectionService={collectionService} />
  );
}

export default Collection;
