const {createApp} = Vue;

let vm=createApp({
    data(){
        return{
            fname:'Ion',
            lname:'Popescu',
            adress:'Brasov',
            message:'Imi place JS'
        }
    },
    methods:{
        myName:function(){
            // return 'Eu ma numesc ' + this.fname + '' +this.lname +' si locuiesc in' +this.adress;
            return `Eu ma numesc ${this.fname} ${this.lname} si locuiesc in ${this.adress}`;
        }
    }
}).mount('#app');