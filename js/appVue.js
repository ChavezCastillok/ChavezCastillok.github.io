window.addEventListener('load', function(){
    const app = new Vue({
        el: '#page',
        data: {
            tasapc: 0.045,
            tasadv: 75000,
            tasadc: 3100,
            ves: 50000,
            cop: 50000,
            usd: 10
        },
        methods: {

        },
        computed: {
            ves_cop(){
                // Cambia el monto ingresado en bs a pesos colombianos
                return (this.ves * this.tasapc).toFixed(2);
            },
            ves_usd(){
                return (this.ves / this.tasadv).toFixed(2);
            },
            cop_ves(){
                // Cambia el monto ingresado en pesos colombianos a bs
                return (this.cop / this.tasapc).toFixed(2);
            },
            cop_usd(){
                return (this.cop / this.tasadc).toFixed(2);
            },
            usd_ves(){
                return (this.usd * this.tasadv).toFixed(2);
            },
            usd_cop(){
                return (this.usd * this.tasadc).toFixed(2);
            }
        },
    });
})