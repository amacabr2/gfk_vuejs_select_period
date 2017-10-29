<template>
    <div id="app">
        <calendar-picker :year="2017"/>
    </div>
</template>

<script>
    import CalendarPicker from './components/CalendarPicker'

    export default {
        name: 'app',
        components: {
            CalendarPicker
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }
</style>
