<template>
  <div class="home">
    <file_upload></file_upload>
  </div>
</template>

<script>
// @ is an alias to /src
import file_upload from "./file_upload/index";
// import axios from 'axios'

export default {
  name: "Home",
  components: {
    file_upload,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
