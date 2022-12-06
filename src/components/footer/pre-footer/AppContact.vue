<script>
export default {
  name: "AppContact",
};
</script>

<template>
  <div class="contact">
    <h3>CONTACT INFORMATION</h3>
    <span>4746 Tipple Road Michigan 48449</span>
    <div class="info-contact">
      <ul>
        <li><a href="#">Mobile: 1.800.000.0000</a></li>
      </ul>
      <ul>
        <li><a href="#">Email: info@your-company.com</a></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  width: 25%;
  text-align: center;
  & > * {
    margin-bottom: 2.1875rem;
  }
  span {
    display: block;
  }
  h3,
  .info-contact {
    color: var(--lighter-color);
  }
  a {
    color: inherit;
  }
}
</style>
