<template>
  <div>
    <section>
      <div class="user-container">
        <div class="user">πββοΈ</div>
        <div class="user-description">
          <slot name="username">
            <!-- μμ μ»΄ν¬λνΈμμ μ μν  μμ­ -->
          </slot>
          <div class="time">
            <slot name="time">
              <!-- μμ μ»΄ν¬λνΈμμ μ μν  μμ­ -->
            </slot>
            <slot name="karma">
              <!-- μμ μ»΄ν¬λνΈμμ μ μν  μμ­ -->
            </slot>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    info: Object,
  },
};
</script>

<style scoped>
section {
  padding: 2rem;
}

.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.user {
  font-size: 2.5rem;
}

.user-description {
  padding-left: 1rem;
}

.time {
  font-size: 0.7rem;
}
</style>
