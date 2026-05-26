export const PermisosService = {
    getPermisosData() {
        return [
            {
                id: '1000',
                codigo: 'P-01-00001',
                aplicacion: 'GAM',
                nombrePermiso: 'Formulario de padrón municipal > Habitantes',
                elemento: 'Formulario',
                tipoAcceso: 'Consulta',
                estado: "Alta"
            },
            {
                id: '1002',
                codigo: 'P-01-00002',
                aplicacion: 'GAM',
                nombrePermiso: 'Formulario de padrón municipal > Habitantes',
                elemento: 'Botón',
                tipoAcceso: 'Edición e inserción',
                estado: "Baja"
            },
            {
                id: '1003',
                codigo: 'P-01-00003',
                aplicacion: 'GAM',
                nombrePermiso: 'Formulario de padrón municipal > Padrón',
                elemento: 'Formulario',
                tipoAcceso: 'Consulta',
                estado: "Alta"
            },
            {
                id: '1004',
                codigo: 'P-02-00001',
                aplicacion: 'XXX',
                nombrePermiso: 'Formulario de padrón municipal > Padrón',
                elemento: 'Formulario',
                tipoAcceso: 'Consulta',
                estado: "Alta"
            },
            {
                id: '1005',
                codigo: 'P-02-00002',
                aplicacion: 'XXX',
                nombrePermiso: 'Menú de padrón municipal',
                elemento: 'Menu',
                tipoAcceso: 'Edición e inserción',
                estado: "Alta"
            },
            {
                id: '1006',
                codigo: 'P-02-00003',
                aplicacion: 'XXX',
                nombrePermiso: 'Menú de padrón municipal',
                elemento: 'Menu',
                tipoAcceso: 'Edición e inserción',
                estado: "Alta"
            },
            {
                id: '1007',
                codigo: 'P-02-00004',
                aplicacion: 'XXX',
                nombrePermiso: 'Menú de padrón municipal',
                elemento: 'Menu',
                tipoAcceso: 'Edición e inserción',
                estado: "Alta"
            },
        ];
    },

    getPermisosMini() {
        return Promise.resolve(this.getPermisosData().slice(0, 5));
    },

    getPermisosSmall() {
        return Promise.resolve(this.getPermisosData().slice(0, 10));
    },

    getPermisos() {
        return Promise.resolve(this.getPermisosData());
    },

    getPermisosWithOrdersSmall() {
        return Promise.resolve(this.getPermisosWithOrdersData().slice(0, 10));
    },

    getPermisosWithOrders() {
        return Promise.resolve(this.getPermisosWithOrdersData());
    }
};