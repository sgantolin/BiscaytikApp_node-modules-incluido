import Home from "./pages/Home";
import Listado from "./pages/Listado";
import Detalle from "./pages/Detalle";
import Patrimonio from "./pages/Patrimonio";
import ObraListado from "./pages/ObraListado";
import ObraDetalle from "./pages/ObraDetalle";
import BKTTBlockDemo from "./pages/BKTTBlockDemo";

import CatalogoAplicaciones from "./pages/catalogoAplicaciones/CatalogoAplicaciones";
import GestionUsuarios from "./pages/gestionUsuarios/GestionUsuarios";
import GestionUsuariosCrear from "./pages/gestionUsuarios/GestionUsuariosCrear";
import GestionUsuariosEditar from "./pages/gestionUsuarios/GestionUsuariosEditar";
import GestionUsuariosVer from "./pages/gestionUsuarios/GestionUsuariosVer";
import UsuariosAdministradores from "./pages/UsuariosAdministradores/usuariosAdministradores";
import GenerarListados from "./pages/listados/GenerarListados";
import BajaMasivaUsuarios from "./pages/bajaMasivaUsuarios/BajaMasivaUsuarios";
import ReactivacionMasivaUsuarios from "./pages/reactivacionMasivaUsuarios/ReactivacionMasivaUsuarios";
import RelacionAplicacionEntidad from "./pages/relacionAplicacionEntidad/RelacionAplicacionEntidad";
import RelacionAplicacionEntidadCrear from "./pages/relacionAplicacionEntidad/RelacionAplicacionEntidadCrear";
import RelacionAplicacionEntidadEditar from "./pages/relacionAplicacionEntidad/RelacionAplicacionEntidadEditar";
import RelacionAplicacionEntidadVer from "./pages/relacionAplicacionEntidad/RelacionAplicacionEntidadVer";
import CatalogoEntidades from "./pages/catalogoEntidades/CatalogoEntidades";
import CatalogoEntidadesCrear from "./pages/catalogoEntidades/CatalogoEntidadesCrear";
import CatalogoEntidadesEditar from "./pages/catalogoEntidades/CatalogoEntidadesEditar";
import CatalogoEntidadesVer from "./pages/catalogoEntidades/CatalogoEntidadesVer";
import CatalogoAplicacionesCrear from "./pages/catalogoAplicaciones/CatalogoAplicacionesCrear";
import CatalogoAplicacionesEditar from "./pages/catalogoAplicaciones/CatalogoAplicacionesEditar";
import CatalogoAplicacionesVer from "./pages/catalogoAplicaciones/CatalogoAplicacionesVer";
import CatalogoAplicacionesElementos from "./pages/catalogoAplicaciones/CatalogoAplicacionesElementos";
import CatalogoAplicacionesElementosCrear from "./pages/catalogoAplicaciones/CatalogoAplicacionesElementosCrear";
import CatalogoAplicacionesElementosEditar from "./pages/catalogoAplicaciones/CatalogoAplicacionesElementosEditar";
import CatalogoAplicacionesElementosVer from "./pages/catalogoAplicaciones/CatalogoAplicacionesElementosVer";

const routes = [
    { path: '/', element: Home, exact: true, label: 'Inicio' },
    { path: '/inicio', element: Home, label: 'Inicio'},
    { path: '/catalogo-aplicaciones', element: CatalogoAplicaciones, label: 'Catálogo de aplicaciones'},
        { path: '/catalogo-aplicaciones/crear-aplicacion', element: CatalogoAplicacionesCrear, label: 'Crear aplicación'},
        { path: '/catalogo-aplicaciones/editar-aplicacion', element: CatalogoAplicacionesEditar, label: 'Editar aplicación'},
        { path: '/catalogo-aplicaciones/ver-aplicacion', element: CatalogoAplicacionesVer, label: 'Ver aplicación'},
            { path: '/catalogo-aplicaciones/elementos-de-aplicacion', element: CatalogoAplicacionesElementos, label: 'Elementos de la aplicación'},
                { path: '/catalogo-aplicaciones/elementos-de-aplicacion/crear-elemento', element: CatalogoAplicacionesElementosCrear, label: 'Crear elemento'},
                { path: '/catalogo-aplicaciones/elementos-de-aplicacion/editar-elemento', element: CatalogoAplicacionesElementosEditar, label: 'Editar elemento'},
                { path: '/catalogo-aplicaciones/elementos-de-aplicacion/ver-elemento', element: CatalogoAplicacionesElementosVer, label: 'Ver elemento'},

    { path: '/catalogo-entidades', element: CatalogoEntidades, label: 'Catálogo de entidades'},
        { path: '/catalogo-entidades/crear-entidad', element: CatalogoEntidadesCrear, label: 'Crear entidad'},
        { path: '/catalogo-entidades/editar-entidad', element: CatalogoEntidadesEditar, label: 'Editar entidad'},
        { path: '/catalogo-entidades/ver-entidad', element: CatalogoEntidadesVer, label: 'Ver entidad'},

    { path: '/relacion-aplicacion-entidad', element: RelacionAplicacionEntidad, label: 'Relación Aplicación-Entidad'},
        { path: '/relacion-aplicacion-entidad/crear-relacion', element: RelacionAplicacionEntidadCrear, label: 'Relación Aplicación-Entidad'},
        { path: '/relacion-aplicacion-entidad/editar-relacion', element: RelacionAplicacionEntidadEditar, label: 'Editar relación Aplicación-Entidad'},
        { path: '/relacion-aplicacion-entidad/ver-relacion', element: RelacionAplicacionEntidadVer, label: 'Ver relación Aplicación-Entidad'},

    { path: '/gestion-de-usuarios', element: GestionUsuarios, label: 'Gestión de usuarios'},
        { path: '/gestion-de-usuarios/crear-usuario', element: GestionUsuariosCrear, label: 'Crear usuario'},
        { path: '/gestion-de-usuarios/editar-usuario', element: GestionUsuariosEditar, label: 'Editar usuario'},
        { path: '/gestion-de-usuarios/detalle-usuario', element: GestionUsuariosVer, label: 'Detalle usuario'},
    
    { path: '/usuarios-administradores', element: UsuariosAdministradores, label: 'Usuarios administradores'},
    { path: '/listados', element: GenerarListados, label: 'Listados'},
    { path: '/baja-masiva-de-usuarios', element: BajaMasivaUsuarios, label: 'Baja masiva de usuarios'},
    { path: '/reactivacion-masiva-de-usuarios', element: ReactivacionMasivaUsuarios, label: 'Reactivación masiva de usuarios'},
    { path: '/listado', element: Listado, label: 'Listado'},
    { path: '/detalle', element: Detalle, label: 'Detalle'},
    { path: '/patrimonio', element: Patrimonio, label: 'Patrimonio'},
    { path: '/obra-listado', element: ObraListado, label: 'Obras'},
    { path: '/obra-detalle', element: ObraDetalle, label: 'Detalle obra'},
    { path: '/bkttblock-demo', element: BKTTBlockDemo, label: 'BKTTBlock Demo'},
    // no funciona con rutas hijas con lo cual se han puesto en el mismo nivel todas las rutas
    // { path: '/asignacion-de-permisos/*', element: AsignacionPermisos, label: 'Asignación de Permisos',
    //     children: [
    //         { path: '/asignacion-de-permisos/asignar-permisos', element: AsignarPermisosEditar, label: 'Asignar Permisos'},
        
    //     ]
    // },
];

export default routes;