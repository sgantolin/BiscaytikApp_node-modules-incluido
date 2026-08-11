import { Link, useLocation } from 'react-router-dom';
import routes from '../../routes';
import '../../css/components/_BKTTBreadcrumb.css';

export default function BreadCrumbComponent({ items = null }) {
  const location = useLocation();

  const crumbs = items ?? (() => {
    const segments = location.pathname.split('/').filter(Boolean);
    return segments.map((_, index) => {
      const url = '/' + segments.slice(0, index + 1).join('/');
      const label = routes.find(r => r.path === url)?.label || '';
      return { label, url };
    }).filter(c => c.label);
  })();

  return (
    <nav className="container">
      <ol className="BKTT-Breadcrumb__list BKTT-Breadcrumb">
        <li className="BKTT-Breadcrumb__item">
          <Link to="/" className="BKTT-Breadcrumb__link">
            <span className="BKTT-Icon fa-light fa-house"></span>
          </Link>
        </li>
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={i} className={`BKTT-Breadcrumb__item${isLast ? ' is-active' : ''}`}>
              <span className="BKTT-Icon fa-light fa-arrow-right BKTT-Breadcrumb__separator" ></span>
              {isLast
                ? <span className="BKTT-Breadcrumb__text">{crumb.label}</span>
                : <Link to={crumb.url} className="BKTT-Breadcrumb__link">{crumb.label}</Link>
              }
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
