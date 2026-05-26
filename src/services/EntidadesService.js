export const EntidadesService = {
    getEntidadesData() {
        return [
            {
                id: '2001',
                codigo: 'Mundaka',
                nombreES: 'Ayuntamiento de Mundaka',
                nombreEU: 'Mundakako Udala',
                estado: "Alta"
            },
            {
                id: '2002',
                codigo: 'Mundaka',
                nombreES: 'Ayuntamiento de Mundaka',
                nombreEU: 'Mundakako Udala',
                estado: "Baja"
            },
            {
                id: '2003',
                codigo: 'Mundaka',
                nombreES: 'Ayuntamiento de Mundaka',
                nombreEU: 'Mundakako Udala',
                estado: "Alta"
            },
            {
                id: '2004',
                codigo: 'Mundaka',
                nombreES: 'Ayuntamiento de Mundaka',
                nombreEU: 'Mundakako Udala',
                estado: "Alta"
            },
            {
                id: '2005',
                codigo: 'Mundaka',
                nombreES: 'Ayuntamiento de Mundaka',
                nombreEU: 'Mundakako Udala',
                estado: "Alta"
            },
            {
                id: '2006',
                codigo: 'Mundaka',
                nombreES: 'Ayuntamiento de Mundaka',
                nombreEU: 'Mundakako Udala',
                estado: "Alta"
            },
            {
                id: '2007',
                codigo: 'Mundaka',
                nombreES: 'Ayuntamiento de Mundaka',
                nombreEU: 'Mundakako Udala',
                estado: "Alta"
            },
        ];
    },

    getEntidadesMini() {
        return Promise.resolve(this.getEntidadesData().slice(0, 5));
    },

    getEntidadesSmall() {
        return Promise.resolve(this.getEntidadesData().slice(0, 10));
    },

    getEntidades() {
        return Promise.resolve(this.getEntidadesData());
    },

    getEntidadesWithOrdersSmall() {
        return Promise.resolve(this.getEntidadesWithOrdersData().slice(0, 10));
    },

    getEntidadesWithOrders() {
        return Promise.resolve(this.getEntidadesWithOrdersData());
    }
};