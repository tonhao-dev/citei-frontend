import React, { useEffect, useState } from 'react';
import styles from './styles.module.css'
import Title from '../../components/title';
import Subtitle from '../../components/subtitle';
import CollectionList from '../../components/collectionList';
import Button from '../../components/button';
import { ICollection, IRawCollection } from '../../interfaces/collection';
import { ICollectionService } from '../../service/collection';
import Modal from '../../components/modal';
import Input from '../../components/input';
import Search from '../../components/search';

export interface ICollectionProps {
  collectionService: ICollectionService
}

function Collection({ collectionService }: ICollectionProps) {
  const [search, setSearch] = useState('');
  const [isSearch, setIsSearch] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [collections, setCollections] = useState<ICollection[]>([]);
  const [newCollection, setNewCollection] = useState<Partial<IRawCollection>>({})

  async function fetch() {
    setCollections(await collectionService.getValidCollections());
  }

  async function save() {
    if (!collectionService.isValidCollection(newCollection)) return;

    collectionService.saveCollection(newCollection as IRawCollection);
    setModalIsOpen(!modalIsOpen);
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className={styles['collection-container']}>
      <header className={styles.heading}>
        <div className={styles.title}>
          {!isSearch && <Title>Citei</Title>}
          <Search onChange={(text) => setSearch(text)} onToggle={isSearch => setIsSearch(isSearch)} />
        </div>
        {!isSearch && <Subtitle>Coleções, seu conjunto de citações em reunidos em lugar.</Subtitle>}
      </header>

      <CollectionList collections={collectionService.filterCollections(search, collections)} />

      <Modal visible={modalIsOpen}>
        <Input placeholder='Título da coleção' onChange={(e) => { setNewCollection({ ...newCollection, title: e.target.value }) }} />
        <Input placeholder='Subtítulo da coleção' onChange={(e) => { setNewCollection({ ...newCollection, subtitle: e.target.value }) }} />
        <Input placeholder='Link para imagem de capa' onChange={(e) => { setNewCollection({ ...newCollection, image: e.target.value }) }} />
        <Input placeholder='Autor da coleção' onChange={(e) => { setNewCollection({ ...newCollection, author: e.target.value }) }} />

        <Button title='Salvar' variant='white' onClick={() => save()} />
      </Modal>

      <Button title="Adicionar coleção" onClick={() => setModalIsOpen(!modalIsOpen)} aria-label='Adicionar coleção' />
    </div>
  )
}

export default Collection;
