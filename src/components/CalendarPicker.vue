<template>
    <div>
        <div class="rangepicker">
            <div class="rangepicker_month" v-for="month in months">
                <div class="rangepicker_monthtitle">
                    {{ month.getName() }}
                </div>
                <div class="rangepicker_days">
                    <div v-for="day in days">{{ day }}</div>
                </div>
                <div class="rangepicker_numbers">
                    <div class="rangepicker_day"
                         @mousedown="startDrag(day)"
                         @mouseover="overDay(day)"
                         @dblclick="removeRange(day)"
                         v-for="day in month.getDays()"
                         :class="classForDay(day, month, newRange)">
                        {{ day.getDate() }}
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Month from "../entity/Month"
    import Ranges from "../entity/Ranges";
    import Range from "../entity/Range";

    export default {
        props: {
            year: Number,
            value: Array
        },

        data() {
            return {
                months: [],
                days: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
                ranges: [],
                newRange: null,
                cursor: 1,
                startDate: null
            }
        },

        mounted() {
            this.ranges = Ranges.fromTimestamps(this.value)
            this.months = Month.createMonthForYear(this.year)
            document.addEventListener('mouseup', this.onRelease)
        },

        destroyed() {
            document.removeEventListener('mouseup', this.onRelease)
        },

        methods: {
            classForDay(day, month, newRange) {
                let classes = []
                let range = this.ranges.contains(day)

                if (range !== null) {
                    classes.push('rangepicker_range')
                    if (range.isStart(day)) {
                        classes.push('rangepicker_range_start')
                    }
                    if (range.isEnd(day)) {
                        classes.push('rangepicker_range_end')
                    }
                }

                if (newRange !== null) {
                    if (newRange.contains(day)) {
                        classes = ['rangepicker_newrange']
                        if (newRange.isStart(day)) {
                            classes.push('rangepicker_range_start')
                        }
                        if (newRange.isEnd(day)) {
                            classes.push('rangepicker_range_end')
                        }
                    }
                }

                if (!month.contains(day)) {
                    classes.push('rangepicker_out')
                }

                return classes
            },

            startDrag(day) {
                let range = this.ranges.contains(day)
                if (range) {
                    if (range.isStart(day)) {
                        this.newRange = range
                        this.ranges.removeRange(range)
                        this.startDate = range.getEnd()
                        this.cursor = 0
                    } else if (range.isEnd(day)) {
                        this.newRange = range
                        this.ranges.removeRange(range)
                        this.startDate = range.getStart()
                        this.cursor = 1
                    }
                } else {
                    this.startDate = day
                    this.newRange = new Range(day, day)
                }
            },

            overDay(day) {
                if (this.newRange !== null) {
                    try {
                        if (this.cursor === 1) {
                            this.newRange.setEnd(day)
                        } else {
                            this.newRange.setStart(day)
                        }
                    } catch (e) {
                        this.cursor = Math.abs(this.cursor - 1)
                        this.newRange = new Range(this.startDate, this.startDate)
                        this.overDay(day)
                    }
                }
            },

            onRelease() {
                if (this.newRange) {
                    this.ranges.addRange(this.newRange)
                }
                this.newRange = null;
            },

            removeRange(day) {
                let range = this.ranges.contains(day)
                if (range) {
                    this.ranges.removeRange(range)
                }
            }
        }
    }
</script>

<style src="../assets/scss/rangepicker.scss" lang="scss"></style>