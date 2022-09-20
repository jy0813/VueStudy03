import ListView from "./ListView";
import bus from "../utils/bus";

//HOC Component

export default function createListView(name) {
  return {
    //재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    name,
    created() {
      bus.$emit("start:spinner");
      this.$store
        .dispatch("FETCH_LIST", this.$route.name)
        .then(() => {
          console.log(5);
          console.log("fetched");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    mounted() {
      bus.$emit("end:spinner");
    },
    render(createElement) {
      return createElement(ListView);
    },
  };
}
