import { useState } from 'react';
import '../../css/components/_Filters.css';

function formatDateLabel(value) {
 if (!value) return '';

 const [year, month, day] = value.split('-');
 return `${day}/${month}/${year}`;
}

function AgendaFilters({ filters = [], selectedFilters = [], onToggleFilter, layout = 'horizontal', showDate = true }) {
 const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
 const [draftRange, setDraftRange] = useState({ start: '', end: '' });
 const [appliedRange, setAppliedRange] = useState({ start: '', end: '' });

 const openDatePicker = (event) => {
  event.preventDefault();
  setDraftRange(appliedRange);
  setIsDatePickerOpen((current) => !current);
 };

 const updateDraftRange = (field, value) => {
  setDraftRange((current) => ({ ...current, [field]: value }));
 };

 const handleToday = (event) => {
  event.preventDefault();
  const today = new Date();
  const year = today.getFullYear();
  const month = `${today.getMonth() + 1}`.padStart(2, '0');
  const day = `${today.getDate()}`.padStart(2, '0');
  const value = `${year}-${month}-${day}`;
  setDraftRange({ start: value, end: value });
 };

 const handleClear = (event) => {
  event.preventDefault();
  setDraftRange({ start: '', end: '' });
  setAppliedRange({ start: '', end: '' });
  setIsDatePickerOpen(false);
 };

 const handleApply = (event) => {
  event.preventDefault();

  const start = draftRange.start;
  const end = draftRange.end;
  const normalizedRange = start && end && start > end
   ? { start: end, end: start }
   : { start, end };

  setAppliedRange(normalizedRange);
  setIsDatePickerOpen(false);
 };

 const rangeLabel = !appliedRange.start && !appliedRange.end
  ? 'DD / MM / YYYY - DD / MM / YYYY'
  : `${formatDateLabel(appliedRange.start || appliedRange.end)} - ${formatDateLabel(appliedRange.end || appliedRange.start)}`;

 return (
  <search className={`BKTT-Filters BKTT-Filters--${layout}`}>
   <form action="/buscar" method="get">
    <div className="filtros-principales">
     <button className="BKTT-Filters__filterBtn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
      <span className="BKTT-Icon fa-light fa-sliders" />
      <span>Filtros</span>
      <span className="BKTT-Icon fa-light fa-plus" />
     </button>
     <fieldset>
      {showDate && (
       <div className="BKTT-Filters__dateWrapper">
        <button className="BKTT-Filters__date" type="button" onClick={openDatePicker}>
         <span className="BKTT-Icon fa-light fa-calendar" />
         <span>{rangeLabel}</span>
        </button>

        {isDatePickerOpen && (
         <div className="BKTT-Filters__datePopover" role="dialog" aria-label="Selector de fechas">
          <div className="BKTT-Filters__dateInputs">
           <label>
            <span>Inicio</span>
            <input
             type="date"
             value={draftRange.start}
             onChange={(event) => updateDraftRange('start', event.target.value)}
            />
           </label>
           <label>
            <span>Fin</span>
            <input
             type="date"
             value={draftRange.end}
             onChange={(event) => updateDraftRange('end', event.target.value)}
            />
           </label>
          </div>

          <div className="BKTT-Filters__dateFooter">
           <button type="button" className="btn btn-link btn-sm" onClick={handleToday}>Hoy</button>
           <button type="button" className="btn btn-outline-secondary btn-sm" onClick={handleClear}>Limpiar</button>
           <button type="button" className="btn btn-primary btn-sm" onClick={handleApply}>Aplicar</button>
          </div>
         </div>
        )}
       </div>
      )}
     </fieldset>
     <fieldset>
      <div className="BKTT-Filters__chips">
       {filters.map((filter) => {
        const isSelected = selectedFilters.includes(filter.id);

        return (
         <button
          key={filter.id}
          type="button"
          className={`BKTT-Filters__chips ${isSelected ? 'is-selected' : ''}`}
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
     </fieldset>

     <button className="BKTT-Filters__order" type="button">
      <span className="BKTT-Icon fa-light fa-arrow-down-arrow-up" />
      <span>Ordenar</span>
      <span className="BKTT-Icon fa-light fa-angle-down" />
     </button>
    </div>
    <div className="collapse" id="collapseExample">
     <div className="card">
      <fieldset className="card-body">
       <legend>Avanzados</legend>
       <select name="horario" id="horario">
        <option value="todos">Todos los horarios</option>
        <option value="mañana">Mañana</option>
        <option value="tarde">Tarde</option>
       </select>
       <label htmlFor="precio-max">Precio máximo:</label>
       <input type="range" id="precio-max" name="precio_max" min="0" max="1000" step="50" />

       <label>
        <input type="radio" name="estado" value="todos" defaultChecked />
        Todos
       </label>
       <label>
        <input type="radio" name="estado" value="en-stock" />
        En stock
       </label>
      </fieldset>
      <div className="card-footer">
       <button type="button" className="btn btn-sm btn-outline-primary">Limpiar</button>
       <button type="button" className="btn btn-sm btn-primary">Aplicar</button>
      </div>
     </div>
    </div>
   </form>
  </search>

 );
}

export default AgendaFilters;