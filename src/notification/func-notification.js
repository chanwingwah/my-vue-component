import Notification from "./notification.vue";
export default {
  extends: Notification,
  computed: {
    style() {
      return {
        position: "fixed",
        right: "20px",
        bottom: "20px"
      };
    }
  },
  mounted: {},
  methods: {}
};
