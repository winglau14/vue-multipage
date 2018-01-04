<template>
    <div id="app">
        {{msg}}
        <Test></Test>
    </div>
</template>

<script>
    import Test from '../../components/Test1'
    export default {
        name: 'app',
        data(){
            return{
                msg:'66666'
            }
        },
        components:{
            Test
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
