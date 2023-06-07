import { collectionService } from '../__tests__/factory/collectionService';
import CollectionContainer from '../src/containers/collection'

function Collection() {
  return (
    <CollectionContainer collectionService={collectionService()} />
  );
}

export default Collection;
