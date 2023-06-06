import React from 'react';
import { LuEdit } from 'react-icons/lu';
import { BsTrash3 } from 'react-icons/bs';
import styles from './styles.module.css'
import { ImageURL } from '../../entities/url';

interface ICollectionProps {
  title: string;
  subtitle: string;
  author: string;
  image: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

const DEFAULT_IMAGE_URL = 'https://i.ibb.co/ZHDSnj4/foo.jpg';

function Collection({
  title = 'Título da coleção',
  image = DEFAULT_IMAGE_URL,
  subtitle = 'Subtítulo da coleção',
  author,
  onEdit,
  onDelete
}: ICollectionProps
) {

  return (
    <div className={styles.collection}>
      <img src={new ImageURL(image).isValid() ? image : DEFAULT_IMAGE_URL} alt="Capa da coleção" />
      <div className={styles.aside}>
        <div className={styles.text}>
          <h3 className={styles.title}>{title}</h3>
          <h4 className={styles.subtitle}>{subtitle}</h4>

          <p className={styles.author}>{author}</p>
        </div>

        <div className={styles.actions}>
          <button className={styles.edit} title="Editar" onClick={() => onEdit && onEdit()}>
            <LuEdit size={19} />
            Editar
          </button>
          <button className={styles.delete} title="Excluir" onClick={() => onDelete && onDelete()}>
            <BsTrash3 size={19} />
            Excluir
          </button>
        </div>
      </div>
    </div>
  )
}

export default Collection;
