<template>
   <div class="statistik_malumotlar">
       <div class="statistika_content">
            <div ref="chart" class="charts"></div>
            <div class="kurs">
                <div ref="ariza" class="kurs_ariza_soni"></div>
                <div ref="akademiya" class="akademiya"></div>
            </div>
       </div>
   </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  data() {
    return {
      chartInstance: null,
      chartAriza:  null,
      chartAcademiya: null
    };
  },
  mounted() {
    // Initialize the chart when the component is mounted
    this.initChart();
    this.kursAriza();
    this.Academiya();
  }, 
  methods: {
    initChart() {
      const chartContainer = this.$refs.chart;
      this.chartInstance = echarts.init(chartContainer);
      const chartData = {
        xAxis: {
          data: ['Andijon', 'Fargona', 'Namangan', 'Qashqadaryo', 'Surxondaryo',
          'Toshkent', 'Samarqand', 'Buxoro', 'Jizzax','Navoiy','Xorazm'
          ],
        },
        tooltip: {},
        yAxis: {
        },
        series: [
          {
            name: "talabalar",
            data: [120, 200, 150, 80, 200, 10, 5, 4, 12, 6, 11],
            type: 'bar'
          },
        ],
        title: {
            text: `Talaba ( Hududlar bo'yicha)`
        },
      };
      this.chartInstance.setOption(chartData);
    },
    kursAriza() {
      const chartContainers = this.$refs.ariza;
      this.chartAriza = echarts.init(chartContainers);
      const chartData = {
        xAxis: {
        },
        tooltip: {},
        yAxis: {
        },
        series: [
          {
            name: `Talabalar`,
            data: [
                {value: 200, name: "1-kurs"},
                {value: 150, name: "2-kurs"},
                {value: 100, name: "3-kurs"},
                {value: 50, name: "4-kurs"},
            ],
            type: 'pie',
            // color:[
            //     'red','black','blue','yellow'
            // ]
          },
        ],
        title: {
            text: `kurs bo'yicha arizalar soni`
        },
      };
      this.chartAriza.setOption(chartData);
      this.chartAriza.on('click', (params) => {
          alert(params)
      })
    },
    Academiya() {
      const chartContainers = this.$refs.akademiya;
      this.chartAcademiya = echarts.init(chartContainers);
      const chartData = {
        xAxis: {
        },
        tooltip: {},
        yAxis: {
        },
        series: [
          {
            name: `Talabalar`,
            data: [
                {value: 100, name: "1-kurs"},
                {value: 70, name: "2-kurs"},
                {value: 40, name: "3-kurs"},
                {value: 20, name: "4-kurs"},
            ],
            type: 'line',
            // color:[
            //     'red','black','blue','yellow'
            // ]
          },
        ],
        title: {
            text: `kurs bo'yicha akademiyalar soni`
        },
      };
      this.chartAcademiya.setOption(chartData);
      this.chartAcademiya.on('click', (params) => {
          alert(params)
      })
    },
  },
  beforeDestroy() {
    if (this.chartInstance) {
      this.chartInstance.dispose();
    }
    if(this.chartAriza){
        this.chartAriza.dispose()
    }
    if(this.chartAcademiya){
        this.chartAcademiya.dispose()
    }
  },
};
</script>

<style scoped>
.statistik_malumotlar{
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.statistik_malumotlar .statistika_content{
    width: 90%;
    padding: 20px 0px;
}
.statistik_malumotlar .charts{
   width: 90%; 
   height: 400px;
   margin: 0 auto;
}
.statistik_malumotlar .kurs{
    width: 90%;
    display: flex;
    justify-content: space-between;
}
.statistik_malumotlar .kurs_ariza_soni{
    width: 40%;
    height: 350px;
}
.statistik_malumotlar .akademiya{
    width: 40%;
    height: 350px; 
}
@media(max-width: 375px){
.statistik_malumotlar{
    width: 100%;
    min-height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.statistik_malumotlar .statistika_content{
    width: 90%;
    padding: 20px 0px;
}
.statistik_malumotlar .charts{
   width: 90%; 
   height: 400px;
   margin: 0 auto;
}
.statistik_malumotlar .kurs{
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.statistik_malumotlar .kurs_ariza_soni{
    width: 80%;
    height: 350px;
}
.statistik_malumotlar .akademiya{
    width: 90%;
    height: 350px; 
} 
}
</style>