import '../../css/components/_Filters.css';

function AgendaFilters({ filters = [], selectedFilters = [], onToggleFilter, layout = 'horizontal', showDate = true }) {
  return (
    <div className={`BKTT-AgendaFilters BKTT-AgendaFilters--${layout}`}>
      <button className="BKTT-AgendaFilters__filterBtn" type="button">
        <span className="BKTT-Icon fa-light fa-sliders" />
        <span>Filtros</span>
        <span className="BKTT-Icon fa-light fa-plus" />
      </button>

      {showDate && (
        <button className="BKTT-AgendaFilters__date" type="button">
          <span className="BKTT-Icon fa-light fa-calendar" />
          <span>DD / MM / YYYY - DD / MM / YYYY</span>
        </button>
      )}

      <div className="BKTT-AgendaFilters__chips">
        {filters.map((filter) => {
          const isSelected = selectedFilters.includes(filter.id);

          return (
            <button
              key={filter.id}
              type="button"
              className={`BKTT-AgendaFilters__chip ${isSelected ? 'is-selected' : ''}`}
              onClick={() => onToggleFilter?.(filter.id)}
            >
              {filter.icon && (
                <span className={`BKTT-Icon ${filter.icon}`} />
              )}
              <span>{filter.label}</span>
              {isSelected && (
                <span className="BKTT-Icon fa-light fa-xmark" />
              )}
            </button>
          );
        })}
      </div>

      <button className="BKTT-AgendaFilters__order" type="button">
        <span className="BKTT-Icon fa-light fa-arrow-down-arrow-up" />
        <span>Ordenar</span>
        <span className="BKTT-Icon fa-light fa-angle-down" />
      </button>
    </div>
  );
}

export default AgendaFilters;