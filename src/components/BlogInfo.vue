<script setup>
</script>

<template>
  <div class="blog-container">
    <p class="welcome-text">Welcome to the main blog page!</p>
    <p class="description">
      On this page, you can see all posts for the selected category. Enjoy and
      have fun!
    </p>
    <div class="info-section">
      <p class="info-header">General info:</p>
      <slot name="general-info"></slot>
    </div>
    <div class="details-section">
      <p class="details-header">Details:</p>
      <slot name="details-info"></slot>
    </div>
  </div>
</template>

<style>
.blog-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.welcome-text {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 15px;
}

.description {
  font-size: 1.1rem;
  color: #666;
  text-align: center;
  margin-bottom: 30px;
}

.info-section, .details-section {
  margin-bottom: 20px;
}

.info-header, .details-header {
  font-size: 1.3rem;
  font-weight: bold;
  color: #555;
  margin-bottom: 10px;
  text-transform: uppercase;
}

slot {
  font-size: 1rem;
  color: #444;
}

p {
  line-height: 1.6;
}

@media (max-width: 600px) {
  .blog-container {
    padding: 15px;
  }

  .welcome-text {
    font-size: 1.5rem;
  }

  .description {
    font-size: 1rem;
  }

  .info-header, .details-header {
    font-size: 1.1rem;
  }
}
</style>