import axios from "axios";
import Vue from "vue";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";
Vue.use(VueToast);
export default {
  name: "file-upload",
  components: {
    VuePlyr,
  },
  props: [],
  data() {
    return {
      api: "http://127.0.0.1:8000/api",
      videos_path: "http://127.0.0.1:8000/storage/videos",
      lesson: {},
      videos: [],
      video: {},
      progress: [],
      doneMsg: false,
      failedMsg: false,
      onLoad: false,
      show: false
    };
  },
  computed: {},
  mounted() {
    this.getVideos();
  },
  methods: {
    upload() {
      const url = `${this.api}/video/upload`;
      this.videos = Array.from(this.$refs.videos.files);
      this.videos.map((video) => {
        this.progress[video.name] = 0;
        const form = new FormData();
        form.append("video", video);
        form.append("name", video.name);
        form.append("type", video.type);
        this.onLoad = true;
        axios
          .post(url, form, {
            onUploadProgress: (event) => {
              this.progress[video.name] = Math.ceil(
                (event.loaded / event.total) * 100
              );
              this.$forceUpdate();
            },
          })
          .then((res) => {
            this.onLoad = false;
            Vue.$toast.success(`${res.data.name} is saved.`, {});
            this.video = res.data;
          })
          .catch((err) => {
            console.log("error" + err);
          });
      });
    },
    getVideos() {
      let url = `${this.api}/get_videos`;
      axios.get(url).then((res) => {
        this.video = res.data;
        console.log(this.video ? "yes" : "no");
      });
    },
    addTitle() {
      axios.post(`${this.api}/add_title/${this.video.id}`, this.video)
      .then((res) => {
        this.video.title = res.data.title
        console.log(res.data)
        Vue.$toast.success(`${res.data.name} is saved.`, {});
      })
    },
    showForm(){
      this.show =! this.show
    },
    getColor(){
      console.log(this.video.color)
    }
  },
};
