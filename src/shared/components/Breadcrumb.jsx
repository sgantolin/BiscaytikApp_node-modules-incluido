import { BreadCrumb } from 'primereact/breadcrumb';
import { Link, useLocation } from "react-router-dom";
import routes from "../../routes";

export default function BreadCrumbComponent() {
    
    const linkTemplate = (item, options) => {
        return (
            <Link to={item.url} className={options.className}>
                <span>{item.label}</span>
            </Link>
        );
    };

    const homeTemplate = (home, options) => {
        return (
            <Link to={home.url} className={options.className}>
                <span>{home.label}</span>
            </Link>
        );
    };

    const location = useLocation();
    
    const items = location.pathname.split('/').map((path, index, arr) => {
        const url = `/${arr.slice(1, index + 1).join('/')}`;
        const label = routes.find(r => r.path === url)?.label || '';
        const children = routes.find((r) => r.path === url)?.children || [];
      
        const item = { 
          label, 
          url,
          template: linkTemplate,
          className: 'p-breadcrumb-item'
        };
      
        // Renderizar la ruta hija debajo del elemento padre
        if (children && children.length > 0) {
          item.children = children.map(child => ({
            label: child.label,
            url: child.path,
            template: linkTemplate,
            className: 'p-breadcrumb-child-item'
          }));
        }
      
        return item;
      });

    if (items.length > 1 && items[0].label === 'Inicio') {
        items.shift();
    }

    const home = {
        label: 'Inicio',
        icon: 'fa-regular fa-house-blank', 
        url: '/inicio',
        className: 'p-breadcrumb-item',
        template: homeTemplate,
    }

    return (
        <div className="container">
            <BreadCrumb model={items} home={home} />
        </div>
        
    )
}