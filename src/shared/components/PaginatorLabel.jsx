import{ useEffect, useRef  } from 'react';

const PaginatorLabel = () => {
    const dropdownRef = useRef(null);

    useEffect(() => {
      const paginatorTextElement = document.createElement('span');
      paginatorTextElement.className = 'filasPag';
      paginatorTextElement.textContent = 'Filas por página';
      const dropdownElement = document.querySelector('.p-paginator .p-dropdown');
      dropdownElement.parentNode.insertBefore(paginatorTextElement, dropdownElement);
  
      return () => {
        dropdownElement.parentNode.removeChild(paginatorTextElement);
      };
    }, []);
  
    return <div ref={dropdownRef} />;
  };
  
  export default PaginatorLabel;