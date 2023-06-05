import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import { IoCloseOutline } from 'react-icons/io5';
import styles from './styles.module.css'

interface ISearchProps {
  open?: boolean;
  onChange: (text: string) => void;
  onToggle: (isOpen: boolean) => void;
}


function Search({ open, onChange, onToggle, ...props }: ISearchProps) {
  const [isOpen, setIsOpen] = useState(open ?? false);

  function toggle() {
    setIsOpen(!isOpen);
    onToggle(!isOpen);
  }

  return (
    <div className={styles.search} {...props}>
      {!isOpen && <div className={styles.close}>
        <BsSearch title="Buscar" size={25} aria-label="search-icon" onClick={() => toggle()} />
      </div>}

      {isOpen && <div className={styles.open}>
        <input type="text" name="search-input" id="search-input" onChange={e => onChange(e.target.value)} />
        <IoCloseOutline title="Fechar" size={35} aria-label="search-close" onClick={() => toggle()} />
      </div>}
    </div>
  )
}

export default Search;
