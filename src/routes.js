import Home from "./pages/Home";

import CatalogoAplicaciones from "./pages/catalogoAplicaciones/CatalogoAplicaciones";
import AsignacionPermisos from "./pages/asignacionPermisos/AsignacionPermisos";
import AsignarPermisosCrear from "./pages/asignacionPermisos/AsignarPermisosCrear";
import AsignarPermisosEditar from "./pages/asignacionPermisos/AsignarPermisosEditar";
import AsignarPermisosVer from "./pages/asignacionPermisos/AsignarPermisosVer";
import GestionUsuarios from "./pages/gestionUsuarios/GestionUsuarios";
import GestionUsuariosCrear from "./pages/gestionUsuarios/GestionUsuariosCrear";
import GestionUsuariosEditar from "./pages/gestionUsuarios/GestionUsuariosEditar";
import GestionUsuariosVer from "./pages/gestionUsuarios/GestionUsuariosVer";
import UsuariosAdministradores from "./pages/UsuariosAdministradores/usuariosAdministradores";
import GenerarListados from "./pages/listados/GenerarListados";
import BajaMasivaUsuarios from "./pages/bajaMasivaUsuarios/BajaMasivaUsuarios";
import ReactivacionMasivaUsuarios from "./pages/reactivacionMasivaUsuarios/ReactivacionMasivaUsuarios";
import Permisos from "./pages/permisos/Permisos";
import PermisosCrear from "./pages/permisos/PermisosCrear";
import PermisosEditar from "./pages/permisos/PermisosEditar";
import PermisosVer from "./pages/permisos/PermisosVer";
import GruposDePermisos from "./pages/gruposDePermisos/GruposDePermisos";
import GruposDePermisosCrear from "./pages/gruposDePermisos/GruposDePermisosCrear";
import GruposDePermisosEditar from "./pages/gruposDePermisos/GruposDePermisosEditar";
import GruposDePermisosVer from "./pages/gruposDePermisos/GruposDePermisosVer";
import PerfilesCrear from "./pages/perfiles/PerfilesCrear";
import PerfilesEditar from "./pages/perfiles/PerfilesEditar";
import PerfilesVer from "./pages/perfiles/PerfilesVer";
import Perfiles from "./pages/perfiles/Perfiles";
import PermisoAGrupos from "./pages/accionesMasivas/PermisoAGrupos";
import GrupoAPerfiles from "./pages/accionesMasivas/GrupoAPerfiles";
import PermisosAFormularios from "./pages/accionesMasivas/PermisosAFormularios";
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
import AsignarPermisosClonar from "./pages/asignacionPermisos/AsignarPermisosClonar";

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

    { path: '/permisos', element: Permisos, label: 'Permisos'},
        { path: '/permisos/crear-permiso', element: PermisosCrear, label: 'Crear permiso'},
        { path: '/permisos/editar-permiso', element: PermisosEditar, label: 'Editar permiso'},
        { path: '/permisos/ver-permiso', element: PermisosVer, label: 'Ver permiso'},
    
    { path: '/grupos-de-permisos', element: GruposDePermisos, label: 'Grupos de permisos'},
        { path: '/grupos-de-permisos/crear-grupo', element: GruposDePermisosCrear, label: 'Crear grupo'},
        { path: '/grupos-de-permisos/editar-grupo', element: GruposDePermisosEditar, label: 'Editar grupo'},
        { path: '/grupos-de-permisos/ver-grupo', element: GruposDePermisosVer, label: 'Ver grupo'},

    { path: '/perfiles', element: Perfiles, label: 'Perfiles'},
        { path: '/perfiles/crear-perfil', element: PerfilesCrear, label: 'Crear perfil'},
        { path: '/perfiles/editar-perfil', element: PerfilesEditar, label: 'Editar perfil'},
        { path: '/perfiles/ver-perfil', element: PerfilesVer, label: 'Ver perfil'},

    { path: '/asignar-permiso-a-grupos-de-permisos', element: PermisoAGrupos, label: 'Asignar permiso a grupos de permisos'},
    { path: '/asignar-grupo-de-permisos-a-perfiles', element: GrupoAPerfiles, label: 'Asignar grupo de permisos a perfiles'},
    { path: '/crear-permisos-asociados-a-formularios', element: PermisosAFormularios, label: 'Crear permisos asociados a formularios'},

    { path: '/asignacion-de-permisos', element: AsignacionPermisos, label: 'Asignación de permisos'},
        { path: '/asignacion-de-permisos/crear-permisos', element: AsignarPermisosCrear, label: 'Crear permisos' },
        { path: '/asignacion-de-permisos/editar-permisos', element: AsignarPermisosEditar, label: 'Editar permisos' },
        { path: '/asignacion-de-permisos/ver-permisos', element: AsignarPermisosVer, label: 'Ver permisos' },
        { path: '/asignacion-de-permisos/clonar-permisos', element: AsignarPermisosClonar, label: 'Clonar permisos' },
    
    { path: '/gestion-de-usuarios', element: GestionUsuarios, label: 'Gestión de usuarios'},
        { path: '/gestion-de-usuarios/crear-usuario', element: GestionUsuariosCrear, label: 'Crear usuario'},
        { path: '/gestion-de-usuarios/editar-usuario', element: GestionUsuariosEditar, label: 'Editar usuario'},
        { path: '/gestion-de-usuarios/detalle-usuario', element: GestionUsuariosVer, label: 'Detalle usuario'},
    
    { path: '/usuarios-administradores', element: UsuariosAdministradores, label: 'Usuarios administradores'},
    { path: '/listados', element: GenerarListados, label: 'Listados'},
    { path: '/baja-masiva-de-usuarios', element: BajaMasivaUsuarios, label: 'Baja masiva de usuarios'},
    { path: '/reactivacion-masiva-de-usuarios', element: ReactivacionMasivaUsuarios, label: 'Reactivación masiva de usuarios'},
    // no funciona con rutas hijas con lo cual se han puesto en el mismo nivel todas las rutas
    // { path: '/asignacion-de-permisos/*', element: AsignacionPermisos, label: 'Asignación de Permisos',
    //     children: [
    //         { path: '/asignacion-de-permisos/asignar-permisos', element: AsignarPermisosEditar, label: 'Asignar Permisos'},
        
    //     ]
    // },
];

export default routes;