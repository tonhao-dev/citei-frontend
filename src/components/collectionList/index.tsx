import React from 'react'
import styles from './styles.module.css'
import { ICollection } from '../../interfaces/collection';
import Collection from '../collection';

interface ICollectionListProps {
  collections: ICollection[]
}

function CollectionList({ collections }: ICollectionListProps) {
  return (
    <ul className={styles['collection-list']}>
      {collections.map((collection) => <Collection key={collection.title} collection={collection} />)}
    </ul>
  )
}

export default CollectionList;
