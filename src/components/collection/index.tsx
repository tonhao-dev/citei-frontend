import React from 'react';
import { LuEdit } from 'react-icons/lu';
import { BsTrash3 } from 'react-icons/bs';
import styles from './styles.module.css'
import { ICollection } from 'src/interfaces/collection';

interface ICollectionProps {
  collection: ICollection;
  onEdit?: () => void;
  onDelete?: () => void;
}

function Collection({
  collection: { title, image, author, subtitle },
  onEdit,
  onDelete
}: ICollectionProps
) {

  return (
    <div className={styles.collection}>
      <img src={image.url} alt="Capa da coleção" />
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
