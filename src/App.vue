<template>
    <div id="app">
        <calendar-picker :year="2017" v-model="ranges"/>
    </div>
</template>

<script>
    import CalendarPicker from './components/CalendarPicker'

    export default {
        name: 'app',
        data () {
          return {
              ranges: [
                  [1483484400000, 1485555500000],
                  [1486162800000, 1486162800000],
                  [1493676000000, 1493676000000],
                  [1495231200000, 1495231200000],
                  [1496268000000, 1497650400000],
                  [1498860000000, 1498860000000],
              ]
          }
        },
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
