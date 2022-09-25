<template>
  <div>
    <canvas ref="barChart" id="myChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
export default {
  porps: ["propsData"],
  mounted() {
    const myChart = new this.$_Chart(this.$refs.barChart, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: this.propsData,
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
};
</script>

<style lang="scss" scoped></style>
