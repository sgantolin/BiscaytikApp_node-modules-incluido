export const GruposPermisosService = {
    getGruposPermisosData() {
        return [
            {
                id: '1000',
                identificador: 'GP-01-00001',
                codigo: 'CGP',
                aplicacion: 'GAM',
                nombreGrupo: 'Nombre del grupo de permisos',
                estado: 'Alta'
            },
            {
                id: '1002',
                identificador: 'GP-01-00002',
                codigo: 'CGP',
                aplicacion: 'GAM',
                nombreGrupo: 'Nombre del grupo de permisos',
                estado: 'Baja'
            },
            {
                id: '1003',
                identificador: 'GP-01-00003',
                codigo: 'CGP',
                aplicacion: 'GAM',
                nombreGrupo: 'Nombre del grupo de permisos',
                estado: 'Baja'
            },
            {
                id: '1004',
                identificador: 'GP-02-00001',
                codigo: 'CGP',
                aplicacion: 'XXX',
                nombreGrupo: 'Nombre del grupo de permisos',
                estado: 'Bja'
            },
            {
                id: '1005',
                identificador: 'GP-02-00002',
                codigo: 'CGP',
                aplicacion: 'XXX',
                nombreGrupo: 'Nombre del grupo de permisos',
                estado: 'Alta'
            },
            {
                id: '1006',
                identificador: 'GP-02-00003',
                codigo: 'CGP',
                aplicacion: 'XXX',
                nombreGrupo: 'Nombre del grupo de permisos',
                estado: 'Alta'
            },
            {
                id: '1007',
                identificador: 'GP-02-00004',
                codigo: 'CGP',
                aplicacion: 'XXX',
                nombreGrupo: 'Nombre del grupo de permisos',
                estado: 'Alta'
            },
        ];
    },

    getGruposPermisosMini() {
        return Promise.resolve(this.getGruposPermisosData().slice(0, 5));
    },

    getGruposPermisosSmall() {
        return Promise.resolve(this.getGruposPermisosData().slice(0, 10));
    },

    getGruposPermisos() {
        return Promise.resolve(this.getGruposPermisosData());
    },

    getGruposPermisosWithOrdersSmall() {
        return Promise.resolve(this.getGruposPermisosWithOrdersData().slice(0, 10));
    },

    getGruposPermisosWithOrders() {
        return Promise.resolve(this.getGruposPermisosWithOrdersData());
    }
};