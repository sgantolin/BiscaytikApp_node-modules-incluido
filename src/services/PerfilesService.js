export const PerfilesService = {
    getPerfilesData() {
        return [
            {
                id: '1001',
                codigo: 'PF-01-00001',
                nombrePerfil: 'Nombre del perfil 01',
                estado: 'Alta',
            },
            {
                id: '1002',
                codigo: 'PF-01-00002',
                nombrePerfil: 'Nombre del perfil 02',
                estado: 'Baja',
            },
            {
                id: '1003',
                codigo: 'PF-01-00003',
                nombrePerfil: 'Nombre del perfil 03',
                estado: 'Baja',
            },
            {
                id: '1004',
                codigo: 'PF-02-00001',
                nombrePerfil: 'Nombre del perfil 04',
                estado: 'Alta',
            },
            {
                id: '1005',
                codigo: 'PF-02-00002',
                nombrePerfil: 'Nombre del perfil 05',
                estado: 'Baja',
            },
            {
                id: '1006',
                codigo: 'PF-02-00003',
                nombrePerfil: 'Nombre del perfil 06',
                estado: 'Alta',
            },
            {
                id: '1007',
                codigo: 'PF-02-00004',
                nombrePerfil: 'Nombre del perfil 07',
                estado: 'Alta',
            },
        ];
    },

    getPerfilesMini() {
        return Promise.resolve(this.getPerfilesData().slice(0, 5));
    },

    getPerfilesSmall() {
        return Promise.resolve(this.getPerfilesData().slice(0, 10));
    },

    getPerfiles() {
        return Promise.resolve(this.getPerfilesData());
    },

    getPerfilesWithOrdersSmall() {
        return Promise.resolve(this.getPerfilesWithOrdersData().slice(0, 10));
    },

    getPerfilesWithOrders() {
        return Promise.resolve(this.getPerfilesWithOrdersData());
    }
};