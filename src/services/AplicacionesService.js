export const AplicacionesService = {
    getAplicacionesData() {
        return [
            {
                id: '1001',
                codigo: 'GAM',
                nombreES: 'Gestor Administrativo Municipal',
                nombreEU: 'Udal Administratizio Kudeatzailea',
                estado: "Alta"
            },
            {
                id: '1002',
                codigo: 'GAM',
                nombreES: 'Gestor Administrativo Municipal',
                nombreEU: 'Udal Administratizio Kudeatzailea',
                estado: "Baja"
            },
            {
                id: '1003',
                codigo: 'GAM',
                nombreES: 'Gestor Administrativo Municipal con texto largo para hacer pruebas de overflow',
                nombreEU: 'Udal Administratizio Kudeatzailea',
                estado: "Alta"
            },
            {
                id: '1004',
                codigo: 'GAM',
                nombreES: 'Gestor Administrativo Municipal',
                nombreEU: 'Udal Administratizio Kudeatzailea',
                estado: "Alta"
            },
            {
                id: '1005',
                codigo: 'GAM',
                nombreES: 'Gestor Administrativo Municipal',
                nombreEU: 'Udal Administratizio Kudeatzailea',
                estado: "Alta"
            },
            {
                id: '1006',
                codigo: 'GAM',
                nombreES: 'Gestor Administrativo Municipal',
                nombreEU: 'Udal Administratizio Kudeatzailea',
                estado: "Alta"
            },
            {
                id: '1007',
                codigo: 'GAM',
                nombreES: 'Gestor Administrativo Municipal',
                nombreEU: 'Udal Administratizio Kudeatzailea',
                estado: "Alta"
            },
            {
                id: '1008',
                codigo: 'GAM',
                nombreES: 'Gestor Administrativo Municipal',
                nombreEU: 'Udal Administratizio Kudeatzailea',
                estado: "Alta"
            },
            {
                id: '1009',
                codigo: 'GAM',
                nombreES: 'Gestor Administrativo Municipal',
                nombreEU: 'Udal Administratizio Kudeatzailea',
                estado: "Baja"
            },
            {
                id: '1010',
                codigo: 'GAM',
                nombreES: 'Gestor Administrativo Municipal',
                nombreEU: 'Udal Administratizio Kudeatzailea',
                estado: "Alta"
            },
            {
                id: '1011',
                codigo: 'GAM',
                nombreES: 'Gestor Administrativo Municipal',
                nombreEU: 'Udal Administratizio Kudeatzailea',
                estado: "Alta"
            },
        ];
    },

    getAplicacionesMini() {
        return Promise.resolve(this.getAplicacionesData().slice(0, 5));
    },

    getAplicacionesSmall() {
        return Promise.resolve(this.getAplicacionesData().slice(0, 10));
    },

    getAplicaciones() {
        return Promise.resolve(this.getAplicacionesData());
    },

    getAplicacionesWithOrdersSmall() {
        return Promise.resolve(this.getAplicacionesWithOrdersData().slice(0, 10));
    },

    getAplicacionesWithOrders() {
        return Promise.resolve(this.getAplicacionesWithOrdersData());
    }
};